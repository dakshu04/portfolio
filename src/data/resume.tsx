import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Daksh Purohit",
  initials: "DV",
  url: "https://github.com/dakshu04",
  location: "Gurugram, India",
  locationLink: "https://share.google/fAWRCbaa6WTyOprdf",
  description:
    "Software Engineer turned Builder. I love creating SaaS products and turning ideas into reality. Open to remote opportunities.",
  summary:
    "At the core, I’m someone who loves building products from scratch and turning ideas into reality. Over the past few years, I’ve worked on multiple SaaS projects like Image Magic, Rekall, and InvoiceFlow, where I handled everything from architecture and APIs to clean UI/UX. My journey started with a deep interest in both software engineering and product building, and since then, I’ve been focused on creating apps that are not just functional but also impactful. Right now, I’m channeling my energy into building apps that can generate real revenue—bridging the gap between learning, experimentation, and financial independence. Beyond my own projects, I’m also open to remote opportunities, where I can contribute, learn, and collaborate on meaningful products with ambitious teams.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Next.js",
    "React",
    "Typescript",
    "Node.js",
    "Postgres",
    "Prisma ORM",
    "Java",
    "Data Structures and Algorithm",
    "clerk",
    "supabase",
    "neon"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "purohitdaksh2003@gmail.com",
    tel: "+916375363914",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/dakshu04",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/purohitdaksh",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/DakshPuroh18319",
        icon: Icons.x,

        navbar: true,
      },
      
      email: {
        name: "Send Email",
        url: "dakshgrows@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Accenture",
      href: "https://www.accenture.com/in-en",
      badges: [],
      location: "Onsite",
      title: "Associate Software Engineer Intern",
      logoUrl: "/accentureLogo.png",
      start: "February 2025",
      end: "June 2025",
      description:
        "Learned about the end-to-end architecture of large-scale projects, including production and testing environments and computer networks. Gained exposure to system design, scalability, fault tolerance, and deployment practices in distributed systems.",
    },
    
  ],
  education: [
    {
      school: "Rajasthan Techical University",
      href: "",
      degree: "Bachelor of Technology",
      logoUrl: "/college_logo.jpg",
      start: "2021",
      end: "2025",
    },
    
    
  ],
  projects: [
    {
      title: "Image Magica",
      href: "https://imagemagic-alpha.vercel.app/",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "Image Magic is a SaaS application built with Next.js and TypeScript, leveraging the Cloudinary API to offer fast and simple image editing with features like an Image Resizer for social media platforms (Instagram, Twitter, LinkedIn, etc.) and a Background Remover for one-click background removal. It includes secure user authentication via Clerk, enabling smooth sign-ups and logins, and provides a clean UI with an effortless workflow for uploading, processing, and downloading images. As my second SaaS project, I independently managed both the frontend and backend, integrating APIs, handling authentication, and delivering a complete, production-ready product.",
      technologies: [
        "Next.js",
        "Typescript",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://imagemagic-alpha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dakshu04/image-formatter-saas-main/tree/41405d903df630fcbb997cf3f57c7b5a1deee7b2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Rekall",
      href: "https://prod-rekall-fslh.vercel.app/",
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "Rekall is a full-stack web application that enables users to save, organize, and retrieve content from X (Twitter) posts and YouTube videos by pasting their URLs, storing them in a personalized content library for easy recall. It features secure JWT-based authentication with bcrypt password hashing, protected routes, and personal libraries for each user. The app supports tagging, categorizing, and searching saved content, with a responsive React + TypeScript frontend styled using TailwindCSS, offering dark mode, optimistic UI updates, and efficient API communication via Axios. On the backend, a Node.js + Express RESTful API manages content with authentication, validation, and error-handling middleware, while MongoDB + Mongoose store user data and content with well-structured schemas.",
      technologies: [
        "React",
        "Typescript",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://prod-rekall-fslh.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dakshu04/prod-rekall",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Invoice Flow",
      href: "https://billmate-tau.vercel.app/",
      dates: "August 2025 - September 2025",
      active: true,
      description:
        "InvoiceFlow is a streamlined invoice management system built with Next.js and TypeScript, designed to help freelancers, entrepreneurs, and small businesses manage clients and invoices with ease—generating professional PDF invoices in under a minute. It uses a modern stack with Next.js + TypeScript on the frontend, styled via Tailwind CSS / CSS modules, and leverages Prisma for database interactions. PDF generation is handled using tools like react-pdf, jspdf, or server-side HTML-to-PDF rendering, while development utilities such as ESLint, PostCSS, and TypeScript configs ensure clean, maintainable, and production-ready code.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://billmate-tau.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dakshu04/billmate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    
  ],
  hackathons: [
    
  ]
} as const;
