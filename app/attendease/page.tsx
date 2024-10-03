import NavBar from "../components/NavBar";
import { ProjectLayout } from "../components/ProjectLayout";

export default function Attendease() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto mt-56">
      <NavBar />
      <ProjectLayout
        title={"Attendease"}
        description={"Take attendance without having to do it yourself. "}
        descriptionHiglighted={"Powered by AI."}
        highlights={[
          "Designed and developed the frontend using modular components and ChartJS",
          "Leveraged NextJS and Prisma for server-side rendering and querying students belonging to a specific class meeting",
          "Implemented server-sent event architecture and real-time website updates based on who has been marked",
        ]}
        youtube={"https://www.youtube.com/embed/Wu8tIisRciU"}
      />
    </div>
  );
}
