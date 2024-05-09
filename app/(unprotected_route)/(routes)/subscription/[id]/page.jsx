"use client";

import ImagesUploadForm from "@/app/(unprotected_route)/_components/ImagesUploadForm";
import InfoForm from "@/app/(unprotected_route)/_components/InfoForm";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Subscription() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex m-auto w-[80%] justify-between mt-[30px]">
      <InfoForm />
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-between"
      >
        <input
          {...register("businessName")}
          type="text"
          placeholder="Business Name"
          className="bg-[#424040] border rounded-[15px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("businessOwnerName")}
          type="text"
          placeholder="Business Owner Name"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("tinNumber")}
          type="text"
          placeholder="TIN Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("nidNumber")}
          type="text"
          placeholder="NID Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("tradeLicenseNumber")}
          type="text"
          placeholder="Trade License Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("domainName")}
          type="text"
          placeholder="Domain Name (.testsite.com)"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("phoneNumber")}
          type="text"
          placeholder="Phone Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          {...register("package")}
          type="text"
          placeholder="Package"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input type="submit" />
      </form> */}

      {/* <form
        action=""
        className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-between"
      >
        <input
          type="text"
          placeholder="Business Name"
          className="bg-[#424040] border rounded-[15px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="Business Owner Name"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="TIN Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="NID Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="Trade License Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="Domain Name (.testsite.com)"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="Email"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
        <input
          type="text"
          placeholder="Package"
          className="bg-[#424040] border rounded-[18px] h-[50px] w-[90%] m-auto pl-[10px]"
        />
      </form> */}
      <div className="flex flex-col items-center mt-[10px]">
        <p className="text-4xl text-white">Pengooin</p>
        <hr className="color-white w-[240px] mt-[20px] mb-[40px]" />
        <Image
          src="/images/1.png"
          alt="iCrew Service"
          width={200}
          height={200}
          className="rounded"
        />
      </div>
      {/* <form
        action=""
        className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-between"
      >
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="personalImage">Personal Image</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i class="bx bxs-image-add bx-lg m-auto"></i>
            <input type="file" className="m-auto" />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="personalImage">NID Front</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i class="bx bxs-image-add bx-lg m-auto"></i>
            <input type="file" className="m-auto" />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="personalImage">NID Back</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i class="bx bxs-image-add bx-lg m-auto"></i>
            <input type="file" className="m-auto" />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="personalImage">Business Trade License</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i class="bx bxs-image-add bx-lg m-auto"></i>
            <input type="file" className="m-auto" />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="personalImage">Business Owner TIN</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i class="bx bxs-image-add bx-lg m-auto"></i>
            <input type="file" className="m-auto" />
          </div>
        </div>
      </form> */}

      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-between"
      >
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="personalImage">Personal Image</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i className="bx bxs-image-add bx-lg m-auto"></i>
            <input
              {...register("personalImage")}
              type="file"
              className="m-auto"
            />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="nidFront">NID Front</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i className="bx bxs-image-add bx-lg m-auto"></i>
            <input {...register("nidFront")} type="file" className="m-auto" />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="nidBack">NID Back</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i className="bx bxs-image-add bx-lg m-auto"></i>
            <input {...register("nidBack")} type="file" className="m-auto" />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="businessTradeLicense">Business Trade License</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i className="bx bxs-image-add bx-lg m-auto"></i>
            <input
              {...register("businessTradeLicense")}
              type="file"
              className="m-auto"
            />
          </div>
        </div>
        <div className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
          <label htmlFor="businessOwnerTIN">Business Owner TIN</label>
          <div className="w-full flex flex-col items-center justify-center">
            <i className="bx bxs-image-add bx-lg m-auto"></i>
            <input
              {...register("businessOwnerTIN")}
              type="file"
              className="m-auto"
            />
          </div>
        </div>
        <input type="submit" />
      </form> */}
      <ImagesUploadForm />
    </div>
  );
}

/* <form onSubmit={handleSubmit(onSubmit)} className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-between">
{['Personal Image', 'NID Front', 'NID Back', 'Business Trade License', 'Business Owner TIN'].map((label, index) => (
  <div key={index} className="w-[60%] m-auto h-[100px] flex flex-col justify-center items-center">
    <label htmlFor={label}>{label}</label>
    <div className="w-full flex flex-col items-center justify-center">
      <i className="bx bxs-image-add bx-lg m-auto"></i>
      <input type="file" {...register(label)} className="m-auto" />
    </div>
  </div>
))}
<input type="submit" />
</form> */

// const fields = [
//   { name: 'businessName', placeholder: 'Business Name' },
//   { name: 'businessOwnerName', placeholder: 'Business Owner Name' },
//   { name: 'tinNumber', placeholder: 'TIN Number' },
//   { name: 'nidNumber', placeholder: 'NID Number' },
//   { name: 'tradeLicenseNumber', placeholder: 'Trade License Number' },
//   { name: 'domainName', placeholder: 'Domain Name (.testsite.com)' },
//   { name: 'phoneNumber', placeholder: 'Phone Number' },
//   { name: 'email', placeholder: 'Email' },
//   { name: 'package', placeholder: 'Package' },
// ];
//   <form onSubmit={handleSubmit(onSubmit)} className="w-[30%] h-[600px] bg-gray-400 border rounded-[10px] flex flex-col justify-between">
//     {fields.map((field, index) => (
//       <input
//         key={index}
//         {...register(field.name)}
//         type="text"
//         placeholder={field.placeholder}
//         className="bg-[#424040] border rounded-[15px] h-[50px] w-[90%] m-auto pl-[10px]"
//       />
//     ))}
//     <input type="submit" />
//   </form>
