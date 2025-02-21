// Attendease.tsx
import ProjectPageTemplate from "../components/ProjectPageTemplate";

export default function Attendease() {
  return (
    <ProjectPageTemplate
      title={"Attendease"}
      description={"Take attendance without having to do it yourself."}
      descriptionHiglighted={"Powered by AI."}
      highlights={[
        "Designed and developed the frontend using modular components and ChartJS",
        "Leveraged NextJS and Prisma for server-side rendering and querying students belonging to a specific class meeting",
        "Implemented server-sent event architecture and real-time website updates based on who has been marked",
      ]}
      youtube={"https://www.youtube.com/embed/Wu8tIisRciU"}
      itch={""}
      itchWidget={""}
    />
  );
}
