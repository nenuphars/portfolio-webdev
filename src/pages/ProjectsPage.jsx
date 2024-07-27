import ProjectCard from "../components/ProjectCard";
import data from "../data.json";

function ProjectsPage() {
  return (
    <div id="ProjectsPage" className="page-wrapper">
    {data.projects.map((oneProj)=>{
      return (
        <>
      <ProjectCard
      key={oneProj.title}
        title={oneProj.title}
        link_name={oneProj.link_name}
        dates={oneProj.info.time_span}
        short_description={oneProj.short_description}
        technologies={oneProj.info.technologies}

      />

        </>
      )
    })}
    </div>
  );
}

export default ProjectsPage;
