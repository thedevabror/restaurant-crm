import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { Links } from "@/lib/data";
import { FaceBook, Instagram, Youtube } from "@/lib/svgs";
const Footer = () => {
  return (
    <div className="text-[#fff] mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 bg-primary-footer px-10 py-10">
      <div className="">
        <div className="flex flex-col gap-4">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={logo}
              width={30}
              height={30}
              alt="PLATEFORM logo"
              className="text-primary"
            />
            <h1 className="font-semibold text-xl hover:text-primary transition-all duration-200">
              Plateform
            </h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-md font-bold tracking-tight lg:text-xl">
          Features
        </h1>
        <div className="grid grid-cols-1 gap-2">
          <Link
            href={"#managament"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            Management
          </Link>
          <Link
            href={"#communication"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            Communication
          </Link>
          <Link
            href={"#analytic"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            Analytic
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-md font-bold tracking-tight lg:text-xl">
          Success stories
        </h1>
        <div className="grid grid-cols-1 gap-2">
          <Link
            href={"#avoburger"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            Avoburger
          </Link>
          <Link
            href={"#starcoffee"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            StarCoffee
          </Link>
          <Link
            href={"#foresthotdogs"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            Forest Hotdogs
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-md font-bold tracking-tight lg:text-xl">
          Social Media
        </h1>
        <div className="grid grid-cols-1 gap-2">
          <Link
            href={"https://instagram.com/eagleabror"}
            target="_blank"
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200 flex items-center gap-3"
          >
            <Instagram />
            <span> Instagram</span>
          </Link>
          <Link
            href={"#communication"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200 flex items-center gap-3"
          >
            <FaceBook />
            <span>Facebook</span>
          </Link>
          <Link
            href={"#analytic"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200 flex items-center gap-3"
          >
            <Youtube />
            <span>Youtube</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-md font-bold tracking-tight lg:text-xl">Contact</h1>
        <div className="grid grid-cols-1 gap-2">
          <Link
            href={"#managament"}
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            Tashkent, Uzbekistan
          </Link>
          <Link
            href="mailto:abrorkhandeveloper@gmail.com"
            className="text-[#fff] hover:text-primary font-normal transition-all duration-200"
          >
            abrorkhandeveloper@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
