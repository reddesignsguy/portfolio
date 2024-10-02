import Image from "next/image";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import { ProjectInfo, ProjectLayout } from "../components/ProjectLayout";

export default function SeaPiratesPage(info: ProjectInfo) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto mt-56">
      <NavBar />
      <ProjectLayout
        title={"Sea Pirates"}
        description={"Shoot the ships and don't let them touch you. "}
        descriptionHiglighted={"- Captain Blackbeard"}
        highlights={[
          "Developed with C++ and OpenFrameworks",
          "Physics system is based on forces, responsible for explosions and player movement",
          "Collision detection is calculated using the Axis-Aligned Bounding Boxes (AABB) of sprites",
          "Images and sprites created in Aseprite (except for hearts)",
        ]}
        youtube={"https://www.youtube.com/embed/HGOgDdiF908"}
        itch={"https://vexeo.itch.io/seapirates"}
        itchWidget={
          "https://itch.io/embed/3011398?border_width=0&bg_color=111111&fg_color=ffffff&link_color=2ce8f4&border_color=111111"
        }
      />
    </div>
  );
}
