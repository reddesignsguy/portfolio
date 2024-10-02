import NavBar from "../components/NavBar";
import { ProjectLayout } from "../components/ProjectLayout";

export default function Inertia() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto mt-56">
      <NavBar />
      <ProjectLayout
        title={"Inertia"}
        description={"Play as an astronaut and solve 2D puzzles by "}
        descriptionHiglighted={"controlling the gravity of objects."}
        highlights={[
          "Developed for a 7-day game jam using C# and Unity",
          "Utilized an event-driven system and object-oriented programming (OOP) to decouple logic between input, player-character, the gravity selection process, and interactive objects increasing maintainability",
          "Polished game feel with stunning user-interaction FX, like gravity selection, object outlining, and proximity-based object highlighting, using shader graphs",
          "Integrated matrix transforms, animations, sounds, and particle systems of multiple sprites using structural design patterns",
        ]}
        youtube={"https://www.youtube.com/embed/sCcTyYLRaNw"}
        itch={"https://vexeo.itch.io/who-is-out-there"}
        itchWidget={
          "https://itch.io/embed/2898848?border_width=0&bg_color=111111&fg_color=ffffff&link_color=2ce8f4&border_color=111111"
        }
      />
    </div>
  );
}
