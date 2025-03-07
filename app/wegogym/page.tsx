import ProjectPageTemplate from "../components/ProjectPageTemplate";

export default function WeGoGym() {
  return (
    <ProjectPageTemplate
      title={"WeGoGym"}
      description={"Put money in."}
      descriptionHiglighted={"Hit the gym to earn it back."}
      highlights={[
        "Designed and launched a web app in JavaScript that lets users deposit money, track workouts, and earn their deposit back by consistently hitting the gym within a month",
        "Self-hosted a REST API and SQLite instance on a Linux server using DigitalOcean, securing 1K+ daily requests with token validation, firewalls, rate limiting, and OWASP principles like least privilege and strict input",
      ]}
      youtube={""}
      itch={""}
      itchWidget={""}
      externalLink="https://wegogym.org/"
      externalLinkThumb="/wegogym/Thumbnail.png"
    />
  );
}
