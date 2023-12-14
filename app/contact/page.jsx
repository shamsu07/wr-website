"use client";

import { React, useState } from "react";
import Image from "next/image";
import contactUs from "../../public/images/contact/contact-us-banner.svg";
import { Router } from "next/router";
import {ContactForm} from './components/contactForm';

export default function Contact() {

  return (

    <ContactForm/>
    // <>
    //   <meta charSet="utf-8" />
    //   <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    //   <title>Contact -WealthRight</title>
    //   <meta content="" name="description" />
    //   <meta content="" name="keywords" />
    //   {/* Favicons */}
    //   {/* Google Fonts */}
    //   <link
    //     href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Muli:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
    //     rel="stylesheet"
    //   />
    //   {/* Vendor CSS Files */}
    //   <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
    //   <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
    //   <link
    //     href="assets/vendor/bootstrap/css/bootstrap.min.css"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="assets/vendor/boxicons/css/boxicons.min.css"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="assets/vendor/glightbox/css/glightbox.min.css"
    //     rel="stylesheet"
    //   />
    //   <link
    //     href="assets/vendor/swiper/swiper-bundle.min.css"
    //     rel="stylesheet"
    //   />
    //   {/* Template Main CSS File */}
    //   <link href="assets/css/style.css" rel="stylesheet" />

    //   <main id="main">
    //     {/* ======= About Us Section ======= */}
    //     <section id="about-us" className="about-us">
    //       <div
    //         className="col-xl-12 d-flex align-items-stretch justify-content-center justify-content-lg-start"
    //         data-aos="fade-right"
    //       >
    //         <Image src={contactUs} alt="Contact Us Illustration." />
    //       </div>
    //       <div className="container">
    //         <div className="row no-gutters">
    //           <div className="col-xl-12 ps-0 ps-lg-5 pe-lg-1 ">
    //             <div className="content text-center">
    //               <h3 data-aos="fade-up">
    //                 <span>Contact</span>
    //                 <br />
    //                 US
    //               </h3>
    //             </div>
    //             {/* End .content*/}
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     {/* End About Us Section */}
    //     <section id="contact" className="contact">
    //       <div className="container">
    //         <div className="row mt-5 justify-content-center" data-aos="fade-up">
    //           <div className="col-lg-10 mb-5">
    //             {/*<form id="contact-form" action="forms/contact.php" method="post" role="form" class="php-email-form">*/}
    //             <form id="contact-form" className="php-email-form" onSubmit={onSubmit}>
    //               <div className="row">
    //                 <p className="mb-4 fs-3">Write To Us</p>
    //                 <br />
    //                 {/*<p class="mb-4 fs-3"><a href="mailto:hr@wealth-right.com" style="color:#FFFFFF;">hr@wealth-right.com</a></p>*/}
    //                 <div className="col-lg-10 mb-5 ms-auto">
    //                   <div className="col-md-9 form-group mt-3 mt-md-0">
    //                     <p className="mt-3">Name</p>
    //                     <input
    //                       type="text"
    //                       className="form-control mb-4"
    //                       name="txtName"
    //                       id="txtName"
    //                       defaultValue=""
    //                       placeholder="abc"
    //                       onChange={(e) => setName(e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="blank" />
    //                   <div className="col-md-9 form-group mt-3 mt-md-0">
    //                     <p className="mt-3">Mobile</p>
    //                     <input
    //                       type="text"
    //                       className="form-control mb-4"
    //                       name="txtMobile"
    //                       id="txtMobile"
    //                       defaultValue=""
    //                       maxLength={10}
    //                       placeholder={1234567890}
    //                       onChange={(e) => setMobile(e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="blank" />
    //                   <div className="col-md-9 form-group mt-3 mt-md-0">
    //                     <p className="mt-3">Email</p>
    //                     <input
    //                       type="email"
    //                       className="form-control mb-4"
    //                       name="txtEmail"
    //                       id="txtEmail"
    //                       defaultValue=""
    //                       placeholder="abc@gmail.com"
    //                       onChange={(e) => setEmail(e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="blank" />
    //                   <div className="col-md-9 form-group mt-3 mt-md-0">
    //                     <p className="mt-3">Subject</p>
    //                     <input
    //                       type="text"
    //                       className="form-control mb-4"
    //                       name="txtSubject"
    //                       id="txtSubject"
    //                       defaultValue=""
    //                       placeholder="subject"
    //                       onChange={(e) => setSubject(e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="blank" />
    //                   <div className="col-md-9 form-group mt-3 mt-md-0">
    //                     <p className="mt-3">Details</p>
    //                     <textarea
    //                       className="form-control"
    //                       name="txtDetails"
    //                       id="txtDetails"
    //                       rows={5}
    //                       placeholder="details"
    //                       defaultValue={""}
    //                       onChange={(e) => setDetails(e.target.value)}
    //                     />
    //                   </div>
    //                   <div className="blank" />
    //                   {/*<div class="col-md-10 ms-5 mt-2 text-center">
    //                           <p class="mt-4 ms-5">Please check the box below to proceed</p>
    //                       </div>*/}
    //                   <div className="blank" />
    //                   <div className="save">
    //                     {/*<button type="submit" id="btnSubmitContact">SUBMIT</button>*/}
    //                     {/*<a href="#" id="btnSubmitContact" style="background:#f03c02;border:0;padding:10px 24px;color:#fff;transition:0.4s;border-radius:4px">SUBMIT</a>*/}
    //                     <button
    //                       id="btnSubmitContact"
    //                       type="submit"
    //                       disabled={isLoading}
    //                     >
    //                       {isLoading ? "SUBMITING..." : "SUBMIT"}
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //         {/*<div class="my-3">
    //       <div class="loading">Loading</div>
    //       <div class="error-message"></div>
    //       <div class="sent-message">Your message has been sent. Thank you!</div>
    //   </div>*/}
    //       </div>
    //     </section>
    //     <section id="testimonials" className="testimonials">
    //       <div className="container">
    //         <div className="row">
    //           <div className="col-lg-3" data-aos="fade-up">
    //             <div className="testimonial-item mt-4">
    //               <h5>MUMBAI, INDIA</h5>
    //               <p>
    //                 1701 B, 17th floor,
    //                 <br />
    //                 One International Centre,
    //                 <br />
    //                 Senapati Bapat Marg,
    //                 <br />
    //                 Prabhadevi west,
    //                 <br />
    //                 Mumbai, 400013
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-lg-3" data-aos="fade-up" data-aos-delay={100}>
    //             <div className="testimonial-item mt-4">
    //               <h5>KOLKATA, INDIA</h5>
    //               <p>
    //                 2nd Floor, Trust House,
    //                 <br />
    //                 32A, C R AVENUE,
    //                 <br />
    //                 Kolkata 700 012
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-lg-3" data-aos="fade-up" data-aos-delay={200}>
    //             <div className="testimonial-item mt-4">
    //               <h5>WILMINGTON, DELAWARE USA,</h5>
    //               <p>
    //                 251 Little Falls Drive
    //                 <br />
    //                 Wilmington, DE. 19808
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //           <div className="col-lg-3" data-aos="fade-up" data-aos-delay={300}>
    //             <div className="testimonial-item mt-4">
    //               <h5>NETHERLANDS</h5>
    //               <p>
    //                 Locatellikade 1<br />
    //                 1076 AZ Amsterdam
    //                 <br />
    //                 Netherlands
    //                 <br />
    //                 <br />
    //                 <br />
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>
    //   {/* End #main */}
    //   <a
    //     href="#"
    //     className="back-to-top d-flex align-items-center justify-content-center"
    //   >
    //     <i className="bi bi-arrow-up-short" />
    //   </a>
    //   {/* Vendor JS Files */}
    //   {/* Template Main JS File */}
    //   <link rel="stylesheet" href="css/min.css" />
    // </>
  );
}
