import Image from "next/image";
import fixedDeposit from "../../../../public/images/products/fixed/fixed-deposit.svg";

export default function Fixed() {
    return(
  <>
    <div className="col-lg-12" data-aos="fade-up" data-aos-delay={300}>
      <div className="testimonial-item mt-4">
        <Image
          src={fixedDeposit}
          className="testimonial-img"
          alt="Fixed Deposit Illustration."
        />
        <h3>Fixed Deposits</h3>
        <p>
          <br />
          <br />
          WealthRights Fixed Deposit products offer secure, competitive savings
          options with flexible terms. Invest confidently for your financial
          goals, whether it's education, emergencies, or future expenses, and
          enjoy the peace of mind of guaranteed returns. Start today for a
          stable financial future.
          <br />
          <br />
        </p>
      </div>
    </div>
  </>
    );
}


