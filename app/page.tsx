"use client";

import { useRive } from "@rive-app/react-canvas-lite";
import NavBar from "./components/NavBar";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

enum Filter {
  All = "All",
  Game = "Game",
  App = "App",
}

const galleryItemsData: GalleryItemProps[] = [
  {
    href: "/inertia",
    img: "/static/projects/inertia/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Inertia",
    hoverDescription: "Made with C# and Unity",
    tags: ["Game Jam", "Team of 2"],
  },
  {
    href: "/abyss",
    img: "/static/projects/abyss/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Abyss",
    hoverDescription: "Made with C++, GLSL, OpenFrameworks (OpenGL)",
    tags: ["Academic", "Team of 2"],
  },
  {
    href: "/ghoul",
    img: "/static/projects/ghoul/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Detective Ghoul",
    hoverDescription:
      "Architected and implemented inventory, checkpoint, UI, and object-interaction systems",
    tags: ["Game Jam", "Team of 5"],
  },
  {
    href: "/ethereal",
    img: "/static/projects/ethereal/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Ethereal Escape",
    hoverDescription:
      "Worked within VR constraints and developed gameplay mechanics",
    tags: ["Hackathon", "Team of 3"],
  },
  {
    href: "/seapirates",
    img: "/static/projects/seapirates/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "SeaPirates",
    hoverDescription: "Made with C++ and OpenFrameworks",
    tags: ["Academic"],
  },
  {
    href: "/wingsuit",
    img: "/static/projects/wingsuit/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Wingsuit World",
    hoverDescription: "Made with Lua and ROBLOX Studio",
    tags: ["Personal"],
  },
  {
    href: "/attendease",
    img: "/static/projects/attendease/Thumbnail.png",
    type: Filter.App,
    hoverTitle: "Attendease",
    hoverDescription:
      "Made the front-end and live updates feature with React, FastAPI, and PostgresSQL",
    tags: ["Academic", "Team of 4"],
  },
];

const text = "Hi, I'm Albany! I like building games and software.";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.025, duration: 0.2, ease: "easeOut" },
  }),
};

function AnimatedHeading() {
  return (
    <h1
      style={{ textShadow: "2px 2px 4px rgba(53, 53, 53, 0.5)" }}
      className="mx-12 font-bold text-center items-center leading-none tracking-tight text-2xl md:text-4xl lg:text-5xl text-white sticky"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
}

export default function Home() {
  return (
    <div
      className="font-[family-name:var(--font-geist-sans)] max-w-8xl m-auto scroll-smooth h-screen text-white relative"
      style={{
        backgroundImage: "url('/static/images/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <NavBar />
      {/* Hero Section */}
      <div
        className="fixed top-16 left-0 w-full flex flex-col justify-center items-center z-0 py-20"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="max-w-7xl">
          <FireEyes />
          <AnimatedHeading />
        </div>
      </div>
      {/* After Hero Section */}
      <div className="mt-[calc(100vh-4rem)] mb-36 z-20  relative">
        {/* Background that scrolls over hero component */}
        <div className="absolute top-[40rem] inset-0 bg-[rgb(13,12,13)] z-0" />
        <div className="relative h-[40rem] bg-gradient-to-t from-[rgb(13,12,13)] to-transparent"></div>

        {/* Work */}
        <div className="flex mt-[12rem] max-w-6xl justify-center flex-col items-center gap-5 mx-auto relative z-20 ">
          <DemoReel />
          <br></br>
          <br></br>
          <Gallery />
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  // State to track selected filter type
  const [selectedFilter, setSelectedFilter] = useState<Filter>(Filter.All);

  // Handler for changing the filter selection
  const handleFilterChange = (filter: Filter) => {
    setSelectedFilter(filter);
  };

  // Logic to filter gallery items based on selected filter
  const filteredItems = galleryItemsData.filter((item) => {
    if (selectedFilter === Filter.All) {
      return true; // Show all items
    }
    return item.type === selectedFilter; // Filter by Game or App
  });

  return (
    <motion.div>
      <div className={`transition-all duration-500 overflow-hidden w-full`}>
        {/* Selection bar for filtering */}
        <motion.div
          className="flex flex-row justify-between w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }} // Controls when it animates
        >
          <h1 className="text-2xl font-normal text-neutral-400">Portfolio</h1>
          <div className="flex gap-5">
            <span
              onClick={() => handleFilterChange(Filter.All)}
              className={`cursor-pointer text-lg text-neutral-400 ${
                selectedFilter === Filter.All ? "font-bold" : "font-normal"
              }`}
            >
              All
            </span>
            <span
              onClick={() => handleFilterChange(Filter.Game)}
              className={`cursor-pointer text-lg text-neutral-400 ${
                selectedFilter === Filter.Game ? "font-bold" : "font-normal"
              }`}
            >
              Games
            </span>
            <span
              onClick={() => handleFilterChange(Filter.App)}
              className={`cursor-pointer text-lg text-neutral-400 ${
                selectedFilter === Filter.App ? "font-bold" : "font-normal"
              }`}
            >
              Apps
            </span>
          </div>
        </motion.div>
      </div>
      <motion.div
        id="work-section"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }} // Controls when it animates
      >
        {filteredItems.map((item, index) => (
          <GalleryItem
            key={index}
            href={item.href}
            img={item.img}
            type={item.type}
            hoverTitle={item.hoverTitle}
            hoverDescription={item.hoverDescription}
            tags={item.tags}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

interface GalleryItemProps {
  href: string; // Link to the resource
  img: string; // Image source URL
  type: Filter; // Type of the item (Game or App)
  hoverTitle: string; // Title to show on hover
  hoverDescription: string; // Optional description to show on hover
  tags: string[];
}

export interface TFilterState {
  [0]: Filter;
  [1]: boolean;
}

function GalleryItem(props: GalleryItemProps) {
  return (
    <div>
      <Link href={props.href} className="relative text-white">
        <div className="relative">
          <Image
            src={props.img} // Use the img prop
            alt={props.hoverTitle}
            width={0}
            height={0}
            sizes="100vw"
            className="aspect-video object-cover relative w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[20px] bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="opacity-0 absolute top-0 left-0 bg-[#606060db] hover:opacity-100 min-w-full min-h-full flex justify-center items-center flex-col text-center transition-opacity duration-300 ease-in-out">
          <span className="font-bold text-2xl">{props.hoverTitle}</span>
          {props.hoverDescription && <span>{props.hoverDescription}</span>}{" "}
          {/* Optional description */}
        </div>
        <div
          className={`bg-black z-1 rounded-sm w-full h-16 flex flex-row gap-3 items-center px-3 justify-center`}
        >
          {props.tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="border-[#222222]  border-2 px-4 font-bold mx-3 py-2 text-sm rounded-md text-gray-400"
              >
                {tag}
              </span>
            );
          })}
        </div>
      </Link>
    </div>
  );
}

function FireEyes() {
  const { RiveComponent } = useRive({
    src: "/static/vectors/Eyes2.riv",
    stateMachines: ["LoopAndEnter"],
    autoplay: true,
  });

  return <RiveComponent className="h-[165px] flex " />;
}

const DemoReel = () => {
  return (
    <motion.div
      className=" mb-3 w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.4 }} // Controls when it animates
    >
      <h1 className="text-2xl font-normal text-neutral-400 mb-3 w-full">
        Demo Reel
      </h1>

      <iframe
        className="w-full h-[600px]"
        src="https://www.youtube.com/embed/2SvdoHie9yc?showinfo=1&controls=1&autohid=1&rel=0&start=30&color=white"
        frameBorder="0"
        allowFullScreen
      />
    </motion.div>
  );
};
