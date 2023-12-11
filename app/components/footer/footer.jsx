import Link from "next/link";
import Image from "next/image";
import footerLogo from '../../../public/images/footer/footer-logo.svg';

const Footer = () => {
    return (
        <>
    <footer id="footer">
      <div className="footer-top">
        <div
          className="container"
          style={{ borderBottom: "1px solid #9cbec8" }}
        >
          <div className="row">
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>ABOUT US</h4>
              <ul>
                <li>
                  {" "}
                  <Link href="/about">About WealthRight</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/ourpresence">Our Global Presence</Link>
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
                <Image src={footerLogo} alt="Wealth Right company logo." />
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
            © 2023 FiDENTIALInsurance Broker Private Limited. All Rights
            Reserved
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
  </>
    );
};

export default Footer;