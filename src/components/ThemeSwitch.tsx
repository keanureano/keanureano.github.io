"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiLoader } from "react-icons/fi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  let ThemeIcon = FiLoader;
  let additionalClass = "";
  if (!mounted) additionalClass = "animate-spin";
  else ThemeIcon = theme === "dark" ? FiMoon : FiSun;
  const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeIcon
      onClick={handleToggleTheme}
      className={`cursor-pointer select-none size-7 hover:animate-pulse ${additionalClass}`}
    />
  );
}
