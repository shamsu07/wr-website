import Link from "next/link";
import Image from "next/image";
import commitedSuccess from "../public/images/home/committed-to-success.svg";
import helpingAchieve from "../public/images/home/helping-achieve.svg";
import rightSolution from "../public/images/home/right-solutions.svg";

export default function Home() {
  return (
    <main id="main">
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-6 mt-lg-0">
              <div className="box" data-aos="fade-right">
                <div className="home_box text-md-start">
                  <h6>
                    Helping you
                    <br /> achieve your
                    <br /> dreams
                    <br />
                  </h6>
                  <span>
                    In this ever-changing world, we are your expert companions
                    in shaping your financial future. We combine global best
                    practices with deep local knowledge to help you achieve your
                    dreams - your child's education, your dream home, and your
                    comfortable retirement. Our advanced Financial Needs
                    Analysis is a pathway to your aspirations. Start today and
                    let us navigate your journey to a secure and prosperous
                    tomorrow.
                  </span>
                  <div className="headspace" />
                  <div className="save">
                    <Link href="/contact">Get Started</Link>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 mt-4 mt-lg-0" dir="ltr">
              <div className="box1" data-aos="fade-left">
                <div className="home_box">
                  <Image
                    src={helpingAchieve}
                    alt="Illustration of financial growth."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-6 mt-4 mt-lg-0">
              <div className="box1" data-aos="fade-right">
                <div className="home_box">
                  <Image
                    src={rightSolution}
                    alt="Illustration of people solving a puzzle."
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-6 mt-lg-0">
              <div className="box" data-aos="fade-left">
                <div className="home_box text-md-start">
                  <h6>
                    Right
                    <br />
                    solutions
                    <br />
                    tailored to
                    <br />
                    your needs
                    <br />
                  </h6>
                  <span>
                    Your Dreams, Our Commitment: Ensuring the right solutions
                    tailored to your needs with the best value to achieve your
                    goals. At every step, your interests come first. Our agents
                    bring you unmatched value, providing the best options,
                    personalized just for you.
                  </span>
                  <div className="headspace" />
                  <div className="save">
                    <Link href="/contact">Get Started</Link>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-6 mt-lg-0">
              <div className="box" data-aos="fade-right">
                <div className="home_box text-md-start">
                  <h6>
                    Committed
                    <br />
                    to your
                    <br />
                    success
                    <br />
                  </h6>
                  <span>
                    Our agents are your neighbors in the community, committed to
                    your success throughout your financial journey. We are a
                    trusted full-service firm that stands ready, with you at
                    every step - over coffee, video or a phone call. We work
                    hard every day to make things easy for you, so you focus on
                    chasing your dreams.
                  </span>
                  <div className="headspace" />
                  <div className="save">
                    <Link href="/contact">Get Started</Link>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 mt-4 mt-lg-0">
              <div className="box1" data-aos="fade-left">
                <div className="home_box">
                  <Image
                    src={commitedSuccess}
                    alt="Illustration of two people shaking hands."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
