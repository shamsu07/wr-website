"use client"
import Image from "next/image";
import ourProducts from "../../public/images/about/about-banner.svg";
import FadeIn from "../../components/Animation/FadeIn";
import {
  ProductCard,
  Life,
  MutualFund,
  Health,
  MotorTravel,
  FixedDeposit,
} from "./products";

export default function Products() {
  return (
    <div>
      <FadeIn>
        <div class="flex justify-center items-center">
          <Image src={ourProducts} className="" />
        </div>
        <div className="text-center py-8">
          <h3 className="text-spiroDiscoBall text-2xl">
            OUR
            <br />
            <span className="text-4xl font-semibold">PRODUCTS</span>
          </h3>
        </div>

        <div className="flex flex-col gap-0 mx-auto mb-8">
          <div className="flex-1">
            <ProductCard />
          </div>
          <div className="flex flex-col lg:flex-row gap-0">
            <div className="basis-1/2">
              <Life id="life" />
            </div>
            <div className="basis-1/2">
              <Health id="health" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-0">
            <div className="basis-1/2">
              <MotorTravel id="motor-travel" />
            </div>
            <div className="basis-1/2">
              <MutualFund id="mutual-fund" />
            </div>
          </div>
          <div className="flex-1">
            <FixedDeposit id="fixed-deposit" />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
