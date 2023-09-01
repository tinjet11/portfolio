import './globals.css';
import Nav from '@/components/Nav';
import Project from '@/components/Project';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import Loading from '@/components/loading';
import { Suspense } from 'react';
import Contact from '@/components/contact-me';



export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Profile />
        <div className="mx-auto max-w-[1140px] mt-8">
          <Experience />
          <Skills />
          <Project />
          <Contact />
        <Footer />
        </div>
      </Suspense>


    </>
  )
}
