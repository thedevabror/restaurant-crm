"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import { Links } from "@/lib/data";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const { setTheme } = useTheme();

  return (
    <div className="flex justify-between">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={logo}
          width={30}
          height={30}
          alt="PLATEFORM logo"
          className="text-primary"
        />
        <h1 className="font-semibold text-xl hover:text-primary transition-all duration-200">Plateform</h1>
      </Link>
      <div className="flex gap-9 items-center font-bold">
        <div className="hidden lg:flex gap-8 items-center">
          {Links.map((link) => (
            <Link key={link.id} href={link.link} className="hover:text-primary transition-all duration-200">
              {link.title}
            </Link>
          ))}
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
