import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <div className="min-h-screen bg-inherit">
            <header className=" shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-white">
                        Project Approval
                    </h1>
                </div>
            </header>

            <div className="max-w-7xl mx-auto mt-2 py-6 px-4 bg-slate-900 shadow-md rounded-lg sm:px-6 lg:px-8 md:w-10/12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Search by project name"
                        className="input input-bordered w-full"
                    />
                    <select className="select select-bordered w-full">
                        <option disabled selected>
                            Filter by Category
                        </option>
                        <option>AI</option>
                        <option>IoT</option>
                        <option>Blockchain</option>
                    </select>
                    <select className="select select-bordered w-full">
                        <option disabled selected>
                            Filter by Status
                        </option>
                        <option>Pending</option>
                        <option>Approved</option>
                    </select>
                    <button className="btn btn-primary w-full">Search</button>
                </div>
            </div>

            <main className="py-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 md:gap-10 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <ProjectCard
                            title={"Blockchain for Certificates"}
                            description={
                                "A blockchain-based system for secure management of education certificates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum amet eligendi, harum iste ducimus incidunt  nostrum sed, omnis architecto fuga, nisi accusantium nulla repellendus."
                            }
                            contributors={["john", "Bob"]}
                        />
                        <ProjectCard
                            title={"Blockchain for Certificates"}
                            description={
                                "A blockchain-based system for secure management of education certificates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum amet eligendi, harum iste ducimus incidunt  nostrum sed, omnis architecto fuga, nisi accusantium nulla repellendus."
                            }
                            contributors={["john", "Bob"]}
                        />
                        <ProjectCard
                            title={"Blockchain for Certificates"}
                            description={
                                "A blockchain-based system for secure management of education certificates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos earum amet eligendi, harum iste ducimus incidunt  nostrum sed, omnis architecto fuga, nisi accusantium nulla repellendus."
                            }
                            contributors={["john", "Bob"]}
                        />
                    </div>

                    <div className="join">
                        <button className="join-item btn">1</button>
                        <button className="join-item btn btn-active">2</button>
                        <button className="join-item btn">3</button>
                        <button className="join-item btn">4</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Projects;
