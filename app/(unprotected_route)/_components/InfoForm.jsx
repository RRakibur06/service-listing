"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function InfoForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const fields = [
    { name: "businessName", placeholder: "Business Name", type: "text" },
    {
      name: "businessOwnerName",
      placeholder: "Business Owner Name",
      type: "text",
    },
    { name: "tinNumber", placeholder: "TIN Number", type: "text" },
    { name: "nidNumber", placeholder: "NID Number", type: "text" },
    {
      name: "tradeLicenseNumber",
      placeholder: "Trade License Number",
      type: "text",
    },
    {
      name: "domainName",
      placeholder: "Domain Name (.testsite.com)",
      type: "text",
    },
    { name: "phoneNumber", placeholder: "Phone Number", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "package", placeholder: "Package", type: "text" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-evenly"
    >
      {fields.map((field, index) => (
        <input
          key={index}
          {...register(field.name, { required: true })}
          type={field.type}
          placeholder={field.placeholder}
          className="bg-[#424040] border rounded-[15px] h-[50px] w-[95%] m-auto pl-[10px]"
        />
      ))}
      <input
        type="submit"
        className="border border-gray-800 w-max rounded-[10px] px-[20px] py-[10px] m-auto cursor-pointer"
        value="Submit"
      />
    </form>
  );
}
