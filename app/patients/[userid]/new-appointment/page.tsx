import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";

export default async function NewAppointment({
  params: { userid },
}: SearchParamProps) {

  const patient = await getPatient(userid);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WeCare
            </span>
          </a>
          <AppointmentForm
            type="create"
            patientId={patient.$id}
            userid={userid}
          />
          <p className="copyright mt-10 py-12">
            © 2025 WeCare. All rights reserved.
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="Onboarding Image"
        className="side-img max-w-[360px] bg-bottom"
      />
    </div>
  );
}
