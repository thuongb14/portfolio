import Wordle from "./assets/wordle-final.png";
import QuoteTherapy from "./assets/quote-therapy-final.png"
import PMA from "./assets/pma-final.png";
import Doughlicious from "./assets/doughlicious-final.png"

export const data = {
  skills: [
    {
      name: "HTML & CSS",
      percentage: "95",
    },
    {
      name: "JS, REACT, Python",
      percentage: "70",
    },
    {
      name: "NodeJS",
      percentage: "65",
    },
    {
      name: "PostgreSQL",
      percentage: "70",
    },
    {
      name: "Bootstrap, Tailwind, MUI",
      percentage: "72",
    },
  ],

  experiences: [
    {
      role: "Web Content Coordinator",
      company: "doTERRA Australia & New Zealand",
      time: "Dec 2022 - Present",
      type: "Full-Time",
      description: [
        "Support and maintain current production code. Creating, testing, and sustaining web pages by utilising CMS systems, HTML, CSS and Bootstrap framework.",
        "Optimise website content and UX for SEO and partner with Head of Digital to execute best practice SEO.",
      ],
    },
    {
      role: "Marketing Assistant",
      company: "Eastern & Allied Pty Ltd",
      time: "Dec 2021 - Dec 2022",
      type: "Full-Time",
      description: [
        "Own, manage and implement digital marketing including strategy, campaign development, market research, content development, website & social media management to reach more target customers.",

        "Utilize HTML/CSS and email marketing best practices to draft and implement email campaigns.",
      ],
    },

    {
      role: "Sales And Service Consultant",
      company: "Hai Ha Money Transfer",
      time: "Apr 2019 - Dec 2021",
      type: "Part-Time",
      description: [
        "Prepare and receive cash and FX from cash-in-transit providers, banking, affiliates, etc.",

        "Accountable for daily bill (transactions, cash movements, expenses, etc.)",
      ],
    },
  ],

  projects: [
    {
      link: "https://github.com/thuongb14/wordle_ga",
      img: `${Wordle}`,
      title: "Wordle",
      description:
        "This is the famous Wordle game project. Made with vanilla HTML, CSS and JS.",
    },
    {
      link: "https://github.com/thuongb14/quotes-therapy",
      img: `${QuoteTherapy}`,
      title: "Quote Therapy",
      description:
        "A full-stack application where users can find cheer-up quotes with built-in Spotify API to play different Lofi track for each quote. Built with JS, Python and PostgreSQL",
    },
    {
      link: "https://github.com/thuongb14/doughlicious-store",
      img: `${Doughlicious}`,
      title: "Doughlicious",
      description:
        "An e-commerce application selling donuts. Built with Spline3D and ReactJS",
    },
    {
      link: "https://github.com/thuongb14/project-management-app",
      img: `${PMA}`,
      title: "Project Management App",
      description:
        "A full-stack application to manage projects. Built with JS, ExpressJS, NodeJS and PostgreSQL ",
    },
  ],
};
