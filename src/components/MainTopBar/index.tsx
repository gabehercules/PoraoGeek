"use client";

import { ReactNode } from "react";

export default function MainTopBar({ children }: { children: ReactNode }) {
  return (
    <div className="custom-scrollbar-categories flex border-b border-dark-border overflow-x-auto scroll-px-4">
      {children}
    </div>
  );
}
