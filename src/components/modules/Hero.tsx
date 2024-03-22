import React from "react";
import { BodyText, SubTitle, Title } from "@ui";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="flex lg:w-[950px] lg:flex-row flex-col items-center justify-between mt-16 gap-10">
      <div className="flex flex-col gap-4 max-w-[350px]">
        <SubTitle className="text-2xl">Branding | Image making </SubTitle>
        <Title className="text-5xl">Visual Designer</Title>
        <BodyText className="text-lg">
          This is a template Figma file, turned into code using Anima.
          <br /> Learn more at AnimaApp.com
        </BodyText>
        <button className="py-4 px-14 flex item-center bg-defBlack text-white w-max">
          <SubTitle className="text-white text-lg">Contact</SubTitle>
        </button>
      </div>
      <div className="relative w-[300px] h-[330px]">
        <Image alt="user image" src="/HeaderImage.png" fill />
      </div>
    </div>
  );
};

export default Hero;
