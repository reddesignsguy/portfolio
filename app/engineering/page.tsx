"use client";

import Image from "next/image";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

export default function EngineeringPage() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl m-auto">
      <div className="bg-gradient-to-r from-indigo-500"></div>
      <NavBar />
      <div className="max-w-full mx-auto flex items-center justify-between min-h-screen  ">
        <img className="w-80" src="/color_brain.png" />
        <div className="ml-10 ">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            The left side of my brain.
          </h1>
          <p className=" max-w-2xl leading-5 mt-6 mb-6 text-lg font-normal  lg:text-xl dark:text-#d0d0d0-400 whitespace text-left">
            Just as the simple law of gravity,{" "}
            <span className="text-pink-400">F = mg</span>, shaped <br />{" "}
            galaxies, stars, planets, our solar system, Earth, and ultimately
            life— <br /> enabling us to walk, talk, laugh, play sports, skydive,{" "}
            <br /> and feel emotions like happiness, love, and longing— <br /> I
            believe that
            <span className="text-pink-400"> simple, robust systems </span>
            are the foundation for building functionally complex and scalable
            software.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2  grid-rows-1 gap-4 text-2xl p-8">
        <div className="p-4 text-white text-center">
          <h2 className="font-bold text-4xl">Game Dev:</h2>
          <div className="m-5">
            <h4>C#, C++, Luau </h4>
            <div className=" flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/CSharp.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/CPlusPlus.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/luau.png"
                className="w-24 h-24"
              ></img>
            </div>
          </div>
          <div className="mt-5 mb-10">
            <h4>Unity, ROBLOX, OpenFrameworks </h4>
            <div className="flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/unity.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/roblox.png"
                className="w-24 h-24 object-cover"
              ></img>
            </div>
          </div>
          <div className="max-w-2xl px-16 mx-auto">
            <Carousel>
              {slides.map((s, i) => (
                <img key={i} src={s}></img>
              ))}
            </Carousel>
          </div>
        </div>
        <div className="p-4 text-white text-center">
          <h2 className="font-bold text-4xl">Web Dev:</h2>
          <div className="m-5">
            <h4> Java, Python, Typescript, Javascript </h4>
            <div className=" flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/Java.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/Python.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/TypeScript.svg"
                className="w-24 h-24"
              ></img>
              <img
                src="/static/images/languages/JS.svg"
                className="w-24 h-24"
              ></img>
            </div>
          </div>
          <div className="mt-5 mb-10">
            <h4> React, Express, Node, PostgreSQL, MySQL </h4>
            <div className="flex justify-center gap-4 w-full max-w-md mx-auto my-3">
              <img
                src="/static/images/languages/react.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/expressjs.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/nodejs.webp"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/postgresql.png"
                className="w-24 h-24 object-cover"
              ></img>
              <img
                src="/static/images/languages/mysql.png"
                className="w-24 h-24 object-cover"
              ></img>
            </div>
          </div>
          <div className="max-w-2xl px-16 mx-auto">
            <Carousel>
              {slides.map((s, i) => (
                <img key={i} src={s}></img>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <h1 className="font-medium text-2xl mt-72">
        Check out my <u>coding and engineering </u> work
      </h1>
      <div className="grid grid-cols-2  grid-rows-1">
        <div className="flex flex-row m-auto">
          <img className="m-8" src="static/vectors/guide-vector.svg"></img>
          <div className="">
            <div className="flex flex-row mt-10">
              <span className="text-8xl font-bold ">Inertia</span>
              <img
                className="ml-5 w-32 flex mt-auto"
                src="static/vectors/title-block.svg"
              ></img>
            </div>
            <h1 className="text-3xl font-normal mt-4">
              Play as an astronaut and solve 2D puzzles by{" "}
              <span className="text-pink-400">
                controlling the gravity of objects.
              </span>
            </h1>
            <ul className="ml-12 list-disc text-lg mt-4">
              <li>Developed for a 7-day game jam using C# and Unity</li>
              <li>
                Utilized an event-driven system and object-oriented programming
                (OOP) to decouple logic between input, player-character, the
                gravity selection process, and interactive objects increasing
                maintainability
              </li>
              <li>
                Polished game feel with stunning user-interaction FX, like
                gravity selection, object outlining, and proximity-based object
                highlighting, using shader graphs
              </li>
              <li>
                Integrated matrix transforms, animations, sounds, and particle
                systems of multiple sprites using structural design patterns
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
