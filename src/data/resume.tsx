import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Novin Ardian Yulianto",
  initials: "NAY",
  url: "https://novin.fun",
  location: "South Jakarta, Jakarta",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Full-stack thinker, systems builder, and agile team driver. I turn ideas into scalable products with code, process, and people.",
  summary:
    "Ambitious professional blending strategic leadership and technical depth across Solution Architecture, Systems Analysis, Project Management, and Product Management. Proven ability to guide cross-functional teams—FE, BE, QA, UI/UX, Data Engineering, and Technical Writing—through agile ceremonies, roadmap planning, backlog prioritization, and milestone tracking to deliver scalable, high-quality solutions on schedule. Skilled in business process analysis, PRD/SRS/ERD/UML development, full-stack coding (Node.js, React.js, SQL/ETL), and QA automation (Cypress, K6), driving projects from concept to production.",
  avatarUrl: "/me.png",
  skills: [
    "Product Documentation",
    "UML & Diagramming",
    "QA Automation (Cypress, K6)",
    "Project & Team Management",
    "Business Process Analysis",
    "SQL & ETL",
    "Node.js",
    "React.js",
    "Next.js",
    "Docker"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/novin-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/novin-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://dub.sh/novin-instagram",
        icon: Icons.instagram,
        navbar: true
      },
      email: {
        name: "Send Email",
        url: "mailto:work.novinnn@gmail.com?subject=Hello Novin&body=I saw your portfolio and...",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "PT. Finnet Indonesia",
      href: "https://www.finpay.id/",
      location: "Jakarta",
      title: "Solution Architect",
      logoUrl: "/finnet.png",
      start: "Apr 2025",
      end: "Present",
      description:
          "Led FE, BE, QA, UI/UX, Data Engineering & Tech Writing in daily standups to ensure on-time, high-quality delivery. Managed roadmaps, backlogs & milestones to sync project goals with stakeholder priorities. Analyzed business processes and created PRDs & UML diagrams for scalable solution design.",
    },
    {
      company: "PT. Solomon Indo Global",
      href: "https://solomonindoglobal.com/",
      location: "Surabaya",
      title: "System Analyst & Quality Assurance",
      start: "Apr 2024",
      logoUrl: "/solid.png",
      end: "Apr 2025",
      description:
          "Developed PRD, SRS, ERD diagrams, and managed project timelines through client meetings. Conducted manual and automated testing using Cypress to ensure software quality. Led performance testing with K6, optimizing system reliability. Coordinated with cross-functional teams for seamless integration and project success.",
    },
    {
      company: "PT. Solomon Indo Global",
      location: "Surabaya",
      title: "Web Developer Intern",
      href: "https://solomonindoglobal.com/",
      start: "Jan 2024",
      logoUrl: "/solid.png",
      end: "Apr 2024",
      description:
          "Built and maintained web applications using Node.js and React.js. Integrated front-end elements with backend logic alongside designers and developers. Fixed bugs and optimized performance for better user experience.",
    },
    {
      company: "PT. Rakamin Kolektif Madani",
      location: "Jakarta",
      title: "Class Coordinator - My Digital Academy",
      href: "https://www.rakamin.com/",
      start: "Nov 2023",
      end: "Jan 2024",
      logoUrl: "/rakamin.png",
      description:
          "Managed and coordinated Zoom sessions for product development training with Bank Mandiri. Recorded attendance, facilitated Q&A sessions, and ensured active participation. Sent timely reminders and updates to participants. Achieved a participant satisfaction score of 93.88%.",
    },
    {
      company: "PT. Rakamin Kolektif Madani",
      location: "Jakarta",
      title: "Class Coordinator - SQA PROA x Kominfo",
      href: "https://www.rakamin.com/",
      start: "Sep 2023",
      end: "Nov 2023",
      logoUrl: "/rakamin.png",
      description:
          "Opened and closed Zoom sessions for SQA classes, ensuring smooth operation. Took attendance and effectively handled Q&A sessions. Sent reminders about upcoming classes and assignments. Achieved a participant satisfaction score of 90.15%.",
    },
    {
      company: "ID/X Partner",
      location: "Jakarta",
      title: "Data Engineer Intern (Project Based)",
      start: "Aug 2023",
      end: "Sep 2023",
      logoUrl: "/idx.png",
      href: "https://idxpartners.com/",
      description:
          "Assisted in writing and optimizing complex SQL queries to enhance database performance. Helped extract data from multiple databases for reporting and analysis. Supported routine maintenance tasks including indexing and partitioning.",
    },
    {
      company: "PT Sanghiang Perkasa",
      location: "Jakarta",
      title: "Data Engineer Intern (Project Based)",
      start: "Jul 2023",
      end: "Aug 2023",
      href: "https://kalbenutritionals.com/en",
      logoUrl: "/kalbe.png",
      description:
          "Assisted in creating and maintaining data pipelines to ensure accurate data flow. Helped integrate data from various sources into the data warehouse using ETL methods.",
    }
  ],
  education: [
    {
      school: "UIN Sunan Ampel Surabaya",
      href: "https://uinsa.ac.id/",
      degree: "Bachelor's Degree of Information System",
      logoUrl: "/uinsa.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
} as const;
