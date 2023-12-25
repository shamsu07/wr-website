"use client";
import Link from "next/link";
import Image from "next/image";
import commitedSuccess from "../public/images/home/committed-to-success.svg";
import helpingAchieve from "../public/images/home/helping-achieve.svg";
import rightSolution from "../public/images/home/right-solutions.svg";
import FadeIn from "../components/animation/FadeIn";

export default function Home() {
  return (
    <div>
      <FadeIn>
        <div className=" flex flex-col xl:grid xl:grid-cols-1  xl:gap-8 ">
          {/* First Row */}
          <div className="flex flex-col gap-4 xl:flex-row items-center xl:p-10 py-10">
            <div className="xl:px-20 px-5 mx-auto text-center xl:text-left">
              <h6 className="mb-2 text-spiroDiscoBall text-4xl font-medium  ">
                Helping you <br /> achieve your <br /> dreams
              </h6>
              <span className="text-white text-sm  ">
                In this ever-changing world, we are your expert companions in
                shaping your financial future. We combine global best practices
                with deep local knowledge to help you achieve your dreams - your
                child's education, your dream home, and your comfortable
                retirement. Our advanced Financial Needs Analysis is a pathway
                to your aspirations. Start today and let us navigate your
                journey to a secure and prosperous tomorrow.
              </span>
              <div className="my-6">
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-spiroDiscoBall text-white font-medium hover:text-darkGunmetal py-2 px-4 border border-white hover:border-transparent rounded-3xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <Image
              src={helpingAchieve}
              width={710}
              alt="Illustration of financial growth."
              className="mb-4"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col gap-4 xl:flex-row items-center xl:p-10 py-10 bg-maastrichtBlue">
            <Image
              src={rightSolution}
              width={710}
              alt="Illustration of people solving a puzzle."
              className="mb-4"
            />
            <div className="xl:px-20 px-5 mx-auto text-center xl:text-left">
              <h6 className="mb-2 text-spiroDiscoBall text-4xl font-medium">
                Right <br />
                solutions <br />
                tailored to <br />
                your needs
              </h6>
              <span className="text-white text-sm">
                Your Dreams, Our Commitment: Ensuring the right solutions
                tailored to your needs with the best value to achieve your
                goals. At every step, your interests come first. Our agents
                bring you unmatched value, providing the best options,
                personalized just for you.
              </span>
              <div className="my-6">
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-spiroDiscoBall text-white font-medium hover:text-darkGunmetal py-2 px-4 border border-white hover:border-transparent rounded-3xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Third Row */}
          <div className="flex flex-col gap-4 xl:flex-row items-center xl:p-10 py-10">
            <div className="xl:px-20 px-5 mx-auto text-center xl:text-left">
              <h6 className="mb-2 text-spiroDiscoBall text-4xl font-medium">
                Committed <br />
                to your <br />
                success
              </h6>
              <span className="text-white text-sm">
                Our agents are your neighbors in the community, committed to
                your success throughout your financial journey. We are a trusted
                full-service firm that stands ready, with you at every step -
                over coffee, video, or a phone call. We work hard every day to
                make things easy for you, so you focus on chasing your dreams.
              </span>
              <div className="my-6">
                <Link
                  href="/contact"
                  className="bg-transparent hover:bg-spiroDiscoBall text-white font-medium hover:text-darkGunmetal py-2 px-4 border border-white hover:border-transparent rounded-3xl"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <Image
              src={commitedSuccess}
              width={710}
              alt="Illustration of two people shaking hands."
              className="mb-4"
            />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
