"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function ImagesUploadForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const [fileName, setFileName] = useState({
    "Personal Image": "",
    "NID Front": "",
    "NID Back": "",
    "Business Trade License": "",
    "Business Owner TIN": "",
  });

  const handleFileChange = (e, label) => {
    setFileName({ ...fileName, [label]: e.target.files[0].name });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-between"
    >
      {[
        "Personal Image",
        "NID Front",
        "NID Back",
        "Business Trade License",
        "Business Owner TIN",
      ].map((label, index) => (
        <div
          key={index}
          className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center"
        >
          <label htmlFor={label}>{label}</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i className="bx bxs-image-add bx-lg m-auto"></i>
            <input
              type="file"
              {...register(label)}
              onChange={(e) => handleFileChange(e, label)}
              className="m-auto opacity-0"
            />
            {fileName[label] && <p>{fileName[label]}</p>}
          </div>
        </div>
      ))}
      <input
        type="submit"
        className="border border-gray-800 w-max rounded-[10px] px-[20px] py-[10px] m-auto cursor-pointer"
        value="Submit"
      />
    </form>
  );
}
