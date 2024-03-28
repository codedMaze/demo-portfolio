"use client";
import React from "react";
import { BodyText, SubTitle, Title } from "@ui";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex lg:max-w-[1050px] px-4 lg:px-0 lg:w-full lg:min-[90%] lg:flex-row flex-col items-center justify-between mt-16 gap-10 min-h-[400px] overflow-hidden">
      <div className="flex flex-col gap-4 max-w-[470px] h-max">
        <SubTitle className="text-2xl text-gray-200">
          Hello!
          <br />
          My name is AbdulQadir Adeleke{" "}
        </SubTitle>
        <Title>
          <ReactTyped
            strings={[
              "Electrical Engineer",
              "ELV Technician",
              "Front-end Developer",
            ]}
            loop
            typeSpeed={200}
            className="font-bold sm:text3xl text-5xl overflow-hidden leading-[60px] text-red-500"
            smartBackspace
            fadeOut={true}
            showCursor
            backSpeed={20}
            fadeOutDelay={100}
          />
        </Title>
        <BodyText className="text-lg max-w-[400px] text-gray-400">
          Highly skilled front-end developer, passionate about creating
          user-friendly and visually stunning web applications.
          <span className="ml-1">
            A dedicated Electrical Engineer with a proven track record of
            delivering innovative and efficient solutions.
          </span>
        </BodyText>
        <button className=" ml-2 mb-2 py-3 px-14 flex item-center bg-transparent border-2 hover:border-0 border-red-400 text-red-400 hover:scale-110 hover:text-white w-max hover:bg-red-400 ease-linear duration-300 rounded-lg">
          Contact
        </button>
      </div>
      <motion.div
        className="relative max-w-[100%] min-w-[420px] h-[330px] hidden md:block"
        animate={{ scale: [0.9, 1.2, 0.9] }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 10,
        }}
      >
        <Image alt="user image" src="/hero.jpg" fill />
      </motion.div>
    </div>
  );
};

export default Hero;
