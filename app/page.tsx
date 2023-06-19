"use client"
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import './globals.css';
import Nav from '@/components/Nav';
import Project from '@/components/Project';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import { Icons } from "@/components/icons";


export default function Home() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const currentTheme = theme || "light"; // Use "light" as the default value if theme is undefined

  useEffect(() => {
    if (theme !== undefined) {
      setLoading(false);
    }
  }, [theme]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <Icons.loader />
    </div>
  }

  return (
    <>
      <div className='container'>
        <Nav />
        <Profile />
        <Experience />
        <Skills />
        <Project theme={currentTheme} />

        <Footer />
      </div>
    </>
  )
}
