"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState, Suspense } from "react";
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
  newUser: boolean;
}

const NewPasswordFormContent = ({ header, subHeader, newUser }: PatientFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const secret = searchParams.get("secret");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof NewPasswordValidation>>({
    resolver: zodResolver(NewPasswordValidation),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof NewPasswordValidation>) {
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

const NewPasswordForm = (props: PatientFormProps) => {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="spinner border-4 border-gray-200 border-t-green-500 rounded-full w-8 h-8 animate-spin mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading form...</p>
        </div>
      </div>
    }>
      <NewPasswordFormContent {...props} />
    </Suspense>
  );
};

export default NewPasswordForm;
