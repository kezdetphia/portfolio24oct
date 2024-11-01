import ProjectCard from "../../components/ProjectCards";
import React from "react";

function Projects() {
  return (
    <div className="pb-20  ">
      <div className="text-center md:text-start pb-5">
        <p className="md:text-8xl text-5xl  font-bold">RECENT</p>
        <p className="md:text-8xl text-5xl font-bold text-secondaryTitle">
          PROJECTS
        </p>
      </div>

      <ProjectCard />
    </div>
  );
}

export default Projects;
