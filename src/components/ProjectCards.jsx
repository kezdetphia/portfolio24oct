"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/outside-click";
import profImg from "../app/assets/profPic.png";
import t100 from "../app/assets/t100.png";
import gsa from "../app/assets/gsa.png";
import beepolaroid from "../app/assets/beepolaroid.png";
import lawmato from "../app/assets/lawmato.png";

const ProjectCard = () => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100] ">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4 ">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4 ">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full px-0 gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center  ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-80 md:h-14 md:w-14 rounded-lg object-cover object-top  "
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {/* <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button> */}
          </motion.div>
        ))}
      </ul>
    </>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Webapp for a SaaS B2C startup promoting an app where clients can book appointments with professionals.",
    title: "Lawmato",
    src: lawmato,
    ctaText: "Live",
    ctaLink: "https://lawmato.com",
    content: () => {
      return (
        <p>
          Lawmato is an innovative start-up app built with Angular, Ionic, and
          Capacitor, making it accessible as a web app and available on both
          Google Play and the App Store. Designed for seamless interactions, it
          allows lawyers and prospective clients to connect and consult with
          each other professionally for a fee. The platform's architecture is
          optimized for a responsive and user-friendly experience across mobile
          and desktop.
        </p>
      );
    },
  },
  {
    description:
      "A dynamic platform enabling writers to share their art and connect with a global audience.",
    title: "BeePolaroid",
    src: beepolaroid,
    ctaText: "Live",
    ctaLink: "https://sunnysidedown.vercel.app",
    content: () => {
      return (
        <p>
          BeePolaroid is a responsive web app designed for writers to share
          their poems with a broader audience. Built with Next.js 14 using
          server-side components, it ensures fast and efficient page rendering,
          creating a smooth user experience. The backend is powered by MongoDB
          and Express.js, with Google authentication integrated for secure and
          convenient access. Writers can easily upload, edit, and showcase their
          poetic works, building a creative community where art and expression
          thrive. Available as a web app, BeePolaroid empowers users to connect
          over a shared love of words.
        </p>
      );
    },
  },

  {
    description: "Portfolio website for a local gun shop",
    title: "Golden State Arms",
    src: gsa,
    ctaText: "Play",
    ctaLink: "https://goldenstatearms.vercel.app",
    content: () => {
      return (
        <p>
          A responsive portfolio website built for a local gun shop using
          Next.js 15 and NextUI for an elegant, streamlined design. This site
          showcases essential store information, including opening hours,
          contact details, an interactive location map, and a catalog of
          products available for sale. Designed to offer visitors a seamless
          browsing experience, it efficiently highlights the shop’s offerings
          and encourages engagement with the local community.
        </p>
      );
    },
  },
  {
    description: "Portfolio website for personal trainer",
    title: "T-100 Fitness",
    src: t100,
    ctaText: "Play",
    ctaLink: "https://t100-fitness.vercel.app",
    content: () => {
      return (
        <p>
          A sleek and mobile-responsive portfolio website designed for a fitness
          professional, built with React and styled with Tailwind CSS. This site
          features a modern, user-friendly layout showcasing services, client
          testimonials, fitness programs, and an interactive gallery. Optimized
          for all devices, it provides visitors with seamless navigation,
          highlighting the professional's expertise and encouraging engagement
          with prospective clients.
        </p>
      );
    },
  },
  {
    description:
      "Mobile App for a C2C marketplace for exchanging,giving away,selling and buying home grown produce.",
    title: "Eden",
    // src: { profImg },
    ctaText: "Play",
    // ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          "Aawarapan", a Bollywood movie starring Emraan Hashmi, is renowned for
          its intense storyline and powerful performances. Directed by Mohit
          Suri, the film has become a significant work in the Indian film
          industry. <br /> <br />
          The movie explores themes of love, redemption, and sacrifice,
          capturing the essence of human emotions and relationships. With a
          gripping narrative and memorable music, "Aawarapan" has garnered a
          massive fan following both in India and abroad, solidifying Emraan
          Hashmi's status as a versatile actor.
        </p>
      );
    },
  },
];

export default ProjectCard;
