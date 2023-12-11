import Image from "next/image";
import lifeInsurance from "../../../../public/images/products/life/life-insurance.svg";

export default function Life() {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up">
        <div className="testimonial-item">
          <Image
            src={lifeInsurance}
            className="testimonial-img"
            alt="Life Insurance Illustration."
          />
          <h3>Life Insurance</h3>
          <p>
            <br />
            WealthRights Life Insurance products provide comprehensive coverage,
            ensuring financial security for your loved ones and the preservation
            of your assets. Our tailored policies cater to various life stages,
            offering a strong foundation for your financial legacy. Whether
            starting a family, planning retirement, or safeguarding investments,
            trust WealthRights for a prosperous future. Invest with us today.
          </p>
        </div>
      </div>
    </>
  );
}
