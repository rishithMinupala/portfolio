import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconBrandPowershell,
  IconPresentation,
  IconBrandVite,
} from "@tabler/icons-react";

export default function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <IconBrandPowershell className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },

    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconBrandVite className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Experience",
      link: "#exp",
      icon: (
        <IconPresentation className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative  w-full mb-2">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
