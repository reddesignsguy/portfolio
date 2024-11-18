import NavBar from "../components/NavBar";

import { ProjectLayout } from "../components/ProjectLayout";

export default function Ethereal() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto mt-56">
      <NavBar />
      <ProjectLayout
        title={"Ethereal Escape"}
        description={"Escape the flood "}
        descriptionHiglighted={"in VR."}
        highlights={[
          "Created a VR platformer in 36 hours for Stanford XR: Immerse The Bay 2024 hackathon in a team of 3",
          "Implemented level mechanics like ziplining and disappearing platforms",
          "Integrated VR-friendly UI, character locomotion package, 3D assets, and sounds, enhancing the user experience",
        ]}
        youtube={"https://www.youtube.com/embed/pCGDChb_iIA"}
        itch={"https://vexeo.itch.io/"}
        itchWidget={""}
      />
    </div>
  );
}
