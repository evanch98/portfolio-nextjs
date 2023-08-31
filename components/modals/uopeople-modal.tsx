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
];

const UoPeopleModal = () => {
  const uoPeopleModal = useUoPeopleModal();
  const [isOpen, setIsOpen] = useState(false);
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
      </div>
    </Modal>
  );
};

export default UoPeopleModal;
