import ProjectPageTemplate from "../components/ProjectPageTemplate";

export default function SeaPiratesPage() {
  return (
    <ProjectPageTemplate
      title={"SeaPirates"}
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
  );
}
