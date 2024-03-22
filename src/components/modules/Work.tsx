import React from "react";
import { Title, Card } from "../common";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className="block lg:max-w-[1050px] lg:w-full lg:min-[90%] my-14">
      <Title className="text-center text-2xl mb-8">Latest work</Title>
      <div className="flex flex-col lg:flex-row lg:gap-8 gap-12 lg:min-w-full max-w-[400px] min-w-[350px] w-full justify-start flex-wrap">
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
