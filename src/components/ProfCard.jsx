"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import profPic from "../app/assets/profPic.png";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileText,
} from "@tabler/icons-react";

const ProfCard = () => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
        {/* <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem> */}
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem> */}

        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={profPic}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        {/* name */}
        <div className="flex  items-center mt-2">
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <p className="text-3xl font-bold">MARK FEHER</p>
            <p className="text-2xl font-bold">SOFTWARE ENGINEER</p>
          </CardItem>
        </div>
        <div className="flex justify-center items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://www.linkedin.com/in/markfeher8/"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <IconBrandLinkedin size="2rem" />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/kezdetphia"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <IconBrandGithub size="2rem" />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/kezdetphia"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <IconFileText size="2rem" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProfCard;
