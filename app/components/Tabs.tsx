"use client";

import React, { useState } from "react";
import Projects from "./Projects";
import Blogs from "./Blogs";
import OpenSourceContributions from "./OpenSourceContributions";
import Experience from "./Experience";

const tabs = ["Experience", "Projects", "Blogs", "Open Source Contributions"];

const tabContent: Record<string, React.ReactNode> = {
  Experience: <Experience />,
  Projects: <Projects />,
  Blogs: <Blogs />,
  "Open Source Contributions": <OpenSourceContributions />,
};

export default function TabsContainer() {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6 border-b pb-4 border-gray-200 dark:border-gray-600 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => (
          <p
            key={tab}
            onClick={() => setSelected(tab)}
            className={`text-md cursor-pointer pb-1 -mb-4.25 border-b-2 transition-colors shrink-0 ${
              selected === tab
                ? "border-gray-900 text-gray-900 dark:border-white dark:text-white"
                : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            {tab}
          </p>
        ))}
      </div>
      {tabContent[selected]}
    </div>
  );
}
