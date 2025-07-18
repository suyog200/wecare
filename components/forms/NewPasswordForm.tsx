"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { NewPasswordValidation, ResetPasswordValidation } from "@/lib/validation";
import { useRouter, useSearchParams } from "next/navigation";
import Toast from "../Toast";
import { updateNewPassword } from "@/lib/actions/user.actions";

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
const NewPasswordForm = ({ header, subHeader, newUser }: PatientFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // 1. Define your form.

  const form = useForm<z.infer<typeof NewPasswordValidation>>({
    resolver: zodResolver(NewPasswordValidation),
    defaultValues: {
    password: "",
    confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof NewPasswordValidation>
  ) {
    setIsLoading(true);
    try {
      if (!userId || !secret) {
        setErrorMessage("Invalid or missing user information.");
        setShowToast(true);
        setIsLoading(false);
        return;
      }
      
      const response = await updateNewPassword(userId, secret, values.password);
      console.log("Response from updateNewPassword:", response);
      setShowToast(true);
      setErrorMessage("Password updated successfully.");
      setTimeout(() => {
            router.push("/login");
        }, 2000);

    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Failed to reset password. Please try again.");
      setShowToast(true);
    } finally {
      setIsLoading(false);
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
            name="password"
            label="New Password"
            placeholder="********"
            type="password"
            iconSrc="/assets/icons/lock.svg"
            iconAlt="lock"
          />
        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="confirmPassword"
            label="Confirm Password"
            placeholder="********"
            type="password"
            iconSrc="/assets/icons/lock.svg"
            iconAlt="lock"
          />
          <SubmitButton isLoading={isLoading}>Reset Password</SubmitButton>
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

export default NewPasswordForm;
