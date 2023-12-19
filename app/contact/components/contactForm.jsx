"use client";

import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "../../../utils/sendContactEmail";
import { storeContactToDB } from "../../../utils/storeContact";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm({
    defaultValues: { name: "", mobile: "", mail: "", subject: "", details: "" },
  });
  // const { isSubmitting  } = formState;
  console.log("WWWWWWWWWWWWW", isDirty);

  const handleClear = () => {
    reset();
  };
  async function onSubmit(data) {
    try {
      // Adding a 3-second delay using setTimeout
      await new Promise((resolve) => setTimeout(resolve, 3000));

      await storeContactToDB(data);
      await sendContactEmail(data);
      alert("Message Sent!!");
      reset();
      setFieldsFilled(false);
    } catch (error) {
      console.log("ERROR WHILE SUBMITTING", error);
    } finally {
      console.log("Submission success");
    }
  }

  return (
    <div class=" py-3 z-0 sm:max-w-xl sm:mx-auto">
      <div class=" px-4 py-10 bg-formBlack mx-8 md:mx-0 shadow-md shadow-black rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="h-14 w-14 bg-spiroDiscoBall rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
              <svg
                className="w-6 h-6 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <div class="block pl-2 font-semibold text-xl self-start text-white">
              <h2 class="leading-relaxed">Write To Us</h2>
              <p class="text-sm text-gray-300 font-normal leading-relaxed">
                Building financial security, one client at a time. Let's talk.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="divide-y divide-gray-500">
              <div class="py-8 text-md leading-6 space-y-4 text-white  sm:leading-7">
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border text-white bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none "
                    placeholder="Enter Full Name"
                    {...register("name", { required: true })}
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
                    placeholder="Enter Mobile Number"
                    {...register("mobile", { required: true })}
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
                    placeholder="Enter Email"
                    {...register("email", { required: true })}
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
                    placeholder="Enter Subject"
                    {...register("subject", { required: true })}
                  />
                </div>

                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="details">
                    Details
                  </label>
                  <textarea
                    type="text"
                    class="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue h-32 w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
                    placeholder="Tell us what's on your mind."
                    {...register("details", { required: true })}
                  />
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <button
                  type="button"
                  disabled={!isDirty}
                  onClick={handleClear}
                  class="bg-darkGunmetal flex justify-center items-center w-full text-red-500 px-4 py-3 rounded-md focus:outline-none disabled:text-gray-400 hover:bg-black hover:text-red-600"
                >
                  <svg
                    class="w-6 h-6 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>{" "}
                  Clear
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blueSapphire flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-bondiBlue"
                >
                  {isSubmitting ? (
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin  fill-black"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

{
  /* <div class="bg-bondiBlue mx-auto max-w-4xl px-6 py-12 border-0 shadow-lg sm:rounded-3xl flex justify-center">
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
      </div> */
}
