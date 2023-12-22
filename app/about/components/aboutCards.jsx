import React from "react";
import Image from "next/image";
import globalCompany from "../../../public/images/about/global-company.svg";
import ourPeople from "../../../public/images/about/our-people.svg";
import ourPlatform from "../../../public/images/about/our-platform.svg";
import ourPractices from "../../../public/images/about/our-practices.svg";

export const GlobalCompany = () => {
  return (
    <div className="m-2 sm:p-3">
      <div className="bg-bondiBlue  shadow-xl mx-auto rounded-2xl p-10  w-auto h-auto xl:max-w-[35.5rem] xl:h-[20rem]  ">
        <div className="mx-auto max-w-md text-white text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={globalCompany} width={90} />
            <h3 className="text-xl pl-2 sm:pl-4 mt-4 sm:mt-0">
              <span className="text-[26px] font-semibold">Global company</span>
              <br />
              fulfilling financial dreams
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              We are a global company dedicated to helping clients fulfill their
              financial dreams through personalized financial planning. We are
              unwavering advocates for our clients, earning their trust through
              expertise and personal service at scale. By helping our clients
              succeed, we too will achieve success, solidifying our position as
              a trusted partner in their financial journey. Our firm is built on
              three key pillars: People, Processes, and Platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const OurPeople = () => {
  return (
    <div className="m-2 sm:p-3">
      <div className="bg-bondiBlue shadow-xl mx-auto rounded-2xl p-10  w-auto h-auto xl:max-w-[35.5rem] xl:h-[20rem]  ">
        <div className="mx-auto max-w-md text-white text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={ourPeople} width={90} />
            <h3 className="text-xl pl-2 sm:pl-4 mt-4 sm:mt-0">
              <span className="text-[26px] font-semibold">Our people</span>
              <br />
              are our key to understand clients needs
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              We firmly believe that our People are the key to understanding
              client needs and providing holistic financial solutions that help
              them achieve their dreams. Our clients want the right answers and
              feel confident in their choices. At WealthRight, we empower our
              agents to be dedicated problem solvers that truly understand our
              client needs and deliver the best solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurPractices = () => {
  return (
    <div className="m-2 sm:p-3">
      <div className="bg-bondiBlue shadow-xl mx-auto rounded-2xl p-10  w-auto h-auto xl:max-w-[35.5rem] xl:h-[20rem]  ">
        <div className="mx-auto max-w-md text-white text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={ourPractices} width={90} />
            <h3 className="text-xl pl-2 sm:pl-4 mt-4 sm:mt-0">
              <span className="text-[26px] font-semibold">Our practices</span>
              <br />
              help us deliver on our promise
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              Our commitment to clients shows in our unyielding advocacy and
              personalized service through our agents. WealthRight's Prescribed
              Practices set the rhythm for all our Associates, ensuring
              excellence in sales and service, and resulting in a consistent
              client experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurPlatform = () => {
  return (
    <div className="m-2 sm:p-3">
      <div className="bg-bondiBlue shadow-xl mx-auto rounded-2xl p-10  w-auto h-auto xl:max-w-[35.5rem] xl:h-[20rem]  ">
        <div className="mx-auto max-w-md text-white text-left">
          <div className="flex flex-col sm:flex-row items-center justify-start">
            <Image src={ourPlatform} width={90} />
            <h3 className="text-xl pl-2 sm:pl-4 mt-4 sm:mt-0">
              <span className="text-[26px] font-semibold">Our platform</span>
              <br />
              brings world class capabilities to bear
            </h3>
          </div>
          <div className="space-y-0 py-2 text-[15px] leading-normal italic">
            <p>
              We leveraged our global expertise to build a Pioneering Platform
              in service of our clients. Our data driven approach and deep
              learning models guide our product recommendations, training, and
              hiring to ensure that we are always focused on our client’s
              interests
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
