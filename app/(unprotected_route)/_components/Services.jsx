import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/1.png",
    alt: "iCrew Service",
    name: "Pengooin",
    href: "1",
  },
  {
    src: "/images/2.png",
    alt: "iCrew Service",
    name: "edian",
    href: "1",
  },
  {
    src: "/images/3.png",
    alt: "iCrew Service",
    name: "iDocker",
    href: "1",
  },
  {
    src: "/images/4.png",
    alt: "iCrew Service",
    name: "calculuM",
    href: "1",
  },
  {
    src: "/images/5.png",
    alt: "iCrew Service",
    name: "iNforU",
    href: "1",
  },
  {
    src: "/images/6.png",
    alt: "iCrew Service",
    name: "iNestr",
    href: "1",
  },
  {
    src: "/images/7.png",
    alt: "iCrew Service",
    name: "iRaft",
    href: "1",
  },
  {
    src: "/images/8.png",
    alt: "iCrew Service",
    name: "Harmony",
    href: "1",
  },
];
export default function Services() {
  return (
    <div className="w-full m-auto my-[20px] text-white flex flex-col items-center justify-between">
      <p className="text-4xl font-bold m-auto">Our Services</p>
      <hr className="color-white w-[240px] mt-[20px] mb-[40px]" />
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-x-[20px] gap-y-[40px] w-[60%]">
        {images.map((image, index) => (
          <Link href={`/service/${image.href}`}>
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                className="rounded-full"
              />
              <p className="text-xl mt-[20px]">{image.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
