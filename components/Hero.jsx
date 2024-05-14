import Link from "next/link";
import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import HeroImg from "@/public/hero-sample.png";
import Framer from "@/public/framer-3.png";
import decor1 from "@/public/decor-1.png";
import decor2 from "@/public/decor-2.png";
import decor3 from "@/public/decor-3.png";
import decor4 from "@/public/decor-4.png";
import decor5 from "@/public/decor-5.png";
import { Video } from "@/lib/svgs";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center xl:px-20 mt-20 overflow-hidden relative hero gap-10">
      <div className="flex flex-col gap-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Restoran Boshqaruvi pirog kabi oson tayyorlangan
        </h1>
        <p className="text-xl text-muted-foreground">
          Platforma ajoyib xususiyatlari bilan do'koningizni osongina
          boshqarishga yordam beradi. O'n minglab ishonchli butun dunyodagi
          mijozlar.
        </p>
        <div className="flex flex-col min-[370px]:flex-row gap-5 z-10">
          <Link
            href={"/video"}
            className={buttonVariants({ variant: "secondary" })}
          >
            <Video /> Videoni ko'rish
          </Link>
          <Link
            href={"/dashboard"}
            className={buttonVariants({ variant: "default" })}
          >
            Demoni sinab ko'ring
          </Link>
        </div>
        <div className="absolute top-[450px] left-10 z-0">
          <Image
            src={Framer}
            width={236.29}
            height={236.29}
            alt="PLATEFORM framer"
          />
        </div>
      </div>
      <div className="relative">
        {/* <div className="hero-img">
          <Image src={HeroImg} width={698.93} height={698.93} className="" />
        </div>
        <div className="absolute top-[35%] right-[60%]">
          <Image width={237} height={72} src={decor1} />
        </div>
        <div className="absolute top-[28%] right-[10%]">
          <Image width={201} height={110} src={decor2} />
        </div>
        <div className="absolute top-[75%] right-[12%]">
          <Image width={238} height={106} src={decor3} />
        </div>
        <div className="absolute top-[75%] right-[55%]">
          <Image width={200} height={74} src={decor4} />
        </div>
        <div className="absolute top-[10%] right-[60%]">
          <Image width={111} height={89} src={decor5} />
        </div> */}
        <Image
          src={HeroImg}
          width={698.93}
          height={698.93}
          alt="PLATEFORM hero image"
          className="rounded-2xl w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
