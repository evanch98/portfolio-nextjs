"use client";

import { useUoPeopleModal } from "@/hooks/use-uopeople-modal";
import Modal from "@/components/ui/modal";
import { Separator } from "@/components/ui/separator";

const courses = [
  {
    name: "Programming Fundamentals",
    gpa: "4.0",
  },
  {
    name: "Online Education Strategies",
    gpa: "4.0",
  },
  {
    name: "College Algebra",
    gpa: "4.0",
  },
  {
    name: "Programming 1",
    gpa: "4.0",
  },
  {
    name: "Programming 2",
    gpa: "4.0",
  },
  {
    name: "English Composition 2",
    gpa: "4.0",
  },
  {
    name: "Web Programming 1",
    gpa: "4.0",
  },
  {
    name: "Discrete Mathematics",
    gpa: "4.0",
  },
  {
    name: "Computer Systems",
    gpa: "4.0",
  },
];

const UoPeopleModal = () => {
  const uoPeopleModal = useUoPeopleModal();
  return (
    <Modal
      title="University of the People"
      description="Bachelor of Science in Computer Science"
      isOpen={uoPeopleModal.isOpen}
      onClose={uoPeopleModal.onClose}
    >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-between w-full">
          <p>CGPA: 3.96</p>
          <p>Sep, 2021 - Mar, 2025 (Expected)</p>
        </div>
        <Separator className="bg-white/70 my-2" />
        <div className="flex flex-col w-full">
          <h2 className="font-bold">Courses</h2>
          {courses.map((course) => (
            <div
              key={course.name}
              className="flex items-center justify-between w-full mt-2 text-sm opacity-70"
            >
              <p>{course.name}</p>
              <p>{course.gpa}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default UoPeopleModal;
