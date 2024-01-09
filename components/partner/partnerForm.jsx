"use client";

import { React, useState } from "react";
import { useForm, useController } from "react-hook-form";
import { sendPartnerEmail } from "../../utils/sendPartnerEmail";
import { storePartnerToDB } from "../../utils/storePartner";
import SuccessModal from "../modal/successModal";
import { ErrorMessage } from "@hookform/error-message";
// import Select from "react-select";
import { Option } from "@material-tailwind/react";
import SelectRole from "./selectRole";

export const PartnerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { isSubmitting, isDirty, errors },
  } = useForm({
    defaultValues: {
      name: "",
      mobile: "",
      mail: "",
      eduQual: "",
      role: "",
      pincode: "",
      location: "",
      dob: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const roleOptions = [
    { value: "bqp", label: "Broker Qualified Person" },
    { value: "posp", label: "Point Of Sales Person" },
    { value: "im", label: "Insurance Manager" },
    { value: "mfd", label: "Mutual Fund Distributor" },
  ];

  const handleClear = () => {
    reset();
  };

  async function onSubmit(data) {
    try {
      console.log(`DATA: ${data}`);
      setLoading(true);
      await storePartnerToDB(data);
      await sendPartnerEmail(data);
      reset();
      setShowSuccessModal(true);
    } catch (error) {
      console.log("ERROR WHILE SUBMITTING", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div class="py-3 sm:max-w-xl sm:mx-auto">
      <div class=" px-4 py-10 bg-bondiBlue mx-8 md:mx-0 shadow-md shadow-black rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="h-14 w-14 bg-buttonBlue rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
              <svg
                className="w-6 h-6 text-white"
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
            <div class="divide-y divide-buttonBlue">
              <div class="py-8 text-md leading-6 space-y-4 text-white  sm:leading-7">
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

                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div class="flex flex-col">
                    <label class="leading-loose" htmlFor="dob">
                      Date of birth
                    </label>
                    <input
                      type="text"
                      class="px-4 py-2 border bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none text-white"
                      placeholder="Enter DOB (DD-MM-YYYY)"
                      {...register("dob", {
                        required: "Required field",
                        pattern: {
                          value:
                            /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-(19\d{2}|20\d{2})$/,
                          message: "Enter a valid date in DD-MM-YYYY",
                        },
                      })}
                    />
                    <div className="text-errorRed text-sm italic">
                      <ErrorMessage errors={errors} name="dob" />
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose" htmlFor="mobile">
                      Mobile
                    </label>
                    <input
                      type="text"
                      class="px-4 py-2 border bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none text-white"
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
                </div>

                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none text-white"
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
                <div class="flex flex-col lg:flex-row lg:justify-between">
                  <div class="flex flex-col">
                    <label class="leading-loose" htmlFor="role">
                      Role applying for
                    </label>
                    <select
                      title="select role"
                      name="role"
                      id="countries"
                      class="bg-blueSapphire border border-blueSapphire text-white text-sm rounded-lg focus:ring-black focus:border-black block p-2.5 sm:max-w-screen-sm md:max-w-screen-md"
                      {...register("role", {
                        required: "Please select a role",
                      })}
                    >
                      <option
                        className="text-gray-600 italic "
                        value=""
                        disabled
                        selected
                        hidden
                      >
                        Select a role
                      </option>
                      <option value="posp">Point of Sales Person</option>
                      <option value="bqp">Broker Qualified Person</option>
                      <option value="im">Insurance Manager</option>
                      <option value="mfd">Mutual Fund Distributor</option>
                    </select>
                    <div className="text-errorRed text-sm italic">
                      <ErrorMessage errors={errors} name="role" />
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <label class="leading-loose" htmlFor="pincode">
                      Pincode
                    </label>
                    <input
                      type="number"
                      class="px-4 py-2 border bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none text-white"
                      placeholder="Enter pincode"
                      {...register("pincode", {
                        required: "Required field",
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: "Enter a valid pincode",
                        },
                      })}
                    />
                    <div className="text-errorRed text-sm italic">
                      <ErrorMessage errors={errors} name="pincode" />
                    </div>
                  </div>
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    class="px-4 py-2 border bg-blueSapphire placeholder:text-gray-300 placeholder:italic focus:ring-black focus:border-black w-full sm:text-sm border-blueSapphire rounded-md focus:outline-none text-white"
                    placeholder="Enter location"
                    {...register("location", {
                      required: "Required field",
                      pattern: {
                        value: /^[A-Za-z,]+$/,
                        message: "Enter a valid location",
                      },
                    })}
                  />
                  <div className="text-errorRed text-sm italic">
                    <ErrorMessage errors={errors} name="location" />
                  </div>
                </div>

                <div class="flex flex-col">
                  <label class="leading-loose" htmlFor="eduQual">
                    Highest Educational Qualification
                  </label>
                  <select
                    title="select education"
                    name="eduQual"
                    id="countries"
                    class="bg-blueSapphire border border-blueSapphire text-white text-sm rounded-lg focus:ring-black focus:border-black block p-2.5 sm:max-w-xs md:max-w-screen-md"
                    {...register("eduQual", {
                      required: "Required",
                    })}
                  >
                    <option
                      className="text-gray-600 italic "
                      value=""
                      disabled
                      selected
                      hidden
                    >
                      Select Educational Qualification
                    </option>
                    <option value="10th">Secondary Education (10th)</option>
                    <option value="12th">
                      Senior Secondary Education (12th)
                    </option>
                    <option value="undergraduate">Undergraduate Studies</option>
                    <option value="postgraduate">Postgraduate Studies</option>
                    <option value="others">Other Qualifications</option>
                  </select>
                  <div className="text-errorRed text-sm italic">
                    <ErrorMessage errors={errors} name="eduQual" />
                  </div>
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <button
                  title="clear button"
                  type="button"
                  disabled={!isDirty}
                  onClick={handleClear}
                  class="bg-buttonBlue flex justify-center items-center w-full text-red-600 px-4 py-3 rounded-2xl focus:outline-none disabled:text-gray-400 hover:bg-darkGunmetal "
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
                  className="bg-buttonBlue flex justify-center items-center w-full text-green-600 hover:bg-darkGunmetal  px-4 py-3 rounded-2xl focus:outline-none"
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
