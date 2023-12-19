"use client";

import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { sendPartnerEmail } from "../../../utils/sendPartnerEmail";
import { storePartnerToDB } from "../../../utils/storePartner";

export const PartnerForm = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    try {
      setLoading(true);
      await storePartnerToDB(data);
      await sendPartnerEmail(data);
    } catch (error) {
      console.log("ERROR WHILE SUBMITTING", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div class="py-3 sm:max-w-xl sm:mx-auto">
      <div class=" px-4 py-10 bg-formBlack mx-8 md:mx-0 shadow-md shadow-black rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="h-14 w-14 bg-spiroDiscoBall rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
              <svg
                className="w-6 h-6 text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M19.728 10.686c-2.38 2.256-6.153 3.381-9.875 3.381-3.722 0-7.4-1.126-9.571-3.371L0 10.437V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7.6l-.272.286Z" />
                <path d="m.135 7.847 1.542 1.417c3.6 3.712 12.747 3.7 16.635.01L19.605 7.9A.98.98 0 0 1 20 7.652V6a2 2 0 0 0-2-2h-3V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H2a2 2 0 0 0-2 2v1.765c.047.024.092.051.135.082ZM10 10.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5ZM7 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V3Z" />
              </svg>
            </div>
            <div class="block pl-2 font-semibold text-xl self-start text-white">
              <h2 class="leading-relaxed">Share Your interest</h2>
              <p class="text-sm text-gray-300 font-normal leading-relaxed">
                Join the journey. Become a partner.
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

                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div class="flex flex-col">
                    <label class="leading-loose" htmlFor="dob">
                      Date of birth
                    </label>
                    <input
                      type="text"
                      class="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
                      placeholder="Enter DOB"
                      {...register("dob", { required: true })}
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
                  <label class="leading-loose" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
                    placeholder="Enter location"
                    {...register("location", { required: true })}
                  />
                </div>

                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="eduQual">
                    Highest Educational Qualification
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border bg-darkGunmetal placeholder:text-gray-600 placeholder:italic focus:ring-bondiBlue focus:border-bondiBlue w-full sm:text-sm border-black rounded-md focus:outline-none text-white"
                    placeholder="Enter Subject"
                    {...register("eduQual", { required: true })}
                  />
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <button
                  type="button"
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
                  class="bg-bondiBlue flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-spiroDiscoBall"
                >
                  {loading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// <form onSubmit={handleSubmit(onSubmit)}>
//   <div className="mb-5">
//     <label htmlFor="name">Full Name</label>
//     <input
//       type="text"
//       placeholder="Full Name"
//       {...register("name", { required: true })}
//     />
//   </div>
//   <div className="mb-5">
//     <label htmlFor="mobile">Mobile</label>
//     <input
//       type="text"
//       placeholder="example@domain.com"
//       {...register("mobile", { required: true })}
//     />
//   </div>
//   <div className="mb-5">
//     <label htmlFor="email">Email Address</label>
//     <input
//       type="email"
//       placeholder="example@domain.com"
//       {...register("email", { required: true })}
//     />
//   </div>
//   <div className="mb-5">
//     <label htmlFor="location">Location</label>
//     <input
//       type="text"
//       placeholder="example@domain.com"
//       {...register("location", { required: true })}
//     />
//   </div>
//   <div className="mb-5">
//     <label htmlFor="dob">DOB</label>
//     <input
//       type="text"
//       placeholder="example@domain.com"
//       {...register("dob", { required: true })}
//     />
//   </div>
//   <div className="mb-5">
//     <label htmlFor="eduQual">Educational Qual.</label>
//     <input
//       type="text"
//       placeholder="example@domain.com"
//       {...register("eduQual", { required: true })}
//     />
//   </div>
//   <div>
//     <button className="hover:shadow-form rounded-md bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none">
//       Submit
//     </button>
//   </div>
// </form>
