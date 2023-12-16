import Fixed from "./components/fixed";
import Health from "./components/health";
import Life from "./components/life";
import MotorTravel from "./components/motor";
import Mutual from "./components/mutual";

export default function Products() {
  return (
    <main id="main">
      {/* ======= About Us Section ======= */}
      <section id="about-us" className="about-us">
        <div
          className="col-xl-12 d-flex align-items-stretch justify-content-center justify-content-lg-start"
          data-aos="fade-right"
        >
          <img alt="" />
        </div>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-xl-12 ps-0 ps-lg-5 pe-lg-1 ">
              <div className="content text-center">
                <h3 data-aos="fade-up">
                  <span>OUR</span>
                  <br />
                  PRODUCTS
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 mb-3"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="testimonial-item ">
                <p>
                  WealthRights is a trusted financial services &amp; solutions
                  company, dedicated to providing a wide range of financial
                  products to meet your diverse needs. Our commitment to
                  excellence and customer-centric approach has made us a
                  preferred choice for individuals seeking robust financial
                  solutions. Our WealthRights products in Life Insurance, Health
                  Insurance, Motor Insurance, Mutual Funds, and Fixed Deposits,
                  each designed to empower you on your financial journey and
                  meet your financial goals.
                  <br />
                </p>
              </div>
            </div>
            <Life />
            <Health />
            <MotorTravel />
            <Mutual />
            <Fixed />
          </div>
        </div>
      </section>
    </main>
  );
}
