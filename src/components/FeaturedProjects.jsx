import FeaturedProjectCard from "./FeaturedProjectCard";

const dummyProjects = [
    {
        id: 1,
        title: "AI-based Student Mentor System",
        summary: "A system to provide AI-driven guidance for students.",
    },
    {
        id: 2,
        title: "Blockchain for Education Certificates",
        summary: "Secure certification management using blockchain technology.",
    },
    {
        id: 3,
        title: "IoT-Based Smart Campus",
        summary: "An IoT solution for efficient campus management.",
    },
];

const FeaturedProjects = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h3 className="text-2xl font-bold mb-8 text-black">
                    Recent Projects
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {dummyProjects.map((project) => (
                        <FeaturedProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
