import Image from "next/image";
import aboutBanner from "../../public/images/about/about-banner.svg";
import globalCompany from "../../public/images/about/global-company.svg";
import ourPeople from "../../public/images/about/our-people.svg";
import ourPlatform from "../../public/images/about/our-platform.svg";
import ourPractices from "../../public/images/about/our-practices.svg";

export default function About() {
  return (
    <main id="main">
      {/* ======= About Us Section ======= */}
      <section id="about-us" className="about-us">
        <div
          className="col-xl-12 d-flex align-items-stretch justify-content-center justify-content-lg-start"
          data-aos="fade-right"
        >
          <Image src={aboutBanner} alt="Illustration drawing." />
        </div>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-xl-12 ps-0 ps-lg-5 pe-lg-1 ">
              <div className="content text-center">
                <h3 data-aos="fade-up">
                  <span>ABOUT</span>
                  <br /> WealthRight<sup>™</sup>
                </h3>
              </div>
              {/* End .content*/}
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="testimonial-item">
                <Image
                  src={globalCompany}
                  className="testimonial-img"
                  alt="Illustration."
                />
                <h3>Global company</h3>
                <h4>fulfilling financial dreams</h4>
                <p>
                  <br />
                  We are a global company dedicated to helping clients fulfill
                  their financial dreams through personalized financial
                  planning. We are unwavering advocates for our clients, earning
                  their trust through expertise and personal service at scale.
                  By helping our clients succeed, we too will achieve success,
                  solidifying our position as a trusted partner in their
                  financial journey. Our firm is built on three key pillars:
                  People, Processes, and Platform.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
              <div className="testimonial-item mt-4 mt-lg-0">
                <Image
                  src={ourPeople}
                  className="testimonial-img"
                  alt="Illustration"
                />
                <h3>Our people</h3>
                <h4>are our key to understand clients needs</h4>
                <p>
                  We firmly believe that our People are the key to understanding
                  client needs and providing holistic financial solutions that
                  help them achieve their dreams. Our clients want the right
                  answers and feel confident in their choices. At WealthRight,
                  we empower our agents to be dedicated problem solvers that
                  truly understand our client needs and deliver the best
                  solutions.
                  <br />
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
              <div className="testimonial-item mt-4">
                <Image
                  src={ourPractices}
                  className="testimonial-img"
                  alt="illustration"
                />
                <h3>Our practices help us deliver on our promise</h3>
                <p>
                  <br />
                  Our commitment to clients shows in our unyielding advocacy and
                  personalized service through our agents. WealthRight's
                  Prescribed Practices set the rhythm for all our Associates,
                  ensuring excellence in sales and service, and resulting in a
                  consistent client experience
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="testimonial-item mt-4">
                <Image
                  src={ourPlatform}
                  className="testimonial-img"
                  alt="Illustration"
                />
                <h3>Our platform brings world class capabilities to bear</h3>
                <p>
                  We leveraged our global expertise to build a Pioneering
                  Platform in service of our clients. Our data driven approach
                  and deep learning models guide our product recommendations,
                  training, and hiring to ensure that we are always focused on
                  our client’s interests
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
