import React, { useState } from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { ContactFormValidation } from "@/lib/validation";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldType } from "./PatientForm";
import CustomFormField from "../CustomFormField";
import { createContactQuery } from "@/lib/actions/contactQueries.actions";
import Toast from "../Toast";

const ContactForm = () => {
  const [showToast, setShowToast] = useState(false);

  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit({
    email,
    message,
  }: z.infer<typeof ContactFormValidation>) {
    try {
      const userData = {
        email,
        message,
      };

      const contactQuery = await createContactQuery(userData);

      if (contactQuery) {
        setShowToast(true);
        form.reset();
        setTimeout(() => {
          setShowToast(false);
        }, 8000); 
      } else {
        console.error("Failed to create contact query");
      }

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        Contact Us
      </h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Have questions or need assistance? We're here to help! Fill out the form
        below, and our team will get back to you as soon as possible.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex-1"
        >
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Your Email"
            placeholder="name@gmail.com"
          />
          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={form.control}
            name="message"
            label="Your Message"
            placeholder="Leave a message..."
          />
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-light focus:ring-4 focus:outline-none focus:ring-primary-light sm:w-fit"
          >
            Send message
          </button>
        </form>
      </Form>
      {showToast && <Toast status="success"/>}
    </div>
  );
};

export default ContactForm;
