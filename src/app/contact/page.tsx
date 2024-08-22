"use client";

import LocomotiveProvider from "@/providers/locomotive";
import Image from "next/image";
import Loading from "../loading";
import Link from "next/link";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useAlertStore } from "@/store/alert";
import { useForm } from "react-hook-form";
import { ContactForm } from "@/services/contact/types";
import { contactService } from "@/services/contact";
import { useRef, useState } from "react";

export default function Contact() {
  const isLoading = useRef(false);
  const pushAlert = useAlertStore((state) => state.pushAlert);

  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<ContactForm>();

  async function onSubmit() {
    if (isLoading.current) return;

    const data = getValues();

    isLoading.current = true;

    await contactService.send(data);

    pushAlert({
      message: "Mensagem enviada com sucesso!",
      status: 200,
    });

    isLoading.current = false;

    resetForm();
  }

  function resetForm() {
    reset();
    clearErrors();
  }

  return (
    <LocomotiveProvider>
      <Loading isComponent={true} />

      <main className="flex flex-col relative">
        <div data-scroll-section className="absolute-full">
          <Image
            src="/images/background/white-noise.webp"
            alt="Noise Background"
            layout="fill"
            priority
            className="dark:opacity-50"
          />
        </div>

        <section
          data-scroll-section
          className="w-full relative flex-center flex-col"
        >
          <Header />

          <div className="gap-6 mt-28">
            <div className="font-poppins text-5xl small:text-3xl font-bold text-center relative">
              <h2 className="whitespace-nowrap">Let’s talk</h2>
            </div>
          </div>

          <p className="text-dark-light text-center leading-[250%] small:text-left small:px-4 !important mt-20 text-xl max-w-main-9 space-y-7 mb-36">
            Feel free to send me a message using the form below, whether for
            professional or personal inquiries. You can also follow me on my
            social media to get in touch directly or to learn more about me.
          </p>

          <div className="absolute -z-10 left-[25%] shadow-[0px_0px_700px_150px_#C9ECAE]" />
          <div className="absolute -z-10 right-[25%] shadow-[0px_0px_700px_150px_#AEBCEC]" />
        </section>

        <form
          data-scroll-section
          className="flex-center text-xl flex-col small:px-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="max-w-main-8 w-full space-y-main">
            <label className="flex w-full flex-col" htmlFor="email">
              <span className="font-light leading-[250%]">Your E-mail</span>
              <input
                className={
                  "w-full border-b bg-transparent pb-1 pt-2 outline-none " +
                  (errors.email
                    ? "border-red-500"
                    : "border-dark dark:border-white")
                }
                id="email"
                type="text"
                {...register("email", { required: "E-mail is required" })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </label>

            <label className="flex w-full flex-col" htmlFor="name">
              <span className="font-light leading-[250%]">Your Name</span>
              <input
                className={
                  "w-full border-b bg-transparent pb-1 pt-2 outline-none " +
                  (errors.name
                    ? "border-red-500"
                    : "border-dark dark:border-white")
                }
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </label>

            <label className="flex w-full flex-col" htmlFor="message">
              <span className="font-light leading-[250%]">
                How can I help you?
              </span>
              <textarea
                className={
                  "w-full border-b bg-transparent pb-1 pt-2 outline-none " +
                  (errors.message
                    ? "border-red-500"
                    : "border-dark dark:border-white")
                }
                id="message"
                rows={6}
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </label>
          </div>
          <div className="flex-center mt-20">
            <button
              type="submit"
              className="min-w-main-3 gap-1 flex-center py-2.5 px-3.5 group border-b border-r border-dark dark:border-white"
            >
              Send message
            </button>
          </div>
        </form>

        <section
          data-scroll-section
          className="flex-center flex-col text-center pb-[10%] pt-[10%]"
        >
          <hr className="max-w-main-10 w-full pb-[5%] border-dark/30" />
          <p className="mb-10 text-dark-light text-sm max-w-main-5">
            And you can also contact me directly through my e-mail or phone
            number.
          </p>
          <div className="font-bold text-2xl small:text-lg space-x-6 small:space-x-2">
            <Link href="" className="hover:underline">
              edersonff_@hotmail.com.br
            </Link>
            <Link href="" className="hover:underline">
              (47) 99655-6538
            </Link>
          </div>
        </section>

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
