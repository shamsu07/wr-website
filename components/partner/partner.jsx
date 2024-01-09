"use client";

import { React } from "react";
import Image from "next/image";
import partnerWithUs from "../../public/images/partner/partner-with-us-banner.svg";
import { PartnerForm } from "./partnerForm";
import FadeIn from "../animation/FadeIn";

export default function Partner() {
  return (
    <div>
      
      <FadeIn>
        <div class="flex justify-center items-center">
          <Image src={partnerWithUs} className="" alt=""/>
        </div>

        <div className="text-center ">
          <h1 className="text-spiroDiscoBall text-2xl py-6">
            PARTNER
            <br />
            <span className="text-4xl font-semibold">WITH US</span>
          </h1>
          <p className="text-white py-4 px-2 lg:px-20">
            Benefits of becoming a financial solutions provider or agent manager
            with WealthRight: WealthRight will empower you to offer Meaningful
            Financial Solutions and the potential to Earn Unlimited Income with
            a Flexible Work Schedule and Creativity in your Practice Structure.
          </p>
        </div>

        <PartnerForm />
      </FadeIn>
    </div>
  );
}
