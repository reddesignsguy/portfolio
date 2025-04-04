// ProjectPageTemplate.tsx
import NavBar from "./NavBar"; // Adjust import as necessary
import ProjectLayout from "./ProjectLayout"; // Adjust import based on your project structure

interface ProjectPageTemplateProps {
  title: string;
  description: string;
  descriptionHiglighted: string;
  highlights: string[];
  youtube?: string;
  itch?: string;
  itchWidget?: string;
  externalLink?: string;
  externalLinkThumb?: string;
}

const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({
  title,
  description,
  descriptionHiglighted,
  highlights,
  youtube,
  itch,
  itchWidget,
  externalLink,
  externalLinkThumb,
}) => {
  return (
    <>
      <NavBar />
      <div className="font-[family-name:var(--font-geist-sans)] max-w-7xl mx-auto">
        <ProjectLayout
          title={title}
          description={description}
          descriptionHiglighted={descriptionHiglighted}
          highlights={highlights}
          youtube={youtube}
          itch={itch}
          itchWidget={itchWidget}
          externalLink={externalLink}
          externalLinkThumb={externalLinkThumb}
        />
      </div>
    </>
  );
};

export default ProjectPageTemplate;
