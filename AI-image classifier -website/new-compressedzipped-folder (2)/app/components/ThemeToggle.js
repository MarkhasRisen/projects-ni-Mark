"use client"

import { useTheme } from "./ThemeProvider"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-text-light dark:text-text-dark"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
    </button>
  )
}

