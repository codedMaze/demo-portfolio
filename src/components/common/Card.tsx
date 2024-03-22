import Image from "next/image";
import React from "react";
import { BodyText, Title } from ".";

type Props = {
  img: string;
  title: string;
  description: string;
};

const Card = ({ img, description, title }: Props) => {
  return (
    <div className="flex flex-col w-[31%]">
      <div className="w-full relative h-[300px] mb-4">
        <Image src={img} alt="catelogue" fill />
      </div>
      <Title className="mb-2">{title}</Title>
      <BodyText>{description}</BodyText>
    </div>
  );
};

export default Card;
