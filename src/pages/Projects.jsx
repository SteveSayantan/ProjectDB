import { ProjectsContainer, ProjectSearchContainer, ProjectSearchContainerAdmin } from "../components";

const dummyProjects = [
    {
        id: 1,
        title: "Blockchain for Certificates",
        description: "A blockchain-based system for secure management of education certificates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum amet eligendi, harum iste ducimus incidunt  nostrum sed, omnis architecto fuga, nisi accusantium nulla repellendus.",
        contributors: ["John", "Bob"],
    },
    {
        id: 2,
        title: "Blockchain for Certificates",
        description: "A blockchain-based system for secure management of education certificates.",
        contributors: ["John", "Bob"],
    },
    {
        id: 3,
        title: "Blockchain for Certificates and Something More Interesting",
        description: "A blockchain-based system for secure management of education certificates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum amet eligendi, harum iste ducimus incidunt  nostrum sed, omnis architecto fuga, nisi accusantium nulla repellendus.",
        contributors: ["John", "Bob"],
    },
];


const Projects = () => {

    return <main className="min-h-screen bg-base-200 py-3">
            <ProjectSearchContainer />
            <ProjectSearchContainerAdmin/>
            <section className="mx-auto w-11/12 max-w-7xl mt-7">
                <ProjectsContainer projects={dummyProjects}/>
            </section>
        </main>
};

export default Projects;
