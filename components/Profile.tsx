"use client"

import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row m-2 p-2 justify-center">

      {/* Animated Profile Image */}
      <motion.div
        className="flex justify-center max-sm:mb-8 md:basis-1/3 max-h-[350px] self-center"
        initial={{ opacity: 0, x: -100 }} // Starts off-screen to the left
        animate={{ opacity: 1, x: 0 }} // Moves into view
        transition={{ duration: 1.5 }} // Animation duration
      >
        <Image
          src="/profile.png"
          height={300}
          width={300}
          alt="my photo"
          className="object-fill self-center"
          loading="eager"
        />
      </motion.div>

      <motion.div
        className="flex flex-col md:basis-2/3 p-4 justify-center"
        initial={{ opacity: 0, y: 50 }} // Starts off below the screen
        animate={{ opacity: 1, y: 0 }} // Moves into view
        transition={{ duration: 1.5, delay: 0.5 }} // Animation duration and delay
      >
        <h1 className="mt-4 text-2xl font-bold">A Little Bit About Me</h1>
        <p className="mt-4 text-lg">
          Hello👋 My name is Leong Tin Jet. I am a highly motivated backend
          developer with extensive experience gained through freelance projects,
          academic assignments, personal learning, and a technical internship. A
          two-times Dean's List Award recipient, proficient in modern frameworks
          such as Next.js, Flutter, Laravel, and React, as well as backend
          technologies like PHP, Java, and Python. Skilled in utilising AWS
          technologies for cloud infrastructure and experienced with AI models
          like YOLO and SAM for image processing tasks. Hands-on experience at a
          Fintech company and successful delivery of multiple freelance projects
          using Flutter and Next.js. Fluent in English, Chinese, and Malay.
          Experienced in Agile environments. A problem solver with a keen
          interest in backend systems and a passion for building scalable and
          efficient applications. Contact me to get my resume.
        </p>
        <motion.div
          className="flex flex-row justify-end mt-8 p-2 gap-2"
          initial={{ opacity: 0 }} // Starts invisible
          animate={{ opacity: 1 }} // Fades in
          transition={{ delay: 1.2, duration: 0.8 }} // Delayed until after the image and text animations
        >
          <div className="flex flex-row items-center gap-1">
            <Mail className="h-6 w-6" />
            <Link
              target="_blank"
              href="mailto:tinjet1016@gmail.com"
              className="underline"
            >
              Email
            </Link>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Icons.gitHub className="h-6 w-6" />
            <Link
              target="_blank"
              href="https://github.com/tinjet11"
              className="hover:underline"
            >
              Github
            </Link>
          </div>
          <div className="flex flex-row items-center gap-1">
            <Icons.linkedin className="h-6 w-6" />
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/tinjet"
              className=" hover:underline"
            >
              LinkedIn
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Profile;
