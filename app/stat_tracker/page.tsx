import ProjectPageTemplate from "../components/ProjectPageTemplate";

export default function WingsuitWorldStatTrackerPage() {
  return (
    <ProjectPageTemplate
      title={"Wingsuit World Stat Tracker"}
      description={"Track your player stats for "}
      descriptionHiglighted={"the best game to ever exist"}
      highlights={[
        "Built a web app using JavaScript that tracks player stats for a personal ROBLOX game, Wingsuit World",
        "Leveraged ExpressJS and NodeJS to implement a RESTful service that verifies user ownership of a given ROBLOX account, allowing users to earn in-game rewards once authenticated",
        "Achieved maintainability and modularity in React using patterns like React-Query server state management, components, custom hooks, and styled-components",
        "Developed 4 responsive and user-centric pages in HTML & CSS using media queries, flex grids, relative units, and other Responsive Web Design (RWD) techniques",
      ]}
      youtube={"https://www.youtube.com/embed/NipLmFdQnpI"} // Converted to embed
      itch={""}
      itchWidget={""}
    />
  );
}
