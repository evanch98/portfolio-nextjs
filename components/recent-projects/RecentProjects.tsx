"use client";

import { Element } from "react-scroll";
import CardStack from "../card-stack/CardStack";

const RecentProjects = () => {
  return (
    <Element
      name="recent-projects"
      id="recent-projects"
      className="w-full h-screen flex flex-col justify-center items-center bg-white"
      aria-label="Recent Projects Section"
    >
      <div className="outer-container">
        <h1 className="text-3xl lg:text-4xl text-[#8C6196] font-bold">
          Recent Projects
        </h1>
        <article className="mt-5 flex gap-5 w-full items-center justify-center">
          <section className="w-full flex items-center justify-center">
            <CardStack />
          </section>
          <section className="w-full flex items-center justify-center">
            <CardStack />
          </section>
        </article>
      </div>
    </Element>
  );
};

export default RecentProjects;
