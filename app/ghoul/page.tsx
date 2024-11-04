import NavBar from "../components/NavBar";

import { ProjectLayout } from "../components/ProjectLayout";

export default function Inertia() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto mt-56">
      <NavBar />
      <ProjectLayout
        title={"Detective Ghoul"}
        description={"(ONGOING PROJECT) Solve the case about a  woman's"}
        descriptionHiglighted={"missing brother."}
        highlights={[
          "Developed with C# and Unity",
          "Architected and implemented inventory, checkpoint, UI, and object-interaction systems",
          "Utilized OOP and SOLID for modelling items and object interactions, enabling scalability and extensibility",
          "Coordinated with artists, designers, musicians, and programmers to delegate tasks and ensure zero pipeline blocks in the game development process",
        ]}
        youtube={""}
        itch={"https://vexeo.itch.io/detective-ghoul"}
        itchWidget={
          "https://itch.io/embed/3077786?border_width=0&bg_color=111111&fg_color=ffffff&link_color=2ce8f4&border_color=111111"
        }
      />
    </div>
  );
}
