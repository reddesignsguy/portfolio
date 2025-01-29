"use client";

import { useRive } from "@rive-app/react-canvas-lite";
import NavBar from "./components/NavBar";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

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
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center z-0">
        <FireEyes />
        <h1
          style={{ textShadow: "2px 2px 4px rgba(53, 53, 53, 0.5)" }}
          className="font-bold text-center items-center leading-none tracking-tight  text-2xl md:text-4xl lg:text-5xl text-white sticky"
        >
          Hi, I&apos;m Albany! I&apos;m a game developer and software engineer
          based in the Bay Area.
        </h1>
      </div>
      {/* After Hero Section */}
      <div className="mt-[calc(100vh-4rem)] mb-36 z-20 relative">
        {/* Background that scrolls over hero component */}
        <div className="absolute top-[40rem] inset-0 bg-[rgb(13,12,13)] z-0" />
        <div className="relative h-[40rem] bg-gradient-to-t from-[rgb(13,12,13)] to-transparent"></div>
        {/* About ME */}
        <div className="flex justify-center flex-col items-center gap-5	relative z-20 mt-[10rem]">
          {" "}
          <h1 className="text-4xl font-light">Hello! I'm Albany Patriawan.</h1>
          <p className="text-lg max-w-3xl text-left  indent-5">
            I obtained my B.S. in Software Engineering from{" "}
            <b className="text-pink-400">SJSU</b>. I was a Software Developer
            Engineer Intern at <b className="text-pink-400">Zillow</b> in 2023
            and Python and Java tutor at{" "}
            <b className="text-pink-400">Talentnook</b> from 2020-2023. I am
            looking for software engineering and gameplay programming roles.
            {/* <br /> <br /> */}
          </p>
          {/* <br /> */}
          <h1 className="mt-[h-screen] text-4xl font-light">
            Check out my work :)
          </h1>
          {/* <p className="text-lg max-w-3xl text-center">
            {" "}
            Here&apos;s a game dev reel of my work:{" "}
          </p> */}
          <DemoReel />
          {/* <p className="text-lg max-w-3xl text-center">
            {" "}
            An overview of my skills:{" "}
          </p>
          <CustomTable headers={headers} data={data} />
          <p className="text-lg max-w-3xl text-left">
            Though I enjoy many areas of games programming, I have experience
            with or have an interest for:
          </p>
          <p className="text-lg max-w-3xl text-left">
            <ul className="list-disctext-left">
              <ul>
                <li>
                  <b className="text-pink-400">Genres:</b> RPG, action,
                  adventure, shooter, FPS, and narrative-driven
                </li>
                <li>
                  <b className="text-pink-400">Areas:</b> Gameplay programming,
                  animation &#40;IK, motion matching, traditional FSMs&#41;,
                  behavior trees for AI, backend systems &#40;inventory, quests,
                  dialogue, saving, progression&#41;, and UI systems
                </li>
                <li>
                  <b className="text-pink-400">Engines:</b> Unity, ROBLOX
                  Studio, and Pygame
                </li>
                <li>
                  <b className="text-pink-400">Languages:</b> C#, C++, and Lua
                </li>
              </ul>
            </ul>
          </p> */}
          {/* <h1 className="text-3xl font-light">Projects</h1> */}
          <Gallery />
        </div>
      </div>
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
    <div className="relative bg-[rgba(1,1,1,1)] max-w-3xl p-6 rounded-lg">
      {/* <h1 className="text-4xl font-bold flex justify-center mb-2">Projects</h1> */}
      <h1 className="text-l font-semibold text-neutral-400">Portfolio</h1>
      <div
        className={`transition-all duration-500 overflow-hidden flex space-x-2 max-w-full mb-4 justify-center`}
      >
        {/* <div className="flex items-center space-x-2 p-1 rounded-sm text-white font-bold">
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
        </div> */}
      </div>
      <div
        id="work-section"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 mx-auto"
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
              tags={item.tags}
            />
          ))}
      </div>
    </div>
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

        <div
          className={`absolute  left-3 top-0 z-1 ${
            props.type == Filter.Game
              ? "bg-[rgba(255,102,203,1)]"
              : "bg-[rgba(64,195,255,1)]"
          }  w-4 h-[30px]`}
        ></div>

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
    <div className="max-w-3xl mx-auto my-3">
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
                  className={` border-#f0f0f0-300 px-4 py-2 bg-[rgb(13,12,13)]`}
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

// const ResumeDownload = () => {
//   return (
//     <div className="flex flex-col items-center my-36">
//       <h2 className="text-4xl font-bold mb-4"> Resume </h2>
//       <iframe
//         src="/static/PortfolioResume.pdf" // Path to your PDF file in the public directory
//         width="500" // Adjust width as needed
//         height="700" // Adjust height as needed
//         className="border-2 border-gray-300"
//       >
//         This browser does not support PDFs. Please download the PDF to view it:
//         <a href="/static/AlbanyPatriawan_Resume_Games.pdf">Download PDF</a>
//       </iframe>
//     </div>
//   );
// };

const DemoReel = () => {
  return (
    <div className="w-[90%] max-w-3xl h-fit mx-auto items-center">
      {/* <h2 className="text-4xl font-bold mb-4"> Game Dev Reel </h2> */}
      <div className="w-full h-full p-5 bg-[rgba(1,1,1,1)] rounded-xl">
        <h1 className="text-l font-semibold text-neutral-400 mb-3">
          Demo Reel
        </h1>

        <iframe
          className="w-full h-[450px]"
          src="https://www.youtube.com/embed/2SvdoHie9yc"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
};
