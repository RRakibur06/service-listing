import Image from "next/image";
import Subscription from "../../../_components/Subscription";
 export default function ServiceDetails() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between w-[80%] m-auto">
        <div className="h-[635px] w-[425px] bg-gray-400 p-[10px] mt-[20px] rounded">
          <div className="flex items-center justify-center h-[40px] w-[98%] m-auto border border-[#1E617A] rounded-3xl bg-white">
            <p className="m-auto text-[#1E617A]">Benefits</p>
          </div>
          <div className="m-auto w-[98%] mt-[20px]">
            <ul>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
            </ul>
          </div>
        </div>
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
        <div className="h-[635px] w-[425px] bg-gray-400 p-[10px] mt-[20px] rounded">
          <div className="flex items-center justify-center h-[40px] w-[98%] m-auto border border-[#1E617A] rounded-3xl bg-white">
            <p className="m-auto text-[#1E617A]">Key Feautures</p>
          </div>
          <div className="m-auto w-[98%] mt-[20px]">
            <ul>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
              <li className="w-full flex items-center justify-center my-[10px]">
                <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
                Lorem ipsum dolor sit amet consectetur adipis
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <p className="text-3xl m-auto text-[#1E617A] font-semibold mt-[20px]">
        Choose a Package
      </p>
      <div className="grid grid-cols-4 gap-x-[16px] gap-y-[20px] mx-[50px] my-[30px]">
        <div className="col-span-1">
          <Subscription />
        </div>
        <div className="col-span-1">
          <Subscription />
        </div>
        <div className="col-span-1">
          <Subscription />
        </div>
        <div className="col-span-1">
          <Subscription />
        </div>
      </div>
    </div>
  );
}
