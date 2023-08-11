import { projectType } from "@/types/types";

export const airbnbProject: projectType = {
  id: "airbnb_clone",
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
};

export const spotifyProject: projectType = {
  id: "spotify_clone",
  title: "Spotify Clone",
  description: [
    "Developed a full-stack Spotify Clone website using Next.js, TypeScript, Zustand, Tailwind CSS, Supabase, and Stripe.",
    "Hosted a project on Vercel for seamless deployment and accessibility of the live website.",
    "Implemented the responsive user interfaces, mimicking the Spotify design and user experience, and utilized Tailwind CSS for styling.",
    "Utilized Next.js framework for server-side rendering and optimized performance.",
    "Managed application state using Zustand, providing efficient and scalable state management.",
    "Integrated Supabase for database management, allowing seamless storage and retrieval of user and music data.",
    "Implemented Stripe for secure payment processing, enabling premium subscription features.",
  ],
  framework: "Next JS",
  techStack: [
    "Next JS",
    "TypeScript",
    "Zustand",
    "Tailwind CSS",
    "Supabase",
    "Stripe",
  ],
  gitHubLink: "https://github.com/evanch98/spotify-clone-nextjs",
  demoLink: "https://spotify-clone-nextjs-xi.vercel.app/",
};

const projects: projectType[] = [spotifyProject, airbnbProject];

export default projects;
