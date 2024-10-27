import ToolsCard from "@/components/Tools";
import React from "react";
import { EvervaultCard, Icon } from "../../components/ui/evervault-card";
import reactIcon from "../assets/icons/react.svg";
import mysql from "../assets/icons/mysql.svg";
import next from "../assets/icons/next.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";
import ts from "../assets/icons/ts.svg";
import python from "../assets/icons/python.svg";
import postgres from "../assets/icons/postgres.svg";
import mongo from "../assets/icons/mongo.svg";
import angular from "../assets/icons/angular.svg";
import django from "../assets/icons/django.svg";
import flask from "../assets/icons/flask.svg";

function Tools() {
  const icons = [
    { title: "React", logo: reactIcon },
    { title: "MongoDB", logo: mongo },
    { title: "Next.js", logo: next },
    { title: "TypeScript", logo: ts },
    { title: "MySQL", logo: mysql },
    { title: "PostgreSQL", logo: postgres },
    { title: "Angular", logo: angular },
    { title: "JavaScript", logo: js },
    { title: "Python", logo: python },
    { title: "Django", logo: django },
    { title: "Flask", logo: flask },
    { title: "HTML", logo: html },
    { title: "CSS", logo: css },
  ];

  return (
    <div className="w-full grid grid-cols-3 gap-5 gap-y-10">
      {icons.map((icon, index) => (
        <div key={index}>
          <ToolsCard logo={icon?.logo} title={icon.title} />
          {/* <EvervaultCard icon={icon.logo} title={icon.title} /> */}
        </div>
      ))}
      {/* {icons.map((icon, index) => (
        <div key={index}>
          <ToolsCard icon={icon.logo} title={icon.title} />
        </div>
      ))} */}
    </div>
  );
}

export default Tools;