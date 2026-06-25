import {
  ClevertechLogo,
  ConsultlyLogo,
  JojoMobileLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mahendra Syathi",
  initials: "MS",
  location: "Jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      Backend-focused Full Stack Engineer specializing in high-performance services. 
      Experienced in Laravel, Golang, WordPress, event-driven, optimizing database, and remote team workflows.
    </>
  ),
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLL0VCxeOBKVdUSSKWXhNq-4SCw2nUpWnaHiyTeXGpqHDuYsfY=s576-c-no",
  personalWebsiteUrl: "https://mahendra.page",
  contact: {
    email: "ndra@tuta.io",
    tel: "+6285718199951",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mahendra2448",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://id.linkedin.com/in/mahendra-syathi",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Gunadarma University",
      degree: "Bachelor's Degree in Informatics Engineering",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Colmitra",
      link: "https://colmitra.com",
      badges: ["Hybrid", "Laravel", "Go", "Javascript", "Docker", "Redis", "Android"],
      title: "IT Programmer Supervisor",
      start: "2025",
      end: null,
      description: (
        <>
          Successfully improved the slow data upload process from 2,000 rows per hour to ~1,000 rows per second
          <ul className="list-inside list-disc">
            <li>
              Managed and led the team for developing products.
            </li>
            <li>
              Coordinating with the third-party client to implement data sharing process.
            </li>
            <li>
              Implement an agile environment for the development process using open-source SaaS.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "iFortepay",
      link: "https://ifortepay.id",
      badges: ["Hybrid", "Laravel", "Go", "WordPress", "Javascript", "Kafka", "Redis"],
      title: "Software Engineer",
      start: "2022",
      end: "2025",
      description: (
        <>
          Successfully revamped app services from Laravel to Golang and increased the request per second processed data by ~70%
          <ul className="list-inside list-disc">
            <li>
              Build official documentation that product teams can update without Git.
            </li>
            <li>
              Developed and maintained the iFortepay plugin for WooCommerce - WordPress
            </li>
            <li>
              Improving database read/write transactions with table partitioning in PostgreSQL
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Sun Logistics",
      link: "https://sunlogistics.co.id/",
      badges: ["On Site", "Laravel", "Javascript", "Bootstrap CSS", "Websocket"],
      title: "Senior Full Stack Developer",
      start: "2021",
      end: "2022",
      description: (
        <>
          Senior developer for an international logistics company.
          <ul className="list-inside list-disc">
            <li>
              Built and transitioned old paper workflows to a digital system for the warehouse's data
            </li>
            <li>
              Developed and improved an internal finance application with multiple roles
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Saku Ceria",
      link: "",
      badges: ["On Site", "Laravel", "Android", "Java"],
      title: "IT Supervisor",
      start: "2020",
      end: "2021",
      description: (
        <>
          Supervising and managing the IT team related to IT fields for the fintech company.
          <ul className="list-inside list-disc">
            <li>
              Coordinating with the bank or merchant to implement payment integration.
            </li>
            <li>
              Improving on the application features, collaborate with the product and business team.
            </li>
            <li>
              Built a dashboard to provide the latest transaction&apos;s data recap for the finance team.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Ngerti IT",
      link: "",
      badges: ["Remote", "Laravel", "Android", "Java"],
      title: "Founder/Creator",
      start: "2020",
      end: "2021",
      description: (
        <>
          Ideate &quot;Ngerti IT&ldquo; as an Android app to help people easily understand words related to IT fields.
          <ul className="list-inside list-disc">
            <li>
              Build the backend to serve content to the Android apps via REST API
            </li>
            <li>
              Led the team in managing the content&apos;s updates for the apps and posts on Instagram
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "design cub3",
      link: "https://designcub3.com/",
      badges: ["Hybrid", "Laravel", "Javascript", "WordPress"],
      title: "Full Stack Web Developer",
      start: "Jan 2020",
      end: "Dec 2020",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed a website based on client requests for an enterprise and a small company
            </li>
            <li>
              Gaining strong fundamentals in technical skills, managing multiple projects, and cross-team collaboration
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "Laravel",
    "Go",
    "Javascript",
    "WordPress",
    "VueJS",
    "MySQL",
    "PostgreSQL",
    "Apache Kafka",
    "Redis",
    "CI/CD",
    "Agile",
    "Linux",
    "Design Systems",
    "Database Optimizing",
    "Remote Team-work",
  ],
  projects: [
    {
      title: "shad-dashboard",
      techStack: ["Laravel", "VueJS", "Shadcn UI"],
      description:
        "An open-source simple admin dashboard based on Laravel 11 and Shadcn-vue UI",
      link: {
        label: "shad-dashboard",
        href: "https://github.com/mahendra2448/shad-dashboard",
      },
    },
    {
      title: "laravel8-shad-dashboard",
      techStack: ["Laravel8", "VueJS", "Shadcn UI"],
      description:
        "An open-source simple admin dashboard based on Laravel 8 and Shadcn-vue UI",
      link: {
        label: "laravel8-shad-dashboard",
        href: "https://github.com/mahendra2448/laravel8-shad-dashboard",
      },
    },
  ],
} as const;
