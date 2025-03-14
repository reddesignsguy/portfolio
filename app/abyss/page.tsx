import ProjectPageTemplate from "../components/ProjectPageTemplate";

export default function Inertia() {
  return (
    <ProjectPageTemplate
      title="The Abyss"
      description="Descend into the abyss"
      descriptionHiglighted="without colliding into obstacles."
      highlights={[
        "Developed with C++ and OpenFrameworks",
        "Physics system based on forces allows satisfying movement of spaceship in all 6 directions, including yaw rotation",
        "Cave map is spatially partitioned with an Octree for efficient collision detection",
        "Collision resolution (bouncing) is based on the normals of colliding faces and the velocity of the player",
        "Particle color and size are dynamically calculated and rendered using GLSL Shaders",
        "All models were created in Maya",
      ]}
      youtube="https://www.youtube.com/embed/NHVrczwoOJw"
      itch="https://vexeo.itch.io/the-abyss"
      itchWidget="https://itch.io/embed/3011404?border_width=0&bg_color=111111&fg_color=ffffff&link_color=2ce8f4&border_color=111111"
    />
  );
}
