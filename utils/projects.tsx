import { projectType } from "@/types/types";
import Link from "next/link";

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
  date: "May 8, 2023",
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
  date: "May 31, 2023",
  category: "Hobby Project",
  gitHubLink: "https://github.com/evanch98/spotify-clone-nextjs",
  demoLink: "https://spotify-clone-nextjs-xi.vercel.app/",
};

export const eCommerceAdmin: projectType = {
  id: "e_commerce_admin",
  title: "E-Commerce Admin Dashboard",
  description: [
    "Built using cutting-edge technologies like Next JS, TypeScript, Tailwind CSS, Shadcn UI, Planet Scale, Prisma, Zustand, Clerk Auth, and Cloudinary.",
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
    "Stripe",
  ],
  date: "July 26, 2023",
  category: "Hobby Project",
  gitHubLink: "https://github.com/evanch98/ecommerce-admin-nextjs",
  demoLink: "https://ecommerce-admin-nextjs-mu.vercel.app/",
};

export const eCommerceStore: projectType = {
  id: "e_commerce_store",
  title: "E-Commerce Store",
  description: [
    "Developed using state-of-the-art technologies including Next JS, TypeScript, Tailwind CSS, Zustand, and Headless UI.",
    "This E-Commerce Store is designed with responsiveness in mind, ensuring a flawless shopping experience across various devices and screen sizes. Whether on a desktop, tablet, or smartphone, customers can effortlessly browse and purchase products.",
    "Navigating through the extensive collection of products is a breeze. The interface boasts an intuitive design, enabling shoppers to seamlessly explore different categories and access product details with ease.",
    "The use of Tailwind CSS and Headless UI creates a visually stunning environment that highlights your products in the best light. High-quality images, carefully chosen typography, and clean layouts contribute to an immersive shopping journey.",
    "Customers can access comprehensive information about each product, including detailed multiple images, sizes, and colors.",
    "Zustand powers a smooth and interactive shopping cart experience. Adding and removing items and proceeding to checkout are seamless processes, enhancing the convenience of completing purchases.",
    "Experience secure and hassle-free transactions through the power of Stripe integration. Leveraging an API endpoint of the admin dashboard, our E-Commerce Store seamlessly processes payments, ensuring the confidentiality of personal and payment information.",
    "With Next JS at the core, the store employs dynamic loading techniques that optimize page loading speeds. This means customers can swiftly browse through product categories without enduring lengthy load times.",
  ],
  framework: "Next JS",
  techStack: [
    "Next JS",
    "TypeScript",
    "Tailwind CSS",
    "Zustand",
    "Headless UI",
    "Stripe",
  ],
  date: "August 9, 2023",
  category: "Hobby Project",
  gitHubLink: "https://github.com/evanch98/ecommerce-store-nextjs",
  demoLink: "https://ecommerce-store-nextjs-tau.vercel.app/",
  alert: (
    <p>
      The contents of this E-commerce Store are managed through the{" "}
      <Link className="font-bold" href={`/projects/${eCommerceAdmin.id}`}>
        E-Commerce Admin Dashboard
      </Link>
      .
    </p>
  ),
};

const projects: projectType[] = [
  eCommerceStore,
  eCommerceAdmin,
  spotifyProject,
  airbnbProject,
];

export default projects;
