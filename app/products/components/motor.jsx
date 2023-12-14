import Image from "next/image";
import motorTravelInsurance from "../../../../public/images/products/motor/motor-and-travel-insurance.svg";

export default function MotorTravel() {
  return (
    <>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
        <div className="testimonial-item mt-4">
          <Image
            src={motorTravelInsurance}
            className="testimonial-img"
            alt="Motor and Travel Insurance Illustration."
          />
          <h3>Motor &amp; Travel Insurance</h3>
          <p>
            WealthRights Motor &amp; Travel Insurance products are your trusted
            companions on the road and beyond. With our comprehensive coverage,
            you can enjoy worry-free travels and protect your vehicles from
            unforeseen mishaps. Whether you're planning a road trip or commuting
            daily, we've got you covered with flexible policies that cater to
            your specific needs. Travel with confidence and drive with peace of
            mind with WealthRights Motor &amp; Travel Insurance.
          </p>
        </div>
      </div>
    </>
  );
}
