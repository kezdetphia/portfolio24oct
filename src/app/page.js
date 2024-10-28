"use client";
import FloatingNavComp from "@/components/FloatingNavComp";
import ProfCard from "@/components/ProfCard";
import ThemeToggle from "@/components/toggleTheme";
import Projects from "./projects/page";
import Tools from "./skills/page";
import Intro from "./intro/page";
import { useRef, useState } from "react";

export default function Home() {
  const introRef = useRef(null);
  const projectsRef = useRef(null);
  const toolsRef = useRef(null);

  const scrollToSection = (section) => {
    section?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <div className=" flex  justify-end    pt-10 pr-14">
        <ThemeToggle />
      </div>
      <div className="   ">
        <FloatingNavComp
          onNavClick={(sectionName) => {
            if (sectionName === "Home") scrollToSection(introRef);
            if (sectionName === "Projects") scrollToSection(projectsRef);
            if (sectionName === "Skills") scrollToSection(toolsRef);
          }}
        />
      </div>
      <div className=" flex flex-col md:flex-row  ">
        <div className="left-pane md:w-2/5 order-2 md:order-1 ">
          <div className="sticky md:top-0 ">
            <ProfCard />
          </div>
        </div>
        <div className="right-pane md:w-3/5  p-20 order-1 md:order-2  ">
          <div className="">
            <div ref={introRef}>
              <Intro />
            </div>
            <div ref={projectsRef}>
              <Projects />
            </div>
            <div ref={toolsRef}>
              <Tools />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
