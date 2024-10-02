export interface ProjectInfo {
  title: string;
  description: string;
  descriptionHiglighted: string;
  highlights: string[];
  youtube: string;
  itch: string;
  itchWidget: string;
}

export function ProjectLayout(info: ProjectInfo) {
  // Split the string into words and map over each word

  return (
    <div className="grid grid-cols-2  grid-rows-1 gap-20">
      <div className="">
        <div className="flex flex-row mt-10">
          <span className="text-8xl font-bold">{info.title}</span>
          <img
            className="ml-5 w-32 flex mt-auto mr-10"
            src="static/vectors/title-block.svg"
          ></img>
        </div>
        <h1 className="text-3xl font-normal mt-4">
          {info.description}{" "}
          <span className="text-pink-400">{info.descriptionHiglighted}</span>
        </h1>
        <ul className="ml-12 list-disc text-lg mt-4">
          {info.highlights.map((highlight: string, index: number) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <div className="relative pb-[56.25%] w-full h-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={info.youtube}
            frameBorder="0"
            allowFullScreen
          />
        </div>

        <iframe
          className="rounded-lg mt-10 w-full shadow-[4px_4px_0px_rgba(255,102,203,1),_-6px_-6px_0px_rgba(64,195,255,1)] p-6"
          frameBorder="0"
          src={info.itchWidget}
          width="550"
          height="165"
        >
          <a href={info.itch}>INERTIA by vexeo</a>
        </iframe>
      </div>
    </div>
  );
}
