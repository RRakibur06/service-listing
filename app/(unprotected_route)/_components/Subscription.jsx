import Link from "next/link";

export default function Subscription() {
  return (
    <div className=" h-[600px] border border-gray-400 relative rounded">
      <div className="w-full h-[20%] bg-[#1E617A] flex flex-col items-center pt-[10px] text-white">
        <p className="text-2xl">Basic</p>
        <p className="text-xs">3 MONTHS</p>
      </div>
      <div className=" flex flex-col items-center justify-center text-white h-[120px] w-[120px] rounded-full border-4 border-white absolute top-16 m-auto right-0 left-0 bg-[#1E617A]">
        <p className="text-xs">SAVE 33%</p>
        <p className="text-2xl font-bold">$10</p>
        <p className="text-xs">$33/Month</p>
      </div>
      <div className="w-full h-[80%] bg-gray-400">
        <ul className=" pt-[80px] text-sm">
          <li className="w-full flex items-center justify-center my-[10px] bg-gray-500 h-[30px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
          <li className="w-full flex items-center justify-center my-[10px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
          <li className="w-full flex items-center justify-center my-[10px] bg-gray-500 h-[30px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
          <li className="w-full flex items-center justify-center my-[10px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
          <li className="w-full flex items-center justify-center my-[10px] bg-gray-500 h-[30px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
          <li className="w-full flex items-center justify-center my-[10px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
          <li className="w-full flex items-center justify-center my-[10px] bg-gray-500 h-[30px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
          <li className="w-full flex items-center justify-center my-[10px]">
            <i class="bx bxs-check-circle mr-[10px] text-green-400"></i>
            Lorem ipsum dolor sit amet consectetur adipis
          </li>
        </ul>
        <hr className="w-full text-white my-[20px]" />
        <Link href="/subscription/1">
          <div className="flex items-center justify-center h-[40px] w-[95%] m-auto border border-[#1E617A] rounded-3xl bg-white">
            <p className="m-auto text-[#1E617A]">Subscribe</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
