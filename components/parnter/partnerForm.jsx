"use client";

import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { sendPartnerEmail } from "../../utils/sendPartnerEmail";
import { storePartnerToDB } from "../../utils/storePartner";
import SuccessModal from "../modal/successModal";

export const PartnerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      mail: "",
      eduQual: "",
      location: "",
      dob: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleClear = () => {
    reset();
  };

  async function onSubmit(data) {
    try {
      console.log(`BEFORE: ${showSuccessModal}`)
      setLoading(true);
      await storePartnerToDB(data);
      await sendPartnerEmail(data);
      reset();
      setShowSuccessModal(true);
    } catch (error) {
      console.log("ERROR WHILE SUBMITTING", error);
    } finally {
      console.log(`AFTER: ${showSuccessModal}`)
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
                  className="bg-blueSapphire flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-bondiBlue disabled:bg-formBlack"
                >
                  {loading ? (
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
