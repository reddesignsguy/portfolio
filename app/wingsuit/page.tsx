import NavBar from "../components/NavBar";
import { ProjectLayout } from "../components/ProjectLayout";

export default function Inertia() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto mt-56">
      <NavBar />
      <ProjectLayout
        title={"Wingsuit World"}
        description={
          "Wingsuit glide through an open world at top speeds. Compete in races "
        }
        descriptionHiglighted={"without crashing."}
        highlights={[
          "Created a wingsuit game in Lua where players riskily fly near objects throughout an immersive 3D world",
          "Implemented a semi-realistic flight system that incorporates aerodynamic drag and lift; utilized concepts like cross and dot products to apply lift forces onto the player only at certain orientation angles",
          "Designed a points-scoring system that calculates proximity to obstacles using raycasts",
          "Implemented the client-server model and event-driven architecture, optimizing response times for high-latency players and preventing leaderboard tampering from cheaters",
        ]}
        youtube={"https://www.youtube.com/embed/tYyvsIhcg6s"}
        itch={"https://vexeo.itch.io/wingsuit-world"}
        itchWidget={
          "https://itch.io/embed/3011406?border_width=0&bg_color=111111&fg_color=ffffff&link_color=2ce8f4&border_color=111111"
        }
      />
    </div>
  );
}
