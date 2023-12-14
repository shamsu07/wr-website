"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "../../../utils/sendContactEmail";
import { storeContactToDB } from "../../../utils/storeContact";

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    storeContactToDB(data);
    sendContactEmail(data);
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
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          placeholder="example@domain.com"
          {...register("subject", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="message">Details</label>
        <textarea
          rows={4}
          placeholder="Type your Details"
          {...register("details", { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
          Submit
        </button>
      </div>
    </form>
  );
};
