"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5 from "@/assets/icons/html5.svg";
import Css3 from "@/assets/icons/css3.svg";
import tailWind from "@/assets/icons/tailwind-css.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHub from "@/assets/icons/github.svg";
import mySql from "@/assets/icons/mysql-original-wordmark.svg";
import nextIcon from "@/assets/icons/next-js.svg";
import nodeIcon from "@/assets/icons/nodejs.svg";
import vueIcon from "@/assets/icons/vue.svg";
import vuetifyIcon from "@/assets/icons/vuetify.svg";
import phpIcon from "@/assets/icons/file-type-php.svg";
import mapImage from "@/assets/images/map1.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const toolboxItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "HTML5", iconType: Html5 },
  { title: "CSS3", iconType: Css3 },
  { title: "Tailwind", iconType: tailWind },
  { title: "React", iconType: ReactIcon },
  { title: "MySql", iconType: mySql },
  { title: "Next.js", iconType: nextIcon },
  { title: "NodeJs", iconType: nodeIcon },
  { title: "Vue3", iconType: vueIcon },
  { title: "Vuetify", iconType: vuetifyIcon },
  { title: "GitHub", iconType: GitHub },
  { title: "Php", iconType: phpIcon },
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: "5%", top: "5%" },
  { title: "Photography", emoji: "📷", left: "50%", top: "5%" },
  { title: "Gaming", emoji: "🎮", left: "50%", top: "35%" },
  { title: "WeightLifting", emoji: "🏋️", left: "34%", top: "80%" },
  { title: "Music", emoji: "📖", left: "70%", top: "45%" },
  { title: "Reading", emoji: "📖", left: "5%", top: "65%" },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about">
      <div className="pb-20 lg:py-28">
        <div className="container">
          <SectionHeader
            eyebrow="About me"
            title="A glimpse into my world"
            description="Learn about who I am, what I do, and what inspires me."
          />
          <div className="mt-20 flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
              <Link
                href="/books"
                className="h-[320px] md:col-span-2 lg:col-span-1"
              >
                <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                  <CardHeader
                    title="My Reads"
                    description="Explore the books shaping my perspectives."
                  />
                  <div className="w-40 mx-auto mt-2 md:mt-0">
                    <Image src={bookImage} alt="Book cover" />
                  </div>
                </Card>
              </Link>
              <Card className=" h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="My toolbox"
                  description="Explore the technologies and tools I use to create exceptional
                digital experiences."
                  className=""
                />
                <ToolboxItems
                  items={toolboxItems}
                  className=""
                  itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]"
                />
                <ToolboxItems
                  items={toolboxItems}
                  className="mt-6 "
                  itemsWrapperClassName="animate-move-right [animation-duration:30s] hover:[animation-play-state:paused]"
                />
              </Card>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond the code"
                  description="Explore my interests and hobbies beyond the digital realm."
                  className="px-6 pt-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
                <Image
                  src={mapImage}
                  alt="map image"
                  className="h-full w-full object-cover object-left-top"
                ></Image>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image
                    src={smileMemoji}
                    alt="smile memoji"
                    className="size-20"
                  ></Image>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
