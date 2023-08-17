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
    "Cloudinary",
  ],
  date: "May 8 2023",
  category: "Hobby Project",
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
  date: "May 31 2023",
  category: "Hobby Project",
  gitHubLink: "https://github.com/evanch98/spotify-clone-nextjs",
  demoLink: "https://spotify-clone-nextjs-xi.vercel.app/",
};

export const eCommerceAdmin: projectType = {
  id: "eCommerceAdmin",
  title: "E-Commerce Admin Dashboard",
  description: [
    "Built using cutting-edge technologies like Next JS, TypeScript, Tailwind CSS, Shadcn UI, Planet Scale, Prisma, Zustand, Clerk Auth, and Cloudinary",
    "The admin dashboard allows the website's administrators to create, update, and delete store information.",
    "Admins can efficiently manage the billboards or banners that appear on the website's homepage. They can upload, update, and remove promotional banners to attract customers and highlight ongoing offers or sales.",
    "With the admin dashboard, managing product categories, sizes, and colors becomes a breeze. Administrators can add, edit, or delete categories, sizes, and colors, enabling the website to efficiently organize and display products.",
    "To enable smooth communication between the front-end web application and the back-end, the dashboard incorporates API routes. This ensures that product information is seamlessly fetched and displayed on the customer-facing website.",
    "The admin dashboard utilizes Clerk auth for secure authentication, ensuring that only authorized personnel can access and manage sensitive information.",
    "With Planet Scale and Prisma integration, the application benefits from a robust and scalable database, capable of handling growing product inventories and increasing website traffic.",
    "The heart of any e-commerce website lies in its product management capabilities. The admin dashboard empowers administrators to add new products, update existing ones, archive out-of-stock products, mark products as featured products, and remove products that are no longer available. They can set product details such as name, category, price, images, and other product-specific attributes.",
    "Efficient order management is crucial for any e-commerce website. The dashboard provides comprehensive tools to view, process, and manage incoming orders.",
  ],
  framework: "Next JS",
  techStack: [
    "Next JS",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Planet Scale",
    "Prisma",
    "Zustand",
    "Clerk Auth",
    "Cloudinary",
  ],
  date: "July 26 2023",
  category: "Hobby Project",
  gitHubLink: "https://github.com/evanch98/ecommerce-admin-nextjs",
  demoLink: "",
};

const projects: projectType[] = [eCommerceAdmin, spotifyProject, airbnbProject];

export default projects;
