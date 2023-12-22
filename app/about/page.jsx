"use client";
import Image from "next/image";
import aboutBanner from "../../public/images/about/about-banner.svg";
import FadeIn from "../../components/Animation/FadeIn";

import {
  GlobalCompany,
  OurPeople,
  OurPractices,
  OurPlatform,
} from "./components/aboutCards";

export default function About() {
  return (
    <div>
      <FadeIn>
        <div class="flex justify-center items-center">
          <Image src={aboutBanner} className="" />
        </div>

        <div className="text-center py-8">
          <h3 className="text-spiroDiscoBall text-2xl">
            ABOUT
            <br />
            <span className="text-4xl font-semibold">WealthRight</span>
            <sup>™</sup>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center">
          <GlobalCompany />

          <OurPeople />

          <OurPractices />

          <OurPlatform />
        </div>
      </FadeIn>
    </div>
  );
}
