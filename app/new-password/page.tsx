import Image from "next/image";
import Link from "next/link";
import NewPasswordForm from "@/components/forms/NewPasswordForm";

export default function NewPassword() {
  return (
    <div className="flex h-screen max-h-screen">
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
            <NewPasswordForm
                header="Set New Password"
                subHeader="Enter your new password"
                newUser={false} // Assuming this is not a new user for setting a new password
            />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2025 WeCare Health. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
