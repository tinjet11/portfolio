"use client";
import React, { Fragment, useEffect, useState } from "react";
import Project_card from "./Project_card";

import { useRouter } from "next/navigation";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Filter,
} from "lucide-react";
import { Listbox, Transition } from "@headlessui/react";
import { projects, type } from "./constant";
import { motion } from "framer-motion";

const Project = () => {
  const router = useRouter();
  const [params, setParams] = useState("type=All");
  const [isOpen, setIsOpen] = useState(false);

  const updateSearchParams = (title: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(title, value);

    setParams(searchParams.toString());

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    return newPathname;
  };

  const handleUpdateParams = (type: string) => {
    const newPathName = updateSearchParams("type", type);
    router.push(newPathName);
  };

  const buttonOptions = [
    { label: "All", value: "All" },
    { label: "Web Development", value: "Web" },
    { label: "Mobile App Development", value: "Mobile" },
    { label: "Other", value: "Other" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (params === "type=All" || params === "") return true;
    return project.type === params.split("type=")[1];
  });

  return (
    <>
      <motion.div
        className="mt-4 p-2"
        initial={{ opacity: 0 }} // Start at opacity 0
        animate={{ opacity: 1 }} // Animate to opacity 1
        transition={{ duration: 0.6 }} // Control the animation speed
      >
        <h1 className="text-left header-1 my-3">Project</h1>
        <div className="flex items-center gap-4 p-3 rounded-lg sm:border-2 border-[#183f2c]">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter
          </div>

          {buttonOptions.map((option) => (
            <button
              key={params + "-" + option.value}
              className={`${
                params === `type=${option.value}`
                  ? "text-[#43b1b1]"
                  : "text-[#a5afb9]"
              } sm:block hidden font-semibold hover:underline focus:outline-none`}
              onClick={() => handleUpdateParams(option.value)}
            >
              {option.label}
            </button>
          ))}

          <div className="w-fit sm:hidden block">
            <Listbox value={params}>
              <div className="relative w-fit z-10">
                <Listbox.Button
                  onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
                  className="relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border"
                >
                  <span className="block truncate">
                    {params.split("type=")}
                  </span>
                  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </Listbox.Button>
                {/* Transition for displaying the options */}
                <Transition
                  as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {type.map((item) => (
                      <Listbox.Option
                        key={item.id}
                        className="relative cursor-default select-none py-2 px-4 text-gray-900 hover:bg-[#43b1b1]"
                        onClick={() => handleUpdateParams(item.name)}
                        value={item.value}
                      >
                        <span className={`block truncate`}>{item.name}</span>
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>

        <motion.div
          className="flex flex-col items-center sm:items-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <motion.div
                key={`${params}-${index}`} // Use params as part of the key to trigger re-animation on filter change
                initial={{ opacity: 0.1, scale: 0.95 }} // Start slightly smaller and fully transparent
                whileInView={{ opacity: 1, scale: 1 }} // Fade in and scale up to normal size
                transition={{
                  duration: 1.2, // Longer duration for a smoother effect
                  ease: [0.42, 0, 0.58, 1], // Custom easing for smoother transition
                }}
                viewport={{ once: true, amount: 0.1 }} // Trigger animation once when 10% of the element is in view
              >
                <Project_card
                  title={item.title}
                  sourcecode={item.sourcecode}
                  livedemo={item.livedemo}
                  feature={item.feature}
                  tag={item.tag}
                  cover={item.cover}
                  video={item.video}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Project;
