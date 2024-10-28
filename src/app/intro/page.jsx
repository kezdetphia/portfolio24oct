import React from "react";

function Intro() {
  return (
    <>
      <div className="text-center md:text-start ">
        <p className="md:text-8xl text-5xl  font-bold ">SOFTWARE</p>
        <p className="md:text-8xl text-5xl font-bold text-secondaryTitle">
          ENGINEER
        </p>
      </div>
      <p className="pt-10 text-secondaryText">
        Hi there! I’m a Full Stack Developer with 5 years of experience,
        comfortable on both front and back end. Coding isn’t just my job; it’s
        my favorite hobby, too. I’ve spent a lot of time in the MERN stack (my
        personal favorite) but am currently working with Angular and PostgreSQL.{" "}
        <br />
        <br />A little about my past—back in the day, I almost went pro in
        soccer (we call it football back in Europe but let's not get into it
        this time). Let’s just say “that bad injury” (okay, life choices) took
        me down a different path.
        <br />
        <br />
        Now, I’m as serious about my career in tech as I once was about the
        field. Outside of work, I’m all about self-development and a
        well-organized schedule, though I can be resilient when things don’t go
        as planned. I’m also working on my own project, an app called Eden,
        built with React Native, which I’m excited to release in 2025. (More on
        that when the time is right!)
      </p>
    </>
  );
}

export default Intro;
