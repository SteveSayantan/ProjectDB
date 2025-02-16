import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <section class="max-w-7xl mx-auto px-4 py-16">
            <h3 class="text-2xl font-semibold text-center mb-8 lg:text-3xl">
                Explore by Category
            </h3>
            <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
                <Link to={"#"} class="btn btn-outline btn-info lg:text-lg">
                    AI
                </Link>
                <Link to={"#"} class="btn btn-outline btn-info lg:text-lg">
                    IoT
                </Link>
                <Link to={"#"} class="btn btn-outline btn-info lg:text-lg">
                    Blockchain
                </Link>
                <Link to={"#"} class="btn btn-outline btn-info lg:text-lg">
                    Data Science
                </Link>
                <Link to={"#"} class="btn btn-outline btn-info lg:text-lg">
                    Cybersecurity
                </Link>
                <Link to={"#"} class="btn btn-outline btn-info lg:text-lg">
                    Robotics
                </Link>
                {/* <!-- Add more categories as needed --> */}
            </div>
        </section>
    );
};

export default Category;
