"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconInfoCircle, IconBrandGithub } from "@tabler/icons-react";
export function NavigationBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Base",
      link: "/base",
      icon:  <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Source",
      link: "http://github.com/devsujay19/knowledgebase",
      icon:  <IconBrandGithub className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};