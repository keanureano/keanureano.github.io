"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon, FaSpinner } from "react-icons/fa";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  let ThemeIcon = FaSpinner;
  let additionalClass = "";
  if (!mounted) additionalClass = "animate-spin";
  else ThemeIcon = theme === "dark" ? FaMoon : FaSun;
  const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeIcon
      onClick={handleToggleTheme}
      className={`cursor-pointer select-none size-6 ${additionalClass}`}
    />
  );
}
