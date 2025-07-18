"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { LoginFormValidation, UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser, loginUser } from "@/lib/actions/patient.actions";
import { generateJWT } from "@/lib/actions/jwt";
import Toast from "../Toast";
import Link from "next/link";

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
const PatientForm = ({ header, subHeader, newUser }: PatientFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // 1. Define your form.

  const form = useForm<z.infer<typeof UserFormValidation | typeof LoginFormValidation>>({
    resolver: zodResolver(newUser ? UserFormValidation : LoginFormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(
    values: z.infer<typeof UserFormValidation> | z.infer<typeof LoginFormValidation>
  ) {
    setIsLoading(true);
    console.log(newUser, "newUser");
    try {
      if (newUser) {
        // Signup logic
        const userData = {
          name: (values as z.infer<typeof UserFormValidation>).name,
          phone: (values as z.infer<typeof UserFormValidation>).phone,
          email: values.email,
          password: values.password,
        };

        const result = await createUser(userData);

        if (result && result.isNew) {
          router.push(`/login`);
        } else if (result && !result.isNew) {
          setErrorMessage(result.message || "User already exists.");
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 8000); // Hide toast after 8 seconds
          setIsLoading(false);
        }
      } else {
        // Login logic
        const userData = {
          email: values.email,
          password: values.password,
        }
        const loginResult = await loginUser(userData);
        if (loginResult) {
          const token = await generateJWT({ email: userData.email }); // note the await
          localStorage.setItem("auth_token", token);
          router.push(`/patients/${loginResult.userId}/register`);
        } else {
          setErrorMessage("Invalid email or password.");
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 8000); // Hide toast after 8 seconds
          setIsLoading(false);
        }
      }
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
          {!newUser && (
          <Link
            href="/signup"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-l whitespace-nowrap dark:text-white mt-1">
              New to WeCare?{" "}
              <span className="text-green-500">Create Account</span>
            </span>
          </Link>
          )}
          {/* CustomFormField Component */}
          {newUser && (
            <>
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Full name"
              placeholder="John Doe"
              iconSrc="/assets/icons/user.svg"
              iconAlt="user"
            />
            <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone numder"
            placeholder="+1 234 567 890"
          />
            </>
          )}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="xyz@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="password"
            label="Password"
            placeholder="********"
            type="password"
            iconSrc="/assets/icons/lock.svg"
            iconAlt="lock"
          />
          <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
        </form>
      </Form>
      {showToast && (
        <Toast
          status="error"
          message={errorMessage}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default PatientForm;
