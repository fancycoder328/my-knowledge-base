"use client";
import React from "react";
import { Button } from "./ui/moving-border";

export interface MovingBorderButtonProps {
  text: string;
};

export function MovingBorderButton({ text }: MovingBorderButtonProps) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {text}
      </Button>
    </div>
  );
}
