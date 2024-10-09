"use client";

import { useRive } from "@rive-app/react-canvas-lite";
import NavBar from "./components/NavBar";
import Link from "next/link";
import { useState } from "react";

export enum Filter {
  Game,
  App,
}

const galleryItemsData: GalleryItemProps[] = [
  {
    href: "/inertia",
    img: "/static/projects/inertia/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Inertia",
    hoverDescription: "Made with C# and Unity",
  },
  {
    href: "/abyss",
    img: "/static/projects/abyss/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Abyss",
    hoverDescription: "Made with C++, GLSL, OpenFrameworks (OpenGL)",
  },
  {
    href: "/seapirates",
    img: "/static/projects/seapirates/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "SeaPirates",
    hoverDescription: "Made with C++ and OpenFrameworks",
  },
  {
    href: "/wingsuit",
    img: "/static/projects/wingsuit/Thumbnail.png",
    type: Filter.Game,
    hoverTitle: "Wingsuit World",
    hoverDescription: "Made with Lua and ROBLOX Studio",
  },
  {
    href: "/attendease",
    img: "/static/projects/attendease/Thumbnail.png",
    type: Filter.App,
    hoverTitle: "Attendease",
    hoverDescription:
      "Made the front-end and live updates feature with React, FastAPI, and PostgresSQL",
  },
];

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-8xl m-auto scroll-smooth bg-[url('/static/images/Background.png')] bg-cover bg-center h-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto min-h-screen max-h-screen flex flex-col justify-center">
        <FireEyes />
        <h1
          style={{ textShadow: "2px 2px 4px rgba(53, 53, 53, 0.5)" }}
          className="font-bold text-center items-center leading-none tracking-tight  md:text-4xl lg:text-5xl text-white "
        >
          Hi, I&apos;m Albany! I&apos;m a game developer and software engineer
          based in the Bay Area.
        </h1>
        <div className="">
          {/* <p className=" max-w-2xl leading-5 mt-6 mb-6 text-lg font-normal  lg:text-xl dark:text-#d0d0d0-400 whitespace text-left">
            Just as the simple law of gravity,{" "}
            <span className="text-pink-400">F = mg</span>, shaped <br />{" "}
            galaxies, stars, planets, our solar system, Earth, and ultimately
            life— <br /> enabling us to walk, talk, laugh, play sports, skydive,{" "}
            <br /> and feel emotions like happiness, love, and longing— <br /> I
            believe that
            <span className="text-pink-400"> simple, robust systems </span>
            are the foundation for building functionally complex and scalable
            software.
          </p> */}
        </div>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-2  grid-rows-1 gap-4 text-xl min-h-[80vh] ">
        <div className="p-4 text-white text-center flex flex-col justify-center">
          <h2 className="font-bold text-3xl">Game Dev:</h2>
          <div className="m-5">
            <h4>C#, C++, Luau </h4>
            <div className=" flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/CSharp.svg"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              ></img>
              <img
                src="/static/images/languages/CPlusPlus.svg"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              ></img>
              <img
                src="/static/images/languages/luau.png"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              ></img>
            </div>
          </div>
          <div className="mt-5 mb-10">
            <h4>Unity, ROBLOX, OpenFrameworks </h4>
            <div className="flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/unity.png"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"
              ></img>
              <img
                src="/static/images/languages/roblox.png"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"
              ></img>
            </div>
          </div>
        </div>
        <div className="p-4 text-white text-center flex flex-col justify-center">
          <h2 className="font-bold text-3xl">Web Dev:</h2>
          <div className="m-5">
            <h4> Java, Python, Typescript, Javascript </h4>
            <div className=" flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/Java.svg"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              ></img>
              <img
                src="/static/images/languages/Python.svg"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              ></img>
              <img
                src="/static/images/languages/TypeScript.svg"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              ></img>
              <img
                src="/static/images/languages/JS.svg"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20"
              ></img>
            </div>
          </div>
          <div className="mt-5 mb-10">
            <h4> React, Express, Node, PostgreSQL, MySQL </h4>
            <div className="flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/react.png"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"
              ></img>
              <img
                src="/static/images/languages/expressjs.png"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"
              ></img>
              <img
                src="/static/images/languages/nodejs.webp"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"
              ></img>
              <img
                src="/static/images/languages/postgresql.png"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"
              ></img>
              <img
                src="/static/images/languages/mysql.png"
                className="w-8 h-8 md:w-14 md:h-14 lg:w-20 lg:h-20 object-cover"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
    </div>
  );
}

function Gallery() {
  const [filterState, setFilters] = useState<TFilterState[]>([
    { [0]: Filter.Game, [1]: true },
    { [0]: Filter.App, [1]: true },
  ]);

  // Handler for when the checkbox changes
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const id: string = event.target.id;
    handleClick(checked, id);
  };

  // Function to handle the checked state
  const handleClick = (checked: boolean, id: string) => {
    console.log(checked, id);
    const index = parseInt(id);
    const newFilterStates = filterState.map((state, idx) => {
      if (idx === index) {
        return { ...state, [1]: checked }; // Update only the clicked checkbox
      }
      return state; // Return the current state unchanged
    });
    setFilters(newFilterStates);
  };

  return (
    <>
      <div
        className={`transition-all duration-500 overflow-hidden flex space-x-2 max-w-full mb-4 justify-center`}
      >
        <div className="flex items-center space-x-2 p-1 rounded-sm text-white font-bold">
          <input
            type="checkbox"
            id="0"
            className="appearance-none w-5 h-5 border-[1.5px] border-[rgba(255,102,203,1)] rounded-sm checked:bg-[rgb(144,32,97)] text-[0.7rem] checked:after:content-['✔'] checked:after:text-white checked:after:flex checked:after:items-center checked:after:justify-center"
            onChange={handleCheckboxChange}
            checked={filterState[0][1]} // Bind the checked state
          />
          <label
            htmlFor="0"
            className="bg-[rgba(255,102,203,1)] px-2 py-1 rounded-sm"
          >
            Game
          </label>
        </div>
        <div className="flex items-center space-x-2 p-1 rounded-sm text-white font-bold ml-4">
          <input
            type="checkbox"
            id="1"
            className="appearance-none w-5 h-5 border-[1.5px] border-[rgba(64,195,255,1)] rounded-sm checked:bg-[rgb(32,97,144)]  text-[0.7rem] checked:after:content-['✔'] checked:after:text-white checked:after:flex checked:after:items-center checked:after:justify-center"
            onChange={handleCheckboxChange}
            checked={filterState[1][1]} // Bind the checked state
          />
          <label
            htmlFor="1"
            className="bg-[rgba(64,195,255,1)] px-2 py-1 rounded-sm "
          >
            App
          </label>
        </div>
      </div>
      <div
        id="work-section"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8"
      >
        {galleryItemsData
          .filter((item) => {
            return filterState.some(
              (state) => state[0] === item.type && state[1] === true
            );
          })
          .map((item, index) => (
            <GalleryItem
              key={index}
              href={item.href}
              img={item.img}
              type={item.type}
              hoverTitle={item.hoverTitle}
              hoverDescription={item.hoverDescription}
            />
          ))}
      </div>
    </>
  );
}

interface GalleryItemProps {
  href: string; // Link to the resource
  img: string; // Image source URL
  type: Filter; // Type of the item (Game or App)
  hoverTitle: string; // Title to show on hover
  hoverDescription: string; // Optional description to show on hover
}

export interface TFilterState {
  [0]: Filter;
  [1]: boolean;
}

function GalleryItem(props: GalleryItemProps) {
  return (
    <Link href={props.href} className="relative text-white">
      <img
        src={props.img} // Use the img prop
        className="aspect-video object-cover"
      />

      <div
        className={`absolute top-2 right-2 z-1 ${
          props.type == Filter.Game
            ? "bg-[rgba(255,102,203,1)]"
            : "bg-[rgba(64,195,255,1)]"
        } rounded-sm py-1 px-2`}
      >
        <span className="font-extrabold ">
          {props.type == Filter.Game ? "Game" : "App"}
        </span>
      </div>

      <div className="opacity-0 absolute top-0 left-0 bg-[#606060db] hover:opacity-100 min-w-full min-h-full flex justify-center items-center flex-col text-center transition-opacity duration-300 ease-in-out">
        <span className="font-bold text-2xl">{props.hoverTitle}</span>
        {props.hoverDescription && <span>{props.hoverDescription}</span>}{" "}
        {/* Optional description */}
      </div>
    </Link>
  );
}

function FireEyes() {
  const { RiveComponent } = useRive({
    src: "/static/vectors/Eyes.riv",
    stateMachines: ["LoopAndEnter"],
    autoplay: true,
  });

  return <RiveComponent className="h-[165px] flex " />;
}
