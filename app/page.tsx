"use client";

import { useRive } from "@rive-app/react-canvas-lite";
import NavBar from "./components/NavBar";
import Link from "next/link";
import { useState } from "react";

enum Filter {
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
      </div>
      <CustomTable headers={headers} data={data} />
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
    src: "/static/vectors/Eyes2.riv",
    stateMachines: ["LoopAndEnter"],
    autoplay: true,
  });

  return <RiveComponent className="h-[165px] flex " />;
}

type CustomTableProps = {
  headers: string[]; // An array of strings for column headers
  data: string[][]; // A 2D array of strings for table data (rows and cells)
};

const headers: string[] = ["Game Dev", "Web Dev"];
const data: string[][] = [
  ["C#, C++, Lua", "Java, Python, Typescript, Javascript"],
  ["Unity, ROBLOX, OpenFrameworks", "React, Express, Node, PostgreSQL, MySQL"],
];

const CustomTable: React.FC<CustomTableProps> = ({ headers, data }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <table className="table-auto border-collapse border-[rgb(134,51,51)] w-full">
        {/* Table Head */}
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className={` border-gray-300 px-4 py-2 text-[white]  text-2xl bg-[rgb(35,35,35)]
               `}
              >
                <div className="flex justify-center items-center">
                  <div
                    className={`w-4 h-4  mr-2 rounded-md ${
                      index == 0
                        ? "bg-[rgba(255,102,203,1)]"
                        : "bg-[rgba(64,195,255,1)]"
                    }`}
                  ></div>
                  {header}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={` border-#f0f0f0-300 px-4 py-2 bg-[rgb(28,28,28)]`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
