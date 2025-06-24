import React from "react";
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";


// const Register = async () => {
const Register = async ({params: {userid} } : SearchParamProps) => {
  const user = await getUser(userid);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WeCare
            </span>
          </a>
          <RegisterForm user={user}/>
          <p className="copyright mt-10 py-12">
              © 2025 WeCare. All rights reserved.
          </p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="register Image"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
