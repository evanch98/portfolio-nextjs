const ExpSection = () => {
  const educations = [
    {
      profession: "Waiter",
      date: "Jul, 2022 - Aug, 2023",
      company: "The Three Lions Inn, Taipei",
      gpa: "3.97",
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 gap-5">
      {educations.map((education) => (
        <div
          key={education.profession}
          className="w-full bg-[#282B30] p-5 rounded-2xl flex flex-col gap-y-2 shadow-lg"
        >
          <div className="flex flex-col gap-y-2 md:flex-row md:justify-between">
            <h1 className="font-bold text-sm md:text-lg">
              {education.profession}
            </h1>
            <p className="text-sm md:text-base opacity-70">{education.date}</p>
          </div>
          <p className="italic opacity-70 text-sm md:text-base">
            {education.company}
          </p>
          <p className="opacity-70 text-sm md:text-base">
            CGPA: {education.gpa}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExpSection;
