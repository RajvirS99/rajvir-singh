"use client";

import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = stored ? stored === "dark" : prefersDark;
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.classList.toggle("light", !next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <div className="flex flex-row-reverse">
      <button
        onClick={toggle}
        className="cursor-pointer"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

export default Header;
