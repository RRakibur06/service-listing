import "boxicons/css/boxicons.min.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#0A142F] py-[128px] flex flex-col items-center text-white">
      <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-6 grid-flow-col gap-4 sm:gap-10 max-w-[850px] text-sm">
        <Link href="/about">
          <p className=" mb-2 text-center">About Us</p>
        </Link>
        <Link href="/services">
          <p className=" mb-2 text-center">Services</p>
        </Link>
        <Link href="/portfolio">
          <p className=" text-center">Portfolio</p>
        </Link>
        <Link href="/blog">
          <p className=" mb-2 text-center">Blog</p>
        </Link>
        <Link href="/contact">
          <p className=" mb-2 text-center">Contact Us</p>
        </Link>
        <Link href="/faq">
          <p className=" text-center">FAQ</p>
        </Link>
      </div>
      <div className="flex justify-center pt-4 items-center sm:w-[30%] w-[100%]">
        <i className="bx bxl-facebook bx-sm   rounded-full p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"></i>
        <Link href="https://www.linkedin.com/company/icrew-tech/">
          <i className="bx bxl-linkedin bx-sm    rounded-full p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"></i>
        </Link>

        <i className="bx bxl-youtube bx-sm  first: rounded-full p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"></i>
      </div>
      <p className="sm:mt-5 text-xs text-center ">
        Copyright © iCrew 2023. All Rights Reserved
      </p>
    </div>
  );
}
