import Link from "next/link";
import Image from "next/image";
import footerLogo from "../../public/images/footer/footer-logo.svg";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div
            className="container"
            style={{ borderBottom: "1px solid #9cbec8" }}
          >
            <div className="row">
              <div className={`${styles.footerLinks} col-lg-2 col-md-6`}>
                <h4 className={styles.pageHeading}>ABOUT US</h4>
                <ul>
                  <li className={styles.list}>
                    <Link href="/about" className={styles.listContent}>
                      About WealthRight
                    </Link>
                  </li>
                  <li className={styles.list}>
                    <Link href="/ourpresence" className={styles.listContent}>
                      Our Global Presence
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={`${styles.footerLinks} col-lg-2 col-md-6`}>
                <h4 className={styles.pageHeading}>PARTNER WITH US</h4>
              </div>
              <div className={`${styles.footerLinks} col-lg-3 col-md-6`}>
                <h4 className={styles.pageHeading}>OUR PRODUCTS</h4>
                <ul>
                  <li className={styles.list}>
                    {" "}
                    <a href="#" className={styles.listContent}>
                      Life Insurance
                    </a>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <a href="#" className={styles.listContent}>
                      Health Insurance
                    </a>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <a href="#" className={styles.listContent}>
                      Motor &amp; Travel Insurance
                    </a>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <a href="#" className={styles.listContent}>
                      Mutual Funds
                    </a>
                  </li>
                  <li className={styles.list}>
                    {" "}
                    <a href="#" className={styles.listContent}>
                      Fixed Deposits
                    </a>
                  </li>
                </ul>
              </div>
              <div className={`${styles.footerLinks} col-lg-3 col-md-6`}>
                <h4 className={styles.pageHeading}>CONTACT US</h4>
                <p className={styles.address}>
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
              <div className={`${styles.footerLinks} col-lg-2 col-md-6`}>
                <p className={styles.address}>
                  <Image src={footerLogo} alt="Wealth Right company logo." />
                </p>
                <p className={styles.address}>
                  &nbsp;&nbsp;
                  <a href="#" className={styles.link}>
                    <img src="images/linkdedin.png" alt="" />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className={styles.link}>
                    <img src="images/instagram.png" alt="" />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className={styles.link}>
                    <img src="images/youtube.png" alt="" />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className={styles.link}>
                    <img src="images/twittwer.png" alt="" />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="#" className={styles.link}>
                    <img src="images/facebook.png" alt="" />
                  </a>
                </p>
              </div>
              <div
                className={`${styles.footerLinks} col-lg-12 col-md-6 text-center fs-6`}
              >
                <p className={styles.address}>
                  BEWARE OF SPURIOUS PHONE CALLS AND FICTIOUS / FRAUDULENT
                  OFFERS
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
              <span className={styles.span}>
                {" "}
                <a href="#" className={styles.lightText}>
                  Privacy Policy
                </a>
                &nbsp;&nbsp;{" "}
                <a href="#" className={styles.lightText}>
                  {" "}
                  Terms of Use
                </a>
              </span>
            </div>
            <div>&nbsp;</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
