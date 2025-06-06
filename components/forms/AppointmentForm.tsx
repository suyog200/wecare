"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { getAppointmentSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { FormFieldType } from "./PatientForm";
import { Doctors } from "@/constants";
import { createAppointment } from "@/lib/actions/appointment.actions";

const AppointmentForm = ({
  userid,
  type,
  patientId,
}: {
  userid: string;
  type: "create" | "cancel" | "schedule";
  patientId?: string;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.

  const AppointmentFormValidation = getAppointmentSchema(type);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
        primaryPhysician: "",
        schedule: new Date(),
        reason: "",
        note: "",
        cancellationReason: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof AppointmentFormValidation>) {
    setIsLoading(true);

    let status;
    switch (type) {
        case "schedule":
            status = "scheduled";
            break;
        case "cancel":
            status = "cancelled";
            break;
        default:
            status = "pending";
            break;            
    }
    try {
      if(type == 'create' && patientId) {
        const appointmentData = {
            userId: userid,
            patient: patientId,
            primaryPhysician: values.primaryPhysician,
            schedule: new Date(values.schedule),
            reason: values.reason!,
            note: values.note,
            status: status as Status
        }
        const appointment = await createAppointment(appointmentData);

        console.log("Appointment created successfully:", appointment);
        if(appointment) {
          form.reset();
          router.push(`/patients/${userid}/new-appointment/success?appointmentId=${appointment.$id}`);
        }
      }   
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  let buttonLabel;

  switch (type) {
    case "create":
      buttonLabel = "Create Appointment";
      break;
    case "cancel":
      buttonLabel = "Cancel Appointment";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      break;
    default:
      buttonLabel = "Submit";
      break;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">New Appointment</h1>
          <p className="text-dark-700">Request new appointment in 10 seconds</p>
        </section>
        {/* CustomFormField Component */}
        {type !== "cancel" && (
          <>
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="primaryPhysician"
              label="Doctor"
              placeholder="Select a doctor"
              options={Doctors}
            />
            <div className="flex flex-col gap-6 xl:flex-row">
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="reason"
                label="Reason for Appointment"
                placeholder="ex: Fever, Cough, etc."
              />
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="note"
                label="Additional comments/notes"
                placeholder="ex: Prefer afternoon appointments, etc."
              />
            </div>
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="schedule"
              label="Expected appointment date"
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </>
        )}
        {type === "cancel" && (
          <>
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="cancellationReason"
              label="Reason for Cancellation"
              placeholder="Enter the reason for cancellation here..."
            />
          </>
        )}
        <SubmitButton isLoading={isLoading} className={`${type === 'cancel' ? 'shad-danger-btn' : 'shad-primary-btn'} w-full`}>{buttonLabel}</SubmitButton>
      </form>
    </Form>
  );
};

export default AppointmentForm;
