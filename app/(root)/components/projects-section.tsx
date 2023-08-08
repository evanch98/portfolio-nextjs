import Card from "@/components/common/card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Spotify Clone",
      description:
        "Spotify clone built with Next JS, TypeScript, Tailwind CSS, Supabase, Stripe, and Zustand.",
      code: "/",
      live: "/",
      info: "/",
    },
    {
      title: "Airbnb Clone",
      description:
        "An Airbnb clone website built with Next JS, TypeScript, Tailwind CSS, Prisma, MongoDB, and Zustand.",
      code: "/",
      live: "/",
      info: "/",
    },
    {
      title: "Airbnb Clone",
      description:
        "An Airbnb clone website built with Next JS, TypeScript, Tailwind CSS, Prisma, MongoDB, and Zustand.",
      code: "/",
      live: "/",
      info: "/",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.slice(0, 3).map((project) => (
        <Card
          key={project.title}
          title={project.title}
          description={project.description}
          code={project.code}
          live={project.live}
          info={project.info}
        />
      ))}
    </div>
  );
};

export default ProjectsSection;
