"use client";
import React, { useEffect, useRef, useState } from "react";
import { Navlink, Title } from ".";
import { navLists } from "@/data/navLink";
import { Close, Menu } from "@icon";

type Props = {};

const Navbar = (props: Props) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visibleBg, setVisibleBg] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisibleBg(prevScrollPos > currentScrollPos || currentScrollPos < 60);
      setPrevScrollPos(currentScrollPos);
      setShowMenu(false);
    };
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event?.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <>
      <header
        className={`${
          visibleBg
            ? "bg-opacity-100 bg-red-400"
            : "bg-opacity-25 bg-red-400 backdrop-blur-md"
        } w-screen h-20 fixed top-0 z-[300] ease-linear duration-200`}
      >
        <div className="flex h-full items-center justify-between lg:max-w-[1100px] w-[90%] mx-auto relative">
          <Title className="text-2xl text-white ml-8">Adeleke</Title>

          <nav className="lg:flex gap-6 mr-6 hidden ">
            {navLists.map((list) => (
              <Navlink
                href={list.href}
                className={`${
                  visibleBg ? "text-white" : "text-red-500"
                } text-xl font-medium`}
              >
                {list.name}
              </Navlink>
            ))}
          </nav>
          <div
            className="lg:hidden"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            {showMenu ? (
              <Close className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </div>
        </div>
      </header>
      {showMenu && (
        <nav className="fixed lg:hidden items-center flex flex-col right-0 top-20 w-48  z-[100] h-max ease-linear duration-200">
          {navLists.map((list) => (
            <Navlink
              href={list.href}
              className={`${"text-white"} bg-red-400 text-xl font-medium py-4 w-full border-b border-dotted ease-in-out duration-150 hover:bg-red-400/90`}
            >
              {list.name}
            </Navlink>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
