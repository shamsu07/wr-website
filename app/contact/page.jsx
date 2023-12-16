"use client";

import { React, useState } from "react";
import Image from "next/image";
import contactUs from "../../public/images/contact/contact-us-banner.svg";
import { Router } from "next/router";
import { ContactForm } from "./components/contactForm";

export default function Contact() {
  return (
    <div class="bg-darkGunmetal">
      <ContactForm />
    </div>
  );
}
