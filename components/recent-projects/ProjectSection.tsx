"use client";

import CardStack from "../card-stack/CardStack";

const ProjectSection = () => {
  return (
    <div className="mt-5 flex gap-5 w-full items-center justify-center">
      <section className="w-full flex items-center justify-center">
        <CardStack
          firstCardChildren={<div>Airbnb Clone</div>}
          secondCardChildren={<div>GitHub</div>}
        />
      </section>
      <section className="w-full flex items-center justify-center">
        Airbnb Clone
      </section>
    </div>
  );
};

export default ProjectSection;
