"use client";
import React from "react";
import { EvervaultCard, Icon } from "../components/ui/evervault-card";

const ToolsCard = ({ logo, title }) => {
  return (
    <>
      {/* <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-xsm mx-auto p-4 relative h-[10rem] "> */}
      {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" /> */}
      {/* <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" /> */}
      {/* <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" /> */}
      {/* <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

      <EvervaultCard logo={logo} />
      <p className="text-sm border  font-light dark:border-white/[0.2] border-black/[0.2] rounded-full  text-center text-black dark:text-white px-2 py-0.5">
        {/* Hover over this card to reveal an awesome effect. Running out of copy
          here. */}
        {title}
      </p>
      {/* <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
          Watch me hover
        </p> */}
      {/* </div> */}
    </>
  );
};

export default ToolsCard;
