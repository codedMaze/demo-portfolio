import React from "react";
import { Email, Facebook, Linkedin, Twitter } from "@icon";
import Link from "next/link";
import { Navlink } from ".";
import { navLists } from "@/data/navLink";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="absolute bottom-0 w-full bg-red-400 min-h-[100px] flex justify-center pt-10">
      <div className="lg:max-w-[1100px] w-[90%] flex justify-center flex-col">
        <div className="flex gap-6 item-center justify-center">
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <Link href="">
              <Facebook className="h-6 w-6 text-black" />
            </Link>
          </div>
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <Link href="">
              <Email className="h-6 w-6 text-black" />
            </Link>
          </div>
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <Link href="">
              <Twitter className="h-6 w-6 text-black" />
            </Link>
          </div>
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <Link href="">
              <Linkedin className="h-6 w-6 text-black" />
            </Link>
          </div>
        </div>
        <div className="flex item-center justify-center">
          {navLists.map((list) => (
            <Navlink
              href={list.href}
              className={`${"text-white"} text-sm font-medium`}
            >
              {list.name}
            </Navlink>
          ))}
        </div>
        <div className="flex item-center justify-center"></div>
      </div>
    </footer>
  );
};

export default Footer;
