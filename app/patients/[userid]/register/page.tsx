"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { useRouter } from "next/navigation";
import { verifyJWT } from "@/lib/actions/jwt";
import { getUser } from "@/lib/actions/patient.actions";

type SearchParamProps = {
  params: {
    userid: string;
  };
};

const Register = ({ params: { userid } }: SearchParamProps) => {
  const router = useRouter();
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    const checkAuthAndLoad = async () => {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const payload = await verifyJWT(token);
        if (!payload) {
          localStorage.removeItem("auth_token");
          router.push("/login");
          return;
        }

        const userData = await getUser(userid);
        setUser(userData);
      } catch (err) {
        console.error("Auth error:", err);
        localStorage.removeItem("auth_token");
        router.push("/login");
      }
    };

    checkAuthAndLoad();
  }, [router, userid]);


  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              WeCare
            </span>
          </a>
          {user && <RegisterForm user={user} />}
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
