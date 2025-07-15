import PatientForm from "@/components/forms/PatientForm";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

export default function Signup({ searchParams}: SearchParamProps) {
  const isAdmin = searchParams.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {/*TODO: OTP verification */}
      {isAdmin && <PasskeyModal />}
      
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[496px]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WeCare
            </span>
          </Link>
          <PatientForm header="Hi There" subHeader="Signup to create new account" newUser={true}/>
          <Link
            href="/login"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-l whitespace-nowrap dark:text-white mt-3">
              Already have an account? <span className="text-green-500">Login</span>
            </span>
          </Link>
          <div className="text-14-regular mt-20 mb-5 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 WeCare Health. All rights reserved.
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="Onboarding Image"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
