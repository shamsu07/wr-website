"use client";

import { React } from "react";
import Image from "next/image";
import contactUs from "../../public/images/contact/contact-us-banner.svg";
import { ContactForm } from "../contact/contactForm";
import { Mumbai, Kolkata, Delaware, Amsterdam } from "../contact/locations";
import FadeIn from "../animation/FadeIn";

export default function Contact() {
  return (
    <div>
      <FadeIn>
        <div class="flex justify-center items-center">
          <Image src={contactUs} className="" alt="Contact Banner"/>
        </div>

        <div className="text-center py-8">
          <h1 className="text-spiroDiscoBall text-2xl">
            CONTACT
            <br />
            <span className="text-4xl font-semibold">US</span>
          </h1>
        </div>

        <ContactForm />

        <div className="mx-4 flex flex-wrap justify-center px-8 mt-8">
          <Mumbai />
          <Kolkata />
          <Delaware />
          <Amsterdam />
        </div>
      </FadeIn>
    </div>
  );
}
