import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Success = async ({ params: { userid }, searchParams }: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);
  const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician);

  return (
    <div className="flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WeCare
            </span>
        </a>
        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
            unoptimized
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We will be in touch shortly to confirm.</p>
        </section>
        <section className="request-details">
          <p>Requested appoinment details:</p>
          <div className="flex items-center gap-3">
            <Image 
                src={doctor?.image!}
                alt="doctor"
                height={100}
                width={100}
                className="size-6"
            />
            <p className="whitespace-nowrap">{doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image 
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p>{formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>
        <Button variant="outline" className="shad-primary-btn" asChild>
            <Link href={`/patients/${userid}/new-appointment`}>
                Book another appointment
            </Link>
        </Button>
        <p className="copyright"> © 2025 WeCare. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Success;
