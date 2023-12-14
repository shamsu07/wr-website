import Fixed from "./components/fixed";
import Health from "./components/health";
import Life from "./components/life";
import MotorTravel from "./components/motor";
import Mutual from "./components/mutual";

import "./products.module.css";

export default function Products() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>About -WealthRight</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />
      {/* Favicons */}
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Muli:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* Vendor CSS Files */}
      <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
      <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
      <link
        href="assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link
        href="assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
      {/* Template Main CSS File */}
      <link href="assets/css/style.css" rel="stylesheet" />

      <main id="main">
        {/* ======= About Us Section ======= */}
        <section id="about-us" className="about-us">
          <div
            className="col-xl-12 d-flex align-items-stretch justify-content-center justify-content-lg-start"
            data-aos="fade-right"
          >
            <img src="images/02AboutWealthRight_Banner.svg" alt="" />
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
                    solutions. Our WealthRights products in Life Insurance,
                    Health Insurance, Motor Insurance, Mutual Funds, and Fixed
                    Deposits, each designed to empower you on your financial
                    journey and meet your financial goals.
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
      {/* End #main */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
      <link rel="stylesheet" href="css/min.css" />
    </>
  );
}
