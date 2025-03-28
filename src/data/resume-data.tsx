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
  avatarUrl: "https://avatars.githubusercontent.com/u/48004399?v=4",
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
      degree: "Bachelor's Degree in Informatic Engineering",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "iFortepay",
      link: "https://ifortepay.id",
      badges: ["Hybrid", "Laravel", "Go", "WordPress", "Javascript", "Kafka", "Redis"],
      title: "Software Engineer",
      logo: ConsultlyLogo,
      start: "2022",
      end: null,
      description: (
        <>
          Successfully revamped event-driven based services from Laravel to Go and increase request per second processed data ~70%
          <ul className="list-inside list-disc">
            <li>
              Build the official documentation that can be updated by product teams without Git.
            </li>
            <li>
              Developed and maintaining iFortepay plugin for WooCommerce - WordPress
            </li>
            <li>
              Improving database read/write transaction with table partitioning in PostgreSQL
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
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description: (
        <>
          Senior developer for an international logistic company.
          <ul className="list-inside list-disc">
            <li>
              Built and transitioned old-papers workflows to digital system for warehouse&apos;s data
            </li>
            <li>
              Developed and improving internal finance application with multiple role
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
      logo: ClevertechLogo,
      start: "2020",
      end: "2021",
      description: (
        <>
          Supervising and manage IT team related to IT fields for the fin-tech company.
          <ul className="list-inside list-disc">
            <li>
              Coordinating with bank or merchant to implement payment integration.
            </li>
            <li>
              Improving on the application features collaborate with the product and business team.
            </li>
            <li>
              Built dashboard to provide latest transaction&apos;s data recap for finance team.
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
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description: (
        <>
          Ideate &quot;Ngerti IT&ldquo; as an Android app to help people easy to understand words related to IT fields.
          <ul className="list-inside list-disc">
            <li>
              Build the backend to serve contents into the Android apps via REST API
            </li>
            <li>
              Led the team to managing the content&apos;s update for the apps and posts on Instagram
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
      logo: NSNLogo,
      start: "Jan 2020",
      end: "Dec 2020",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>
              Developed website based on client requests for enterprise and small company
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
    "Bootstrap CSS",
    "VueJS",
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
  ],
} as const;
