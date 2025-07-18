"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { ResetPasswordValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import Toast from "../Toast";
import { resetPassword } from "@/lib/actions/user.actions";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE_INPUT = "phoneInput",
  CHECKBOX = "checkbox",
  SELECT = "select",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
}

interface PatientFormProps {
  header: string;
  subHeader: string;
  newUser: boolean; // Optional prop to indicate if it's a new user
}
const ResetPasswordForm = ({ header, subHeader, newUser }: PatientFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // 1. Define your form.

  const form = useForm<z.infer<typeof ResetPasswordValidation>>({
    resolver: zodResolver(ResetPasswordValidation),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof ResetPasswordValidation>
  ) {
    setIsLoading(true);
    try {
        await resetPassword({ email: values.email });
        setIsLoading(false);
        setShowToast(true);
        setErrorMessage("a reset link has been sent.");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }


  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex-1"
        >
          <section className="mb-12 space-y-4 mt-5">
            <h1 className="header">{header}👋</h1>
            <p className="text-dark-700">{subHeader}</p>
          </section>
          {/* CustomFormField Component */}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="xyz@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
          <SubmitButton isLoading={isLoading}>Send Email</SubmitButton>
        </form>
      </Form>
      {showToast && (
        <Toast
          status="success"
          message={errorMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default ResetPasswordForm;
