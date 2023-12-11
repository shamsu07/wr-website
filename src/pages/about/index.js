function About(){
    return(
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
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Template Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
  {/* ======= Header ======= */}
  <header id="header" className="d-flex align-items-center">
    <div className="container d-flex justify-content-between">
      <div className="logo">
        {/*   <h1 class="text-light"><a href="index.html"> </a></h1>*/}
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="index.html">
          <img src="images/logo.svg" alt="" className="img-fluid" />
        </a>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li>
            <a href="about.html">ABOUT US</a>
          </li>
          <li>
            <a href="partner.html">
              <span>PARTNER WITH US</span>
            </a>
          </li>
          <li>
            <a href="products.html">OUR PRODUCTS</a>
          </li>
          <li>
            <a href="contact.html">
              <span>CONTACT US</span>
            </a>{" "}
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
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
              <img
                src="images/02_About_ICON1_Global.svg"
                className="testimonial-img"
                alt=""
              />
              <h3>Global company</h3>
              <h4>fulfilling financial dreams</h4>
              <p>
                <br />
                We are a global company dedicated to helping clients fulfill
                their financial dreams through personalized financial planning.
                We are unwavering advocates for our clients, earning their trust
                through expertise and personal service at scale. By helping our
                clients succeed, we too will achieve success, solidifying our
                position as a trusted partner in their financial journey. Our
                firm is built on three key pillars: People, Processes, and
                Platform.
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="testimonial-item mt-4 mt-lg-0">
              <img
                src="images/02_About_ICON2_OurPeople.svg"
                className="testimonial-img"
                alt=""
              />
              <h3>Our people</h3>
              <h4>are our key to understand clients needs</h4>
              <p>
                We firmly believe that our People are the key to understanding
                client needs and providing holistic financial solutions that
                help them achieve their dreams. Our clients want the right
                answers and feel confident in their choices. At WealthRight, we
                empower our agents to be dedicated problem solvers that truly
                understand our client needs and deliver the best solutions.
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="testimonial-item mt-4">
              <img
                src="images/02_About_ICON3_OurPractices.svg"
                className="testimonial-img"
                alt=""
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
              <img
                src="images/02_About_ICON4_Platform.svg"
                className="testimonial-img"
                alt=""
              />
              <h3>Our platform brings world class capabilities to bear</h3>
              <p>
                We leveraged our global expertise to build a Pioneering Platform
                in service of our clients. Our data driven approach and deep
                learning models guide our product recommendations, training, and
                hiring to ensure that we are always focused on our client’s
                interests
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container" style={{ borderBottom: "1px solid #9cbec8" }}>
        <div className="row">
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>ABOUT US</h4>
            <ul>
              <li>
                {" "}
                <a href="about.html">About WealthRight</a>
              </li>
              <li>
                {" "}
                <a href="ourpresence.html">Our Global Presence</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>PARTNER WITH US</h4>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>OUR PRODUCTS</h4>
            <ul>
              <li>
                {" "}
                <a href="#">Life Insurance</a>
              </li>
              <li>
                {" "}
                <a href="#">Health Insurance</a>
              </li>
              <li>
                {" "}
                <a href="#">Motor &amp; Travel Insurance</a>
              </li>
              <li>
                {" "}
                <a href="#">Mutual Funds</a>
              </li>
              <li>
                {" "}
                <a href="#">Fixed Deposits</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>CONTACT US</h4>
            <p>
              <strong>Registered &amp; Corporate Office</strong>
              <br />
              1701 B, 17th floor,
              <br />
              One International Centre,
              <br />
              Senapati Bapat Marg, Prabhadevi west,
              <br />
              Mumbai, 400013
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <p>
              <img src="images/footer_logo.svg" alt="" />
            </p>
            <p>
              &nbsp;&nbsp;
              <a href="#">
                <img src="images/linkdedin.png" alt="" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#">
                <img src="images/instagram.png" alt="" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#">
                <img src="images/youtube.png" alt="" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#">
                <img src="images/twittwer.png" alt="" />
              </a>
              &nbsp;&nbsp;&nbsp;
              <a href="#">
                <img src="images/facebook.png" alt="" />
              </a>
            </p>
          </div>
          <div className="col-lg-12 col-md-6 footer-links text-center fs-6">
            <p>
              BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS / FRAUDULENT OFFERS
              <br />
              IRDAI is not involved in activities like selling insurance
              policies, announcing bonus or investment of premiums. Public
              receiving such phone calls are requested to lodge a police
              complaint.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="me-md-auto text-md-start ">
        <div className="copyright fs-5">
          © 2023 FiDENTIALInsurance Broker Private Limited. All Rights Reserved
          <span>
            {" "}
            <a href="#">Privacy Policy</a>&nbsp;&nbsp;{" "}
            <a href="#"> Terms of Use</a>
          </span>
        </div>
        <div className="credits">&nbsp;</div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
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