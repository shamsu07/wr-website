"use client";

import { React, useState } from "react";
import Image from "next/image";
import contactUs from "../../public/images/contact/contact-us-banner.svg";
import { Router } from "next/router";
import { ContactForm } from "./components/contactForm";
import { Mumbai, Kolkata, Delaware, Amsterdam } from "./components/locations";

export default function Contact() {
  return (
    <section className=" overflow-hidden">
      <div className="bg-darkGunmetal">
        <div class="flex justify-center items-center">
          <Image src={contactUs} className="" />
        </div>

        <div className="text-center py-8">
          <h3 className="text-spiroDiscoBall text-2xl">
            CONTACT
            <br />
            <span className="text-4xl font-semibold">US</span>
          </h3>
        </div>

        <ContactForm />

        <div className="mx-4 flex flex-wrap justify-center px-8 mt-8">
          <Mumbai />
          <Kolkata />
          <Delaware />
          <Amsterdam />
        </div>
      </div>
    </section>
  );
}
