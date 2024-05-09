"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconInfoCircle, IconBrandGithub, IconClockCode } from "@tabler/icons-react";
export function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      target: "_self",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Base",
      link: "/base",
      target: "_self",
      icon:  <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Source",
      link: "http://github.com/devsujay19/knowledgebase",
      target: "_blank",
      icon:  <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Changelog",
      link: "/changelog",
      target: "_self",
      icon:  <IconClockCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};