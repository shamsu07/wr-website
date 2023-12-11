import Image from "next/image";
import healthInsurance from "../../../../public/images/products/health/health-insurance.svg";


export default function Health() {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <div className="testimonial-item mt-4 mt-lg-0">
          <Image
            src={healthInsurance}
            className="testimonial-img"
            alt="Health Insurance Illustration."
          />
          <h3>Health Insurance</h3>
          <p>
            WealthRights Health Insurance products are your gateway to
            comprehensive healthcare coverage. Our plans offer peace of mind by
            ensuring you and your family have access to topnotch medical
            services when you need them most. With flexible options designed to
            fit your lifestyle, we're committed to safeguarding your well-being.
            Choose WealthRights Health Insurance for a healthier, happier life.
            <br />
            <br />
          </p>
        </div>
      </div>
    </>
  );
}
