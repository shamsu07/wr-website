"use client";
import Image from "next/image";
import ourProducts from "../../public/images/about/about-banner.svg";
import FadeIn from "../animation/FadeIn";

import {
  ProductCard,
  Life,
  MutualFund,
  Health,
  MotorTravel,
  FixedDeposit,
} from "./productsCard";

export default function Products() {
  return (
    <div>
      <FadeIn>
        <div class="flex justify-center items-center">
          <Image src={ourProducts} className="" alt=""/>
        </div>
        <div className="text-center py-8">
          <h1 className="text-spiroDiscoBall text-2xl">
            OUR
            <br />
            <span className="text-4xl font-semibold">PRODUCTS</span>
          </h1>
        </div>

        <div className="flex flex-col mx-auto mb-8">
          <div id="product-card" className="flex-1">
            <ProductCard />
          </div>
          <div className="lg:flex lg:flex-row gap-0">
            {/* Use lg:w-1/2 for medium and larger screens */}
            <div id="life" className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <Life />
            </div>
            <div id="health" className="w-full lg:w-1/2">
              <Health />
            </div>
          </div>
          <div className="lg:flex lg:flex-row gap-0">
            <div id="motor-travel" className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <MotorTravel />
            </div>
            <div id="mutual-fund" className="w-full lg:w-1/2">
              <MutualFund />
            </div>
          </div>
          <div id="fixed-deposit" className="flex-1">
            <FixedDeposit />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
