"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconFileTextSpark,
} from "@tabler/icons-react";
const FloatingNavComp = ({ onNavClick }) => {
  const navItems = [
    {
      name: "Home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Resume",
      icon: (
        <IconFileTextSpark className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} onNavClick={onNavClick} />
      {/* <DummyContent /> */}
    </div>
  );
};

export default FloatingNavComp;
