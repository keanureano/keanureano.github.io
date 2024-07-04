"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  WiHurricane,
  WiMoonAltWaxingGibbous3,
  WiDaySunny,
} from "react-icons/wi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  let ThemeIcon = WiHurricane;
  let additionalClass = "";
  if (!mounted) additionalClass = "animate-spin";
  else ThemeIcon = theme === "dark" ? WiMoonAltWaxingGibbous3 : WiDaySunny;
  const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeIcon
      onClick={handleToggleTheme}
      className={`cursor-pointer select-none size-6 hover:animate-spin ${additionalClass}`}
    />
  );
}
