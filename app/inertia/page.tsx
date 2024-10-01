import Image from "next/image";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";

export default function Inertia() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto mt-56 p-8">
      <NavBar />
      <div className="grid grid-cols-2  grid-rows-1 gap-20">
        {/* <img className="m-8" src="static/vectors/guide-vector.svg"></img> */}
        <div className="">
          <div className="flex flex-row mt-10">
            <span className="text-8xl font-bold">Inertia</span>
            <img
              className="ml-5 w-32 flex mt-auto mr-10"
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
              Polished game feel with stunning user-interaction FX, like gravity
              selection, object outlining, and proximity-based object
              highlighting, using shader graphs
            </li>
            <li>
              Integrated matrix transforms, animations, sounds, and particle
              systems of multiple sprites using structural design patterns
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <div className="relative pb-[56.25%] w-full h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/sCcTyYLRaNw"
              frameBorder="0"
              allowFullScreen
            />
          </div>

          <iframe
            className="rounded-lg mt-10 w-full shadow-[4px_4px_0px_rgba(255,102,203,1),_-6px_-6px_0px_rgba(64,195,255,1)] p-6"
            frameBorder="0"
            src="https://itch.io/embed/2898848?border_width=0&amp;bg_color=111111&amp;fg_color=ffffff&amp;link_color=2ce8f4&amp;border_color=111111"
            width="550"
            height="165"
          >
            <a href="https://vexeo.itch.io/who-is-out-there">
              INERTIA by vexeo
            </a>
          </iframe>
        </div>
      </div>
    </div>
  );
}
