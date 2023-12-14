"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { sendPartnerEmail } from "../../../utils/sendPartnerEmail";
import { storePartnerToDB } from "../../../utils/storePartner";

export const PartnerForm = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    storePartnerToDB(data);
    sendPartnerEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          placeholder="example@domain.com"
          {...register("mobile", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="example@domain.com"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          placeholder="example@domain.com"
          {...register("location", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="dob">DOB</label>
        <input
          type="text"
          placeholder="example@domain.com"
          {...register("dob", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="eduQual">Educational Qual.</label>
        <input
          type="text"
          placeholder="example@domain.com"
          {...register("eduQual", { required: true })}
        />
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
};
