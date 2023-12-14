import Image from "next/image";
import mutualFund from '../../../../public/images/products/mutual/mutual-funds.svg';
export default function Mutual() {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
        <div className="testimonial-item mt-4">
          <Image
            src={mutualFund}
            className="testimonial-img"
            alt="Mutual Fund Illustration."
          />
          <h3>Mutual Funds</h3>
          <p>
            WealthRights Mutual Fund products offer diversified and secure
            investment opportunities, tailored to your financial goals and risk
            tolerance. Whether you're saving for retirement, a major purchase,
            or simply growing your wealth, our expertly managed portfolios help
            you achieve your financial dreams with confidence. Invest wisely and
            watch your wealth grow with WealthRights Mutual Funds.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
