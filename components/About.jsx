import Marquee from "react-fast-marquee";
import { Badge } from "./ui/badge";
import { AboutDivs } from "@/lib/data";

const About = () => {
  return (
    <div className="text-center mt-20 2xl:px-96 flex flex-col gap-40">
      <div className="flex flex-col gap-6">
        <div>
          <Badge variant={"secondary"}>BU PLATFORM</Badge>
        </div>
        <div className="flex flex-col gap-12">
          <h1 className="scroll-m-20 text-xl font-bold tracking-tight lg:text-4xl">
            Restaurant reimagined
          </h1>
          <p className="text-xl text-muted-foreground">
            Biz oziq-ovqatlarni kuzatish, optimallashtirish va etkazib berish
            uchun bir martalik yechimmiz buyurtma berish uchun mobil ilovadan
            foydalanish oson va boshqaruv uchun mukofotga sazovor bo'lgan ish
            stoli ilovasi.
          </p>
          <div className="grid grid-cols-1 min-[465px]:grid-cols-2 lg:grid-cols-3 gap-5">
            {AboutDivs.map((item) => (
              <div key={item.id} className="flex items-center gap-5">
                <div className="bg-secondary p-4 rounded-lg">{item.icon}</div>
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <h1 className="uppercase text-muted-foreground font-semibold">
          100+ brendlar uchun dasturiy ta'minotni yaratdik va ular{" "}
          <span className="font-extrabold text-primary">PLATEFORM</span> ga
          ishonishdi
        </h1>
        <div>
          <Marquee>This area for brands!</Marquee>
        </div>
      </div>
    </div>
  );
};

export default About;
