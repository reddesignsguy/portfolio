import Image from "next/image";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";

export default function Inertia() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl m-auto">
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
