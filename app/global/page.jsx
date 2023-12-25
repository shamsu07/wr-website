"use client";
import { React } from "react";
import Image from "next/image";
import banner from "../../public/images/ourpresence/our-presence-banner.svg";
import FadeIn from "../../components/animation/FadeIn";
import {
  Mumbai,
  Kolkata,
  Amsterdam,
  Delaware,
} from "../../components/contact/locations";

export default function Partner() {
  return (
    <div>
      <FadeIn>
        <div className="text-center ">
          <h3 className="text-spiroDiscoBall text-2xl py-6">
            OUR
            <br />
            <span className="text-4xl font-semibold">PRESENCE</span>
          </h3>
        </div>
        <div class="flex justify-center items-center">
          <Image src={banner} className="" />
        </div>
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
