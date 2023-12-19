import Link from "next/link";
import Image from "next/image";
import commitedSuccess from "../public/images/home/committed-to-success.svg";
import helpingAchieve from "../public/images/home/helping-achieve.svg";
import rightSolution from "../public/images/home/right-solutions.svg";

export default function Home() {
  return (
    <div className="bg-darkGunmetal grid grid-cols-1  gap-8">
      {/* First Row */}
      <div className="flex flex-row items-center">
        <div className="px-20 mx-auto">
          <h6 className="mb-2 text-spiroDiscoBall text-4xl font-medium text-left ">
            Helping you <br /> achieve your <br /> dreams
          </h6>
          <span className="text-white text-sm text-left ">
            In this ever-changing world, we are your expert companions in
            shaping your financial future. We combine global best practices with
            deep local knowledge to help you achieve your dreams - your child's
            education, your dream home, and your comfortable retirement. Our
            advanced Financial Needs Analysis is a pathway to your aspirations.
            Start today and let us navigate your journey to a secure and
            prosperous tomorrow.
          </span>
          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-white hover:text-spiroDiscoBall hover:text-lg"
            >
              Get Started
              <svg
                className="w-6 h-6 hover:w-7 hover:h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
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
      <div className="flex flex-row items-center">
        <Image
          src={rightSolution}
          width={710}
          alt="Illustration of people solving a puzzle."
          className="mb-4"
        />
        <div className="text-left px-20 mx-auto">
          <h6 className="mb-2 text-spiroDiscoBall text-4xl font-medium">
            Right <br />
            solutions <br />
            tailored to <br />
            your needs
          </h6>
          <span className="text-white text-sm">
            Your Dreams, Our Commitment: Ensuring the right solutions tailored
            to your needs with the best value to achieve your goals. At every
            step, your interests come first. Our agents bring you unmatched
            value, providing the best options, personalized just for you.
          </span>
          <div className="mt-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-white hover:text-spiroDiscoBall"
            >
              Get Started
              <svg
                className="w-6 h-6 hover:w-7 hover:h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="flex flex-row items-center">
        <div className="text-left px-20 mx-auto">
          <h6 className="mb-2 text-spiroDiscoBall text-4xl font-medium">
            Committed <br />
            to your <br />
            success
          </h6>
          <span className="text-white text-sm">
            Our agents are your neighbors in the community, committed to your
            success throughout your financial journey. We are a trusted
            full-service firm that stands ready, with you at every step - over
            coffee, video, or a phone call. We work hard every day to make
            things easy for you, so you focus on chasing your dreams.
          </span>
          <div className="mt-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 text-white hover:text-spiroDiscoBall"
            >
              Get Started
              <svg
                className="w-6 h-6 hover:w-7 hover:h-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
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
  );
}
