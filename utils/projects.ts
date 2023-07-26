import airbnb from "@/public/assets/projects/airbnb.svg";
import { projectType } from "@/types/types";

export const airbnbProject: projectType = {
  title: "Airbnb Clone",
  description: [
    "Developed a full-stack Airbnb Clone website using Next.js, TypeScript, Zustand, Tailwind CSS, MongoDB, Prisma, and NextAuth.",
    "Hosted the project on Vercel, ensuring seamless deployment and accessibility of the live website.",
    "Implemented responsive user interfaces and intuitive user experiences, following modern design principles and utilizing Tailwind CSS for styling.",
    "Utilized Next.js framework for server-side rendering and optimized performance.",
    "Managed application state using Zustand, providing efficient and scalable state management.",
    "Integrated MongoDB for data storage and Prisma as the ORM for seamless database management.",
    "Implemented authentication and authorization functionalities using NextAuth to enable secure user registration, login, and protected routes.",
  ],
  imageSrc: airbnb,
  imageAlt: "Airbnb website Image",
  framework: "Next JS",
  techStack: [
    "Next JS",
    "TypeScript",
    "Zustand",
    "Tailwind CSS",
    "MongoDB",
    "Prisma",
    "NextAuth",
  ],
  gitHubLink: "https://github.com/evanch98/airbnb_clone_react",
  demoLink: "https://rent-house-react-hopf81d0y-evanch98.vercel.app/",
  pageUrl: "airbnb",
};
