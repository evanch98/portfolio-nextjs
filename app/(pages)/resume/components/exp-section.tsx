const ExpSection = () => {
  const experiences = [
    {
      profession: "Waiter",
      date: "Jul, 2022 - Aug, 2023",
      company: "The Three Lions Inn, Taipei",
      summary: [
        "Provided exceptional customer service, ensuring a positive dining experience for guests.",
        "Managed a high volume of tables, efficiently taking orders, delivering food, and addressing customer inquiries.",
        "Collaborated effectively with colleagues and kitchen staff to ensure smooth operations and timely delivery of orders.",
        "Demonstrated strong multitasking skills, balancing multiple tasks and prioritizing responsibilities in a fast-paced environment.",
        "Developed excellent communication and interpersonal skills by effectively interacting with diverse customers and addressing their needs.",
      ],
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 gap-5">
      {experiences.map((experience) => (
        <div
          key={experience.profession}
          className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
        >
          <div className="flex flex-col gap-y-2 md:flex-row md:justify-between">
            <h1 className="font-bold text-sm md:text-lg">
              {experience.profession}
            </h1>
            <p className="text-sm md:text-base opacity-70">{experience.date}</p>
          </div>
          <p className="italic opacity-70 text-sm md:text-base">
            {experience.company}
          </p>
          <ul className="list-inside list-disc">
            {experience.summary.map((point) => (
              <li key={point} className="opacity-70 text-sm md:text-base">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExpSection;
