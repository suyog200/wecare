"use client";

import React from "react";
import Image from "next/image";
import { faqList, reviews, teamMembers } from "@/constants";
import NavigationBar from "@/components/NavigationBar";
import ContactForm from "@/components/forms/ContactForm";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      {/* Navbar section */}
      <NavigationBar />

      {/* Header secton     */}
      <section>
        <section className="h-screen bg-dark-200" id="home">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                WeCare — Because You Matter
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Reliable medical services, simplified and free. Book
                appointments with trusted doctors — in just a few clicks.
              </p>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white rounded-lg hover:opacity-90 focus:ring-4 focus:ring-green-300"
                style={{ backgroundColor: "#24ae7c" }}
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/medical-team.jpg"
                alt="Medical Team"
                className="rounded-lg shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </section>

      {/* about us section */}
      <section className="bg-dark-200" id="about">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Who are we?
            </h2>
            <p className="mb-4">
              At WeCare, we believe that access to quality healthcare should be
              a basic right, not a privilege. Our platform is designed to bridge
              the gap between patients and medical professionals by offering a
              seamless and completely free way to connect with trusted doctors.
              Whether it’s booking an appointment, managing personal health
              information, or simply seeking timely medical advice, WeCare is
              here to make healthcare simpler, more accessible, and stress-free.
              We’re committed to building a healthier community—one consultation
              at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              width={500}
              height={500}
              className="w-full rounded-lg"
              src="/assets/images/about-us-img1.png"
              alt="content 1"
            />
            <Image
              width={500}
              height={500}
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/assets/images/about-us-img2.png"
              alt="content 2"
            />
          </div>
        </div>
      </section>

      {/* services section */}
      <section className="bg-dark-200" id="services">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What we offer?
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Empowering your health journey with seamless, reliable, and
              accessible medical services tailored to your needs — anytime,
              anywhere.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="block max-w-sm p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md hover:bg-white/10 transition-colors">
              <div
                className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"
                style={{ backgroundColor: "#24ae7c" }}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                24/7 Medical Support
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get expert care anytime, anywhere. Our dedicated team of
                healthcare professionals is available around the clock to
                provide you with the support you need, whenever you need it.
              </p>
            </div>
            <div className="block max-w-sm p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md hover:bg-white/10 transition-colors">
              <div
                className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"
                style={{ backgroundColor: "#24ae7c" }}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Easy Appointment Booking
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Schedule visits in just a few clicks. Our user-friendly platform
                allows you to book appointments with trusted doctors
                effortlessly, ensuring you get the care you need without the
                hassle.
              </p>
            </div>
            <div className="block max-w-sm p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md hover:bg-white/10 transition-colors">
              <div
                className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"
                style={{ backgroundColor: "#24ae7c" }}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.5713 5h7v9h-7m-6.00001-4-3 4.5m3-4.5v5m0-5h3.00001m0 0h5m-5 0v5m-3.00001 0h3.00001m-3.00001 0v5m3.00001-5v5m6-6 2.5 6m-3-6-2.5 6m-3-14.5c0 .82843-.67158 1.5-1.50001 1.5-.82843 0-1.5-.67157-1.5-1.5s.67157-1.5 1.5-1.5 1.50001.67157 1.50001 1.5Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Specialist Consultations
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Connect with top doctors across fields. Our platform offers
                access to a wide range of specialists, ensuring you receive
                expert care tailored to your specific health needs.
              </p>
            </div>
            <div className="block max-w-sm p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md hover:bg-white/10 transition-colors">
              <div
                className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"
                style={{ backgroundColor: "#24ae7c" }}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Secure & Confidential
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Your health data is safe with us. WeCare prioritizes your
                privacy and security, ensuring that all your personal health
                information is protected with the highest standards of
                confidentiality and encryption.
              </p>
            </div>
            <div className="block max-w-sm p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-md hover:bg-white/10 transition-colors">
              <div
                className="flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12"
                style={{ backgroundColor: "#24ae7c" }}
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1M9 12H4m8 8V9h8v11h-8Zm0 0H9m8-4a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                User-Friendly Interface
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Seamless experience for all age groups. Our platform is designed
                with user-friendliness in mind, making it easy for everyone—from
                tech-savvy individuals to those less familiar with technology—to
                navigate and access healthcare services effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline section */}
        <div className="max-w-screen-xl px-4 py-12 mx-auto lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              How WeCare Works
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              A simple, step-by-step process to connect you with the healthcare
              you deserve. From signing up to receiving care, we make it easy
              and efficient.
            </p>
          </div>
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div
                  className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0"
                  style={{ backgroundColor: "#24ae7c" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Sign up or login
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Create your WeCare account or log in to access healthcare
                  services anytime.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div
                  className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white  sm:ring-8 dark:ring-gray-900 shrink-0"
                  style={{ backgroundColor: "#24ae7c" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Fill in Personal Details
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Complete your health profile so doctors can better understand
                  your needs.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div
                  className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0"
                  style={{ backgroundColor: "#24ae7c" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Book Your Appointment
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Choose a doctor, select a time slot, and schedule your
                  appointment with ease.
                </p>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div
                  className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 dark:ring-gray-900 shrink-0"
                  style={{ backgroundColor: "#24ae7c" }}
                >
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Get Medical Care
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Connect with trusted healthcare professionals and receive
                  quality care.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <section className="bg-dark-200">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  100+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Experienced and verified doctors
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  50+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Active appointments daily
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  500+
                </dt>
                <dd className="font-light text-gray-500 dark:text-gray-400">
                  Satisfied patients and counting
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </section>

      {/* Testimonals section */}
      <section className="bg-dark-200" id="testimonial">
        <div className="max-w-screen-md mb-8 lg:mb-16 text-center mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            What our users say
          </h2>
        </div>
        <div
          id="controls-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          {/* <!-- Item 1 --> */}
          <div className="relative overflow-hidden rounded-lg min-h-[420px] sm:min-h-[480px]">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`${
                  index === 0 ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure className="max-w-screen-md mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p className="text-2xl font-medium text-gray-900 dark:text-white">
                        "{review.text}"
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          {review.name}
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          {review.role}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full 
  bg-gray-200 dark:bg-gray-700 
  group-hover:bg-gray-300 dark:group-hover:bg-gray-600 
  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-600 
  group-focus:outline-none"
            >
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full 
  bg-gray-200 dark:bg-gray-700 
  group-hover:bg-gray-300 dark:group-hover:bg-gray-600 
  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-600 
  group-focus:outline-none"
            >
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>

      {/* Team section */}
      <section className="bg-dark-200" id="team">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our team
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Meet the dedicated professionals behind WeCare. Our team is
              committed to providing you with the best healthcare experience,
              ensuring your needs are met with compassion and expertise.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center text-gray-500 dark:text-gray-400"
              >
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={member.img}
                  alt={`${member.name} Avatar`}
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <p>{member.role}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                  <li>
                    <a
                      href="#"
                      className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                    >
                      {/* Facebook */}
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-[#00acee] hover:text-gray-900 dark:hover:text-white"
                    >
                      {/* Twitter */}
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A section */}
      <section className="bg-dark-200">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div id="accordion-collapse" data-accordion="collapse">
            {faqList.map((faq, index) => {
              const questionId = `accordion-collapse-heading-${index + 1}`;
              const bodyId = `accordion-collapse-body-${index + 1}`;
              const isFirst = index === 0;

              return (
                <div key={index}>
                  <h2 id={questionId}>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border ${
                        isFirst ? "border-b-0 rounded-t-xl" : "border-b-0"
                      } border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                      data-accordion-target={`#${bodyId}`}
                      aria-expanded={isFirst ? "true" : "false"}
                      aria-controls={bodyId}
                    >
                      <span>{faq.question}</span>
                      <svg
                        data-accordion-icon
                        className="w-3 h-3 rotate-180 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id={bodyId}
                    className={`${isFirst ? "" : "hidden"}`}
                    aria-labelledby={questionId}
                  >
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                      <p className="text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-dark-200" id="contact">
        <ContactForm />
      </section>

      {/* footer section */}
      <section className="bg-dark-200">
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between gap-3">
              <div className="mb-6 md:mb-0">
                <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    WeCare
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Quick Links
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#home" className="hover:underline">
                        Home
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#about" className="hover:underline">
                        About Us
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#services" className="hover:underline">
                        Services
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#testimonial" className="hover:underline">
                        Testimonial
                      </a>
                    </li>
                    <li className="mb-4">
                      <a href="#team" className="hover:underline">
                        Our Team
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Follow us
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline ">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                    Contact Information
                  </h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <li className="mb-4">
                      <p>Email: support@wecare.health</p>
                    </li>
                    <li className="mb-4">
                      <p>Phone: +91 98765 43210 </p>
                    </li>
                    <li className="mb-4">
                      <p>Address: 1st Floor, MediHub Tower</p>
                      <p>Goa, India</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2025{" "}
                <a href="/" className="hover:underline">
                  WeCare
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Home;
