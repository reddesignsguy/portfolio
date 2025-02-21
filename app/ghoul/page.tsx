// DetectiveGhoul.tsx
import ProjectPageTemplate from "../components/ProjectPageTemplate";

export default function DetectiveGhoul() {
  return (
    <ProjectPageTemplate
      title={"Detective Ghoul"}
      description={"(ONGOING PROJECT) Solve the case about a woman's"}
      descriptionHiglighted={"missing brother."}
      highlights={[
        "Developed with C# and Unity",
        "Architected and implemented inventory, checkpoint, UI, and object-interaction systems",
        "Utilized OOP and SOLID for modelling items and object interactions, enabling scalability and extensibility",
        "Coordinated with artists, designers, musicians, and programmers to delegate tasks and ensure zero pipeline blocks in the game development process",
      ]}
      youtube={"https://www.youtube.com/embed/2SvdoHie9yc?start=31"}
      itch={"https://vexeo.itch.io/detective-ghoul"}
      itchWidget={
        "https://itch.io/embed/3077786?border_width=0&bg_color=111111&fg_color=ffffff&link_color=2ce8f4&border_color=111111"
      }
    />
  );
}
