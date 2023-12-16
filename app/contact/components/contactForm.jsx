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
    <div class="bg-bondiBlue mx-auto max-w-4xl px-6 py-12 border-0 shadow-lg sm:rounded-3xl flex justify-center">
      <div>
        <h1 class="mb-8 text-white text-3xl flex justify-center">
          Write To Us
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="w-full grid grid-cols-2 gap-x-0 gap-y-8">
            <div class="flex items-center">
              <label htmlFor="name" class="mr-10 text-white text-xl">
                Name
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter name"
              {...register("name", { required: true })}
              class="bg-bondiBlue text-gray-500  placeholder-gray-300 focus:outline-none border-b border-white p-2"
            />
            <div class="flex items-center">
              <label htmlFor="mobile" class="mr-10 text-white text-xl">
                Mobile
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter mobile"
              class="bg-bondiBlue text-gray-500 placeholder-gray-300 focus:outline-none border-b border-white p-2"
              {...register("mobile", { required: true })}
            />
            <div class="flex items-center">
              <label htmlFor="email" class="mr-10 text-white text-xl">
                Email
              </label>
            </div>
            <input
              type="email"
              placeholder="Enter email"
              class="bg-bondiBlue  placeholder-gray-300 focus:outline-none border-b border-white p-2"
              {...register("email", { required: true })}
            />
            <div class="flex items-center">
              <label htmlFor="subject" class="mr-10 text-white text-xl">
                Subject
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter subject"
              class="bg-bondiBlue text-gray-500 placeholder-gray-300 focus:outline-none border-b border-white p-2"
              {...register("subject", { required: true })}
            />
            <div class="flex items-center">
              <label htmlFor="message" class="mr-10 text-white text-xl">
                Details
              </label>
            </div>
            <textarea
              rows={4}
              placeholder="Type your details"
              class="bg-bondiBlue text-gray-500 placeholder-gray-300 focus:outline-none border-b border-white p-2"
              {...register("details", { required: true })}
            ></textarea>
            <div class="col-span-2 flex justify-center">
              <button class="hover:bg-black rounded-md py-3 px-8 text-base font-semibold text-white outline-none">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
