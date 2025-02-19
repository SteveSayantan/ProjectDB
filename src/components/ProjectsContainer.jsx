import ProjectCard from "./ProjectCard"


const ProjectsContainer = ({projects}) => {
    return <ul className="grid py-4 grid-cols-1 justify-items-center mt-4 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />
        })}
    </ul>
}

export default ProjectsContainer;