import Footer from "./footer/footer";
import Header from "./header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Muli:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          href="../public/assets/vendor/animate.css/animate.min.css"
          rel="stylesheet"
        />
        <link href="../public/assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="../public/assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="../public/assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="../public/assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="../public/assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="../public/assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </head>

      <body>
        <Header />
        {children}
        <Footer />

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        <script src="../public/assets/vendor/aos/aos.js"></script>
        <script src="../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../public/assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="../public/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="../public/assets/vendor/swiper/swiper-bundle.min.js"></script>

        {/* <script src="assets/js/main.js"></script> */}
        <link rel="stylesheet" href="../public/css/min.css"></link>
      </body>
    </html>
  );
}
