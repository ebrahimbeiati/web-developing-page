import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";
import { IoHomeOutline } from "react-icons/io5";
import { FloatingNav } from '@/components/ui/FloatingNav';
import Grid from '@/components/Grid';
import Image from "next/image";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      {" "}
      <ModeToggle />
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience/>
      </div>
    </main>
  );
}
