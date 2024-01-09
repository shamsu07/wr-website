"use client";

import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactEmail } from "../../utils/sendContactEmail";
import { storeContactToDB } from "../../utils/storeContact";
import SuccessModal from "../modal/successModal";
import { ErrorMessage } from "@hookform/error-message";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({
    defaultValues: { name: "", mobile: "", mail: "", subject: "", details: "" },
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleClear = () => {
    reset();
  };

  async function onSubmit(data) {
    try {
      setLoading(true);
      setTimeout(() => {}, 2000);
      await storeContactToDB(data);
      await sendContactEmail(data);
      reset();
      setShowSuccessModal(true);
    } catch (error) {
      console.log("ERROR WHILE SUBMITTING", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div class=" py-3 z-0 sm:max-w-xl sm:mx-auto">
      <div class=" px-4 py-10 bg-bondiBlue mx-8 md:mx-0 shadow-md shadow-black rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="h-14 w-14 bg-buttonBlue rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
              <svg
                className="w-6 h-6 text-white"
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
              <p class="text-sm text-gray-200 font-normal leading-relaxed">
                Building financial security, one client at a time. Let&apos;s
                talk.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="divide-y divide-buttonBlue">
              <div class="py-8 text-md leading-6 space-y-4 text-white font-medium sm:leading-7">
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border text-white bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none "
                    placeholder="Enter Full Name"
                    {...register("name", { required: "Required field" })}
                  />
                  <div className="text-errorRed text-sm italic">
                    <ErrorMessage errors={errors} name="name" />
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border text-white bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none "
                    placeholder="Enter Mobile Number"
                    {...register("mobile", {
                      required: "Required field",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a 10-digit mobile number",
                      },
                    })}
                  />
                  <div className="text-errorRed text-sm italic">
                    <ErrorMessage errors={errors} name="mobile" />
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border text-white bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none "
                    placeholder="Enter Email"
                    {...register("email", {
                      required: "Required field",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  <div className="text-errorRed text-sm italic">
                    <ErrorMessage errors={errors} name="email" />
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border text-white bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none "
                    placeholder="Enter Subject"
                    {...register("subject", { required: "Required field" })}
                  />
                  <div className="text-errorRed text-sm italic">
                    <ErrorMessage errors={errors} name="subject" />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="details">
                    Details
                  </label>
                  <textarea
                    type="text"
                    class=" px-4 py-2 border font-medium bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black h-32 w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none text-white"
                    placeholder="Tell us what's on your mind."
                    {...register("details", { required: "Required field" })}
                  />
                  <div className="text-errorRed text-sm italic">
                    <ErrorMessage errors={errors} name="details" />
                  </div>
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <button
                  title="clear button"
                  type="button"
                  disabled={!isDirty}
                  onClick={handleClear}
                  class="bg-buttonBlue font-medium  flex justify-center items-center w-full text-red-600 px-4 py-3 rounded-2xl focus:outline-none disabled:text-gray-400 hover:bg-darkGunmetal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Clear
                </button>

                <button
                  title="submit button"
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-buttonBlue  flex justify-center items-center w-full text-green-600 px-4 py-3 rounded-2xl focus:outline-none hover:bg-darkGunmetal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Submit
                </button>
                {showSuccessModal && (
                  <SuccessModal
                    showModal={showSuccessModal}
                    setShowModal={setShowSuccessModal}
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// <svg
//                       aria-hidden="true"
//                       className="w-6 h-6 text-gray-200 animate-spin  fill-black"
//                       viewBox="0 0 100 101"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
//                         fill="currentColor"
//                       />
//                       <path
//                         d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
//                         fill="currentFill"
//                       />
//                     </svg>
