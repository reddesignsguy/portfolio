"use client";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface ProjectInfo {
  title: string;
  description: string;
  descriptionHiglighted: string;
  highlights: string[];
  youtube?: string;
  itch?: string;
  itchWidget?: string;
  externalLink?: string;
  externalLinkThumb?: string;
}

const projectsDirectory: string = "../../public/static/projects";

import a from "../../public/static/projects/wegogym/Thumbnail.png";

export default function ProjectLayout(info: ProjectInfo) {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-1 gap-20 lg:mx-32 md:mx-12 mx-2 text-white ">
        <div className="">
          <div className="flex flex-row">
            <span className="text-7xl font-bold">{info.title}</span>
            <Image
              alt={info.title}
              width={0}
              height={0}
              sizes="100vw"
              className="ml-5 w-32 flex mt-auto mr-10 h-auto"
              src="static/vectors/title-block.svg"
            ></Image>
          </div>
          <h1 className="text-2xl font-normal mt-4">
            {info.description}{" "}
            <span className="text-pink-400">{info.descriptionHiglighted}</span>
          </h1>
          <ul className="ml-12 list-disc text-md mt-4">
            {info.highlights.map((highlight: string, index: number) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          {info.youtube && (
            <div className="relative pb-[56.25%] w-full h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={info.youtube}
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
          {info.itchWidget && info.itch && (
            <iframe
              className="rounded-lg mt-10 w-full shadow-[4px_4px_0px_rgba(255,102,203,1),_-6px_-6px_0px_rgba(64,195,255,1)] p-6"
              frameBorder="0"
              src={info.itchWidget}
              width="550"
              height="165"
            >
              <a href={info.itch}></a>
            </iframe>
          )}

          {info.externalLink && info.externalLinkThumb && (
            <a
              href="https://wegogym.org"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden rounded-lg shadow-lg hover:opacity-90 transition"
            >
              <img
                src="/static/projects/wegogym/thumbnail.png"
                alt="Clickable Image"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white items-center flex flex-row gap-3 justify-center text-sm py-2 text-lg">
                <span>Visit Project</span>
                <FaExternalLinkAlt />
              </div>
            </a>
          )}
        </div>
      </div>
    </>
  );
}
