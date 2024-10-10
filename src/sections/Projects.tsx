import ecomTools from "@/assets/images/ECOM TOOLS.png";
import fabRehab from "@/assets/images/Untitled (95).png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import bookManager from "@/assets/images/bookManager.png";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import landingProductPageTemplate from "@/assets/images/productLandingPageTemplate.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2023",
    title: "Ecom calculator with tool",
    results: [
      { title: "Comprehensive Profit Margin & Cost Calculator." },
      { title: "Product history with added functionality." },
      {
        title: "Created multiple ecom-related tools",
      },
    ],
    link: "https://ecom-tools.netlify.app",
    image: ecomTools,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "FabRehab Personal Website",
    results: [
      { title: "Fully responsive design." },
      { title: "Met product requirements." },
      { title: "Increased brand awareness" },
    ],
    link: "https://fab-rehab.netlify.app/",
    image: fabRehab,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Reading List Manager",
    results: [
      { title: "Secured by authentication" },
      { title: "Implemented CRUD functionality" },
      { title: "Friendly Design" },
    ],
    link: "https://sebireadinglist.netlify.app/",
    image: bookManager,
  },
  {
    company: "Personal Project",
    year: "2024",
    title: "Product landing page template",
    results: [
      { title: "Created a fully responsive web design" },
      { title: `Followed the briefs's design requirements` },
      { title: "Implemented front-end functionality" },
    ],
    link: "https://demo-product-page.netlify.app/",
    image: landingProductPageTemplate,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world results"
          title="Featured projects"
          description=" See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(${projectIndex * 40}px + 64px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>View live site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  ></Image>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
