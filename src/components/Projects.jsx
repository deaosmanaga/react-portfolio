import ProjectCard from "./ProjectCard";

function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default Projects;