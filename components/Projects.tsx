import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-semibold text-blue-600 dark:text-neutral-100 mt-4">
        Projects
      </h1>
      <BentoGrid className="w-full mx-auto pt-2 pb-2 ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            link={item.link}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const SkeletonOne = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <img
        src="https://i.imghippo.com/files/9nwsJ1722018943.jpg"
        alt="rishithminupala"
      />
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <img
        src="https://i.imghippo.com/files/9tqhh1722020010.webp"
        alt="rishithminupala"
        className="w-full h-full"
      />
    </div>
  );
};
const SkeletonTree = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <img
        src="https://i.imghippo.com/files/p6Mw31722020455.jpg"
        alt="rishithminupala"
        className="w-full h-full"
      />
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <img
        src="https://i.imghippo.com/files/tEAIC1722020678.png"
        alt="rishithminupala"
        className="w-full h-[120%]"
      />
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <img
        src="https://i.imghippo.com/files/7ViaY1722020504.png"
        alt="rishithminupala"
        className="w-full h-full"
      />
    </div>
  );
};
const items = [
  {
    title: "NxtTrendz",
    description: "E-commerce platform inspired by Amazon and Flipkart.",
    header: <SkeletonOne />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    link: "https://rishithnxttrend.ccbp.tech",
  },
  {
    title: "NxtWatch",
    description: "Inspired from Youtube.",
    header: <SkeletonTwo />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    link: "https://rishinxtwatch.ccbp.tech",
  },
  {
    title: "Typespeed",
    description: "Typing speed test inspired by 10fastfingers.",
    header: <SkeletonTree />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    link: "https://rishitypespeed.ccbp.tech",
  },
  {
    title: "AI chatbot",
    description:
      "It is a chatbot that can answer your queries and help you with your doubts.",
    header: <SkeletonFour />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    link: "https://rishiaichatbot.ccbp.tech",
  },
  {
    title: "Voice Clone bot",
    description: "My own voice cloned chat bot .",
    header: <SkeletonFive />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    link: "https://rishivoiceclone.ccbp.tech",
  },
];
