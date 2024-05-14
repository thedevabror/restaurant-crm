import Image from "next/image";
import { Badge } from "./ui/badge";
import HeroImg from "@/public/hero-sample.png";

const Features = () => {
  return (
    <div className="flex flex-col gap-10 mt-20">
      <div className="uppercase">
        <Badge variant={"secondary"}>Boshqaruv</Badge>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
        <div className="flex flex-col gap-10">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Asosiy narsalarga e'tibor qarating, qolganini biz qilamiz
          </h1>
          <p className="text-md">
            <span className="font-bold text-primary">PLATEFORM</span> - sizning
            buyurtmalaringiz va xodimlaringizni oladi, sizga savdo, marketing
            bo'limlarini boshqarish imkonini beradi - oson va barchasi bir
            joyda.
          </p>
          <p>
            Bizning AI-ga asoslangan optimallashtirish vositamiz yordamida tizim
            sizning biznesingizni yaxshiroq va silliqroq qilish uchun kichik,
            oson amalga oshiriladigan o'zgarishlarni taklif qiladi.
          </p>
        </div>
        <div>
          <Image
            src={HeroImg}
            width={698.93} 
            height={698.93}
            alt="PLATEFORM hero image"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
