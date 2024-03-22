import React from "react";
import { BodyText, Title } from "@ui";
import { skills } from "@/data/skill";
import Image from "next/image";

type Props = {};

const Skill = (props: Props) => {
  return (
    <div className="block lg:w-[1100px] mx-auto my-14 w-full">
      <Title className="text-center text-2xl mb-8">Skill</Title>
      <div className="flex flex-col lg:flex-row gap-8 w-full lg:justify-between justify-center flex-wrap">
        {skills.map((skill) => (
          <div className="flex px-9 py-6 lg:w-[48%] gap-4">
            <div className="w-16 h-12 relative">
              <Image fill src={skill.icon} alt="skill" />
            </div>
            <div className="flex flex-col gap-4">
              <Title className="text-xl">{skill.title}</Title>
              <BodyText>{skill.description}</BodyText>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
