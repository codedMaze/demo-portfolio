import Hero from "@/components/modules/Hero";
import Skill from "@/components/modules/Skill";
import Work from "@/components/modules/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <Work />
      <Skill />
    </main>
  );
}
