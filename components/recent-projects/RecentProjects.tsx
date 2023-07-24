"use client";

import { Element } from "react-scroll";
import CardStack from "../card-stack/CardStack";

const RecentProjects = () => {
  return (
    <Element
      name="recent-projects"
      id="recent-projects"
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <CardStack />
    </Element>
  );
};

export default RecentProjects;
