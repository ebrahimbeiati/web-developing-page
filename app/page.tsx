import Hero from "@/components/Hero";
import { ModeToggle } from "@/components/mode-toggle";
import { IoHomeOutline } from "react-icons/io5";
import { FloatingNav } from '@/components/ui/FloatingNav';
import Grid from '@/components/Grid';
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      {" "}
      <ModeToggle />
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "/",
              icon: (
                <IoHomeOutline className="h-4 w-4 text-neutral-500 dark:text-white" />
              ),
            },
          ]}
        />
        <Hero />
        <Grid/>
      </div>
    </main>
  );
}
