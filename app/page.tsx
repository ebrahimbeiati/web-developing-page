import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full">
        <Hero />
        <ModeToggle/>
      </div>
    </main>
  );
}
