import React from "react";
import { Title, Card } from "../common";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className="block lg:w-[1050px] mx-auto my-14">
      <Title className="text-center text-2xl mb-8">Latest work</Title>
      <div className="flex flex-col lg:flex-row gap-8 w-full justify-start flex-wrap">
        <Card
          img="/Rectangle 1181.png"
          description="UI, Art drection"
          title="Project title"
        />
        <Card
          img="/Gallery 1281.png"
          description="UI, Art drection"
          title="Project title"
        />
        <Card
          img="/picCard.png"
          description="UI, Art drection"
          title="Project title"
        />
        <Card
          img="/isiah.png"
          description="UI, Art drection"
          title="Project title"
        />
        <Card
          img="/mexico.png"
          description="UI, Art drection"
          title="Project title"
        />
        <Card
          img="/getJob.png"
          description="UI, Art drection"
          title="Project title"
        />
      </div>
    </div>
  );
};

export default Work;
