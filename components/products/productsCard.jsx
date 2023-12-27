import Image from "next/image";
import lifeInsurance from "../../public/images/products/life/life-insurance.svg";
import healthInsurance from "../../public/images/products/health/health-insurance.svg";
import mutualFund from "../../public/images/products/mutual/mutual-funds.svg";
import motorTravel from "../../public/images/products/motor/motor-and-travel-insurance.svg";
import fixedDeposit from "../../public/images/products/fixed/fixed-deposit.svg";

export const ProductCard = () => {
  return (
    <div className="mx-auto mb-3 p-3">
      <div className="bg-bondiBlue shadow-xl rounded-2xl mx-auto w-auto lg:max-w-[72.5rem]">
        <div className="text-white text-center md:text-left">
          <div className="space-y-4 p-6 md:p-8 lg:p-8 xl:p-10">
            <p className="text-sm leading-normal italic">
              WealthRight is a trusted financial services & solutions company,
              dedicated to providing a wide range of financial products to meet
              your diverse needs. Our commitment to excellence and
              customer-centric approach has made us a preferred choice for
              individuals seeking robust financial solutions. Our WealthRights
              products in Life Insurance, Health Insurance, Motor Insurance,
              Mutual Funds, and Fixed Deposits, each designed to empower you on
              your financial journey and meet your financial goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Life = () => {
  return (
    <div className="p-3">
      <div className="bg-bondiBlue shadow-xl rounded-2xl p-10  w-auto h-auto ml-auto  xl:max-w-[35.5rem]  xl:h-[20rem] ">
        <div className="mx-auto max-w-md text-white text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={lifeInsurance} width={90} />
            <h3 className="pl-2 text-[26px] font-semibold sm:pl-4 mt-4 sm:mt-0">
              Life Insurance
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              WealthRights Life Insurance products provide comprehensive
              coverage, ensuring financial security for your loved ones and the
              preservation of your assets. Our tailored policies cater to
              various life stages, offering a strong foundation for your
              financial legacy. Whether starting a family, planning retirement,
              or safeguarding investments, trust WealthRights for a prosperous
              future. Invest with us today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Health = () => {
  return (
    <div className="p-3">
      <div className="bg-bondiBlue shadow-xl  rounded-2xl p-10  w-auto h-auto mr-auto  xl:max-w-[35.5rem]  xl:h-[20rem] ">
        <div className="mx-auto max-w-md text-white text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={healthInsurance} width={90} />
            <h3 className="pl-2 text-[26px] font-semibold sm:pl-4 mt-4 sm:mt-0">
              Health Insurance
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              WealthRights Health Insurance products are your gateway to
              comprehensive healthcare coverage. Our plans offer peace of mind
              by ensuring you and your family have access to topnotch medical
              services when you need them most. With flexible options designed
              to fit your lifestyle, we're committed to safeguarding your
              well-being. Choose WealthRights Health Insurance for a healthier,
              happier life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MutualFund = () => {
  return (
    <div className="p-3">
      <div className="bg-bondiBlue shadow-xl  rounded-2xl p-10  w-auto h-auto mr-auto xl:max-w-[35.5rem] xl:h-[20rem] ">
        <div className="mx-auto max-w-md text-white text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={mutualFund} width={90} />
            <h3 className="pl-2 text-[26px] font-semibold sm:pl-4 mt-4 sm:mt-0">
              Mutual Funds
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              WealthRights Mutual Fund products offer diversified and secure
              investment opportunities, tailored to your financial goals and
              risk tolerance. Whether you're saving for retirement, a major
              purchase, or simply growing your wealth, our expertly managed
              portfolios help you achieve your financial dreams with confidence.
              Invest wisely and watch your wealth grow with WealthRights Mutual
              Funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MotorTravel = () => {
  return (
    <div className="p-3">
      <div className="bg-bondiBlue shadow-xl  rounded-2xl p-10  w-auto h-auto ml-auto xl:max-w-[35.5rem] xl:h-[20rem] ">
        <div className="mx-auto max-w-md text-white text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={motorTravel} width={90} />
            <h3 className="pl-2 text-[26px] font-semibold sm:pl-4 mt-4 sm:mt-0">
              Motor &amp; Travel Insurance
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              WealthRights Motor &amp; Travel Insurance products are your
              trusted companions on the road and beyond. With our comprehensive
              coverage, you can enjoy worry-free travels and protect your
              vehicles from unforeseen mishaps. Whether you're planning a road
              trip or commuting daily, we've got you covered with flexible
              policies that cater to your specific needs. Travel with confidence
              and drive with peace of mind with WealthRights Motor &amp; Travel
              Insurance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FixedDeposit = () => {
  return (
    <div className="mx-auto mb-8 p-3">
      <div className="bg-bondiBlue shadow-xl rounded-2xl mx-auto w-auto lg:max-w-[72.5rem] ">
        <div className=" text-white text-center md:text-left p-10">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={fixedDeposit} width={90} />
            <h3 className="pl-2 text-[26px] font-semibold sm:pl-4 mt-4 sm:mt-0">
              Fixed Deposits
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              WealthRights Fixed Deposit products offer secure, competitive
              savings options with flexible terms. Invest confidently for your
              financial goals, whether it's education, emergencies, or future
              expenses, and enjoy the peace of mind of guaranteed returns. Start
              today for a stable financial future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
