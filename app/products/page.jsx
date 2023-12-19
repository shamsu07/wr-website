import Image from "next/image";
import ourProducts from "../../public/images/about/about-banner.svg";

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
    <div className="bg-darkGunmetal">
      <Image src={ourProducts} />
      <div className="text-center py-8">
        <h3 className="text-spiroDiscoBall text-2xl">
          OUR
          <br />
          <span className="text-4xl font-semibold">PRODUCTS</span>
        </h3>
      </div>
      {/* 
      <div>
        <p>
          WealthRights is a trusted financial services &amp; solutions company,
          dedicated to providing a wide range of financial products to meet your
          diverse needs. Our commitment to excellence and customer-centric
          approach has made us a preferred choice for individuals seeking robust
          financial solutions. Our WealthRights products in Life Insurance,
          Health Insurance, Motor Insurance, Mutual Funds, and Fixed Deposits,
          each designed to empower you on your financial journey and meet your
          financial goals.
          <br />
        </p>
      </div> */}
      <div className="flex flex-col gap-0">
        <div className="flex-1">
          <ProductCard />
        </div>
        <div className="flex flex-row gap-0">
          <div className="basis-1/2">
            <Life id="life" />
          </div>
          <div className="basis-1/2">
            <Health id="health" />
          </div>
        </div>
        <div className="flex flex-row gap-0">
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
    </div>
  );
}
