"use server";

import { ID, Query } from "node-appwrite";
import {
  APPOINTMENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
  messaging,
} from "../appwrite.config";
import { formatDateTime, parseStringify } from "../utils";
import { Appointment } from "@/types/appwrite.types";
import { revalidatePath } from "next/cache";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const newAppointment = await databases.createDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      ID.unique(),
      appointment
    );
    return parseStringify(newAppointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
  }
};

export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId
    );
    return parseStringify(appointment);
  } catch (error) {
    console.log("Error fetching appointment:", error);
  }
};

export const getReccentAppointments = async () => {
  try {
    const appointments = await databases.listDocuments(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      [
        Query.limit(100), // set a higher limit
        Query.orderDesc("$createdAt"), // optional: sort by latest
      ]
    );

    const initialCounts = {
      scheduledCount: 0,
      pendingCount: 0,
      cancelledCount: 0,
    };

    const counts = (appointments.documents as Appointment[]).reduce(
  (acc, appointment) => {
    const status = appointment.status?.toLowerCase().trim(); // normalize

    if (status === "scheduled") {
      acc.scheduledCount += 1;
    } else if (status === "pending") {
      acc.pendingCount += 1;
    } else if (status === "cancelled") {
      acc.cancelledCount += 1;
    }

    return acc;
  },
  initialCounts
);

    const data = {
      totalCount: appointments.total,
      ...counts,
      documents: appointments.documents,
    };
    return parseStringify(data);
  } catch (error) {
    console.error("Error fetching recent appointments:", error);
  }
};

export const updateAppointment = async ({
  userId,
  appointmentId,
  appointment,
  type,
}: UpdateAppointmentParams) => {
  try {
    const updatedAppointment = await databases.updateDocument(
      DATABASE_ID!,
      APPOINTMENT_COLLECTION_ID!,
      appointmentId,
      appointment
    );

    if (!updatedAppointment) {
      throw new Error("Failed to update appointment");
    }

    // TODO SMS notification logic can be added here
    const smsMessage = `
    Hi, it's WeCare
    ${
      type === "schedule"
        ? `Your appointment has been scheduled for ${
            formatDateTime(appointment.schedule!).dateTime
          } with Dr. ${appointment.primaryPhysician}.`
        : `We regret to inform you that your appointment has been cancelled for the following reason: ${appointment.cancellationReason}`
    }
    `;

    await sendSMSNotification(userId, smsMessage);

    revalidatePath("./admin");
    return parseStringify(updatedAppointment);
  } catch (error) {
    console.error("Error updating appointment:", error);
  }
};

export const sendSMSNotification = async (userId: string, content: string) => {
  try {
    const message = await messaging.createSms(
      ID.unique(),
      content,
      [],
      [userId]
    );

    return parseStringify(message);
  } catch (error) {
    console.log("Error sending SMS notification:", error);
  }
};
