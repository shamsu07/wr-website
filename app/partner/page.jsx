import Image from "next/image";
import partnerWithUs from "../../public/images/partner/partner-with-us-banner.svg";

export default function Partner() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Partner -WealthRight</title>
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
            <Image src={partnerWithUs} alt="Illustration." />
          </div>
          <div className="container">
            <div className="row no-gutters">
              <div className="col-xl-12 ps-0 ps-lg-5 pe-lg-1 ">
                <div className="content text-center">
                  <h3 data-aos="fade-up">
                    <span>PARTNER</span>
                    <br />
                    WITH US
                  </h3>
                </div>
                {/* End .content*/}
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="row mt-5 justify-content-center" data-aos="fade-up">
              <div className="col-lg-10 mb-5">
                {/*<form id="partner-form" action="forms/contact.php" method="post" role="form" class="php-email-form">*/}
                <form id="partner-form" className="php-email-form">
                  <div className="row">
                    <p className="mb-5">
                      Benefits of becoming a financial solutions provider or
                      agent manager with WealthRight.
                      <br />
                      WealthRight will empower you to offer Meaningful Financial
                      Solutions and the potential to Earn Unlimited Income with
                      a Flexible Work Schedule and Creativity in your Practice
                      Structure.
                    </p>
                    <p className="mb-4 fs-3">Share Your Interest</p>
                    <br />
                    {/*<p class="mb-4 fs-3"><a href="mailto:hr@wealth-right.com" style="color:#FFFFFF;">hr@wealth-right.com</a></p>*/}
                    <div className="col-lg-10 mb-5">
                      <div className="col-md-9 form-group mt-3 mt-md-0">
                        <p className="mt-3">Name</p>
                        <input
                          type="text"
                          className="form-control mb-4"
                          name="txtName"
                          id="txtName"
                          defaultValue=""
                          placeholder="abc"
                        />
                      </div>
                      <div className="blank" />
                      <div className="col-md-9 form-group mt-3 mt-md-0">
                        <p className="mt-3">Mobile</p>
                        <input
                          type="text"
                          className="form-control mb-4"
                          name="txtMobile"
                          id="txtMobile"
                          defaultValue=""
                          maxLength={10}
                          placeholder={1234567890}
                        />
                      </div>
                      <div className="blank" />
                      <div className="col-md-9 form-group mt-3 mt-md-0">
                        <p className="mt-3">Email</p>
                        <input
                          type="email"
                          className="form-control mb-4"
                          name="txtEmail"
                          id="txtEmail"
                          defaultValue=""
                          placeholder="abc@gmail.com"
                        />
                      </div>
                      <div className="blank" />
                      <div className="col-md-9 form-group mt-3 mt-md-0">
                        <p className="mt-3">Location</p>
                        <input
                          type="text"
                          className="form-control mb-4"
                          name="txtLocation"
                          id="txtLocation"
                          defaultValue=""
                          placeholder="Mumbai"
                        />
                      </div>
                      <div className="blank" />
                      <div className="col-md-9 form-group mt-3 mt-md-0">
                        <p className="mt-3">Date of birth</p>
                        <input
                          type="text"
                          className="form-control mb-4"
                          name="txtDOB"
                          id="txtDOB"
                          defaultValue=""
                          placeholder="DD-MM-YYYY"
                        />
                      </div>
                      <div className="blank" />
                      <div className="col-md-9 form-group mt-3 mt-md-0">
                        <p className="mt-3">Highest Qualification</p>
                        <input
                          type="text"
                          className="form-control mb-4"
                          name="txtQualification"
                          id="txtQualification"
                          defaultValue=""
                          placeholder="B.Sc."
                        />
                      </div>
                      <div className="blank" />
                      {/*<div class="col-md-10 ms-5 mt-md-0 text-center">
                                  <p class="mb-4 ms-5">Please check the box below to proceed</p>
                              </div>*/}
                      <div className="blank" />
                      <div className="save">
                        {/*<button type="submit" id="btnSubmitPartner">SUBMIT</button>*/}
                        {/*<a href="#" id="btnSubmitPartner" style="background:#f03c02;border:0;padding:10px 24px;color:#fff;transition:0.4s;border-radius:4px">SUBMIT</a>*/}
                        <a href="#" id="btnSubmitPartner">
                          SUBMIT
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*<div class="my-3">
                          <div class="loading">Loading</div>
                          <div class="error-message"></div>
                          <div class="sent-message">Your message has been sent. Thank you!</div>
                      </div>*/}
                </form>
              </div>
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
