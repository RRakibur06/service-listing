import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-gray-400 flex items-center p-2">
      <Link href="\service">
        <Image
          src={"/images/logo-withoutbg.png"}
          width={50}
          height={50}
          alt="Website Logo"
          className="h-[50px] w-[50px] cursor-pointer"
        />
      </Link>
    </div>
  );
}
