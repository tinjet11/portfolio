"use client";

import Nav from '@/components/Nav'
import Project from '@/components/Project'
import './globals.css'
import Profile from '@/components/Profile'
import { useTheme } from "next-themes";

export default function Home() {

  const { theme, setTheme } = useTheme();
  const currentTheme = theme || "light"; // Use "light" as the default value if theme is undefined
  return (
    <>
        <Nav/>
        <Profile theme = {currentTheme} />
        <Project theme = {currentTheme} />
    </>
  )
}
