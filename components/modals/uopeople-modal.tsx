"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useUoPeopleModal } from "@/hooks/use-uopeople-modal";
import Modal from "@/components/ui/modal";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronsUpDown } from "lucide-react";

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
  {
    name: "Data Structures",
    gpa: "4.0",
  },
  {
    name: "Databases 1",
    gpa: "3.67",
  },
  {
    name: "World Literature",
    gpa: "4.0",
  },
  {
    name: "Communications and Networking",
    gpa: "4.0",
  },
  {
    name: "Calculus",
    gpa: "4.0",
  },
  {
    name: "Information Retrieval",
    gpa: "4.0",
  },
  {
    name: "Software Engineering 1",
    gpa: "3.67",
  },
  {
    name: "Mobile Applications",
    gpa: "4.0",
  },
];

const transferredCourses = [
  "Visual Communications",
  "Ancient Greek Philosophers",
  "Introduction to Information Technology",
  "Microeconomics",
  "Environmental Science",
  "Introduction to Ethics",
  "Introduction to Web Development",
];

const descriptions = [
  "Web Development: Comprehensive study of front-end and back-end web technologies, including HTML, CSS, JavaScript, and frameworks such as React.js and Vue.js. Developed skills in creating responsive and interactive web interfaces.",
  "Mobile Application Development: Focused on native mobile app development for iOS and Android platforms using programming languages such as Swift and Java. Explored platform-specific frameworks and tools, such as Xcode and Android Studio, to create engaging and user-friendly mobile applications.",
  "Data Structures and Algorithms: Gained a solid understanding of fundamental data structures (arrays, linked lists, trees, graphs) and algorithms, including sorting, searching, and optimization techniques",
  "Software Engineering: Learned software development methodologies and best practices, including requirements analysis, system design, testing, and project management. Developed skills in collaborative development using version control systems like Git.",
  "Database Management: Studied relational database management systems (MySQL) and learned concepts such as data modeling, querying, and normalization.",
  "Programming Languages: Explored various programming languages such as Python, Java, and their application in solving real-world problems. Gained proficiency in writing clean and efficient code.",
];

const UoPeopleModal = () => {
  const uoPeopleModal = useUoPeopleModal();
  const [isOpen, setIsOpen] = useState(false); // for the courses
  const [isOpenT, setIsOpenT] = useState(false); // for the transferred courses
  const [isOpenD, setIsOpenD] = useState(false); // for the descriptions
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
        <Separator className="bg-neutral-400/70 my-2" />
        <div className="w-full">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex items-center justify-between w-full">
              <h2 className="font-bold">Courses</h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              {courses.map((course) => (
                <div
                  key={course.name}
                  className="flex items-center justify-between w-full mt-2 text-sm opacity-70"
                >
                  <p>{course.name}</p>
                  <p>{course.gpa}</p>
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
        <Separator className="bg-neutral-400/70 my-2" />
        <div className="w-full">
          <Collapsible open={isOpenT} onOpenChange={setIsOpenT}>
            <div className="flex items-center justify-between w-full">
              <h2 className="font-bold">Transferred Courses</h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              {transferredCourses.map((course) => (
                <p className="mt-2 text-sm opacity-70">{course}</p>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
        <Separator className="bg-neutral-400/70 my-2" />
        <div className="w-full">
          <Collapsible open={isOpenD} onOpenChange={setIsOpenD}>
            <div className="flex items-center justify-between w-full">
              <h2 className="font-bold">Descriptions</h2>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              {descriptions.map((description) => {
                const desc = description.split(":");
                return (
                  <p className="mt-2 text-sm opacity-70">
                    <span className="font-semibold">
                      {desc[0]}:
                    </span>{" "}
                    {desc[1]}
                  </p>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </Modal>
  );
};

export default UoPeopleModal;
