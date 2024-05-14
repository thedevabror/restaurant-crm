import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Links } from "@/lib/data";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Button variant="outline" size="icon" onClick={handleOpen}>
        {open ? <X /> : <Menu />}
      </Button>
      <div
        className={`absolute w-[100%] h-[300px] grid left-0 grid-cols-1 transition-all duration-300 ease-in-out gap-2 bg-secondary z-50 ${
          open ? "top-[100px]" : "top-[-300px]"
        }`}
      >
        {Links.map((link) => (
          <Link key={link.id} href={link.link} className="px-5 hover:text-primary transition-all duration-200">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
