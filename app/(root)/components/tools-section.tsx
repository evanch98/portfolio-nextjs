import Card from "@/components/common/card";

const ToolsSection = () => {
  const tools = [
    {
      title: "Next JS",
      description:
        "I have built several web applications, such as Airbnb Clone, using Next JS framework.",
      info: "https://nextjs.org/",
    },
    {
      title: "React",
      description: "I use React library for building website user interface.",
      info: "https://react.dev/",
    },
    {
      title: "Tailwind CSS",
      description:
        "I style almost all of my React components using Tailwind CSS.",
      info: "https://tailwindcss.com/",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {tools.map((tool) => (
        <Card
          key={tool.title}
          title={tool.title}
          description={tool.description}
          info={tool.info}
        />
      ))}
    </div>
  );
};

export default ToolsSection;