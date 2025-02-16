import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const categories = [
        "AI",
        "IoT",
        "Blockchain",
        "Data Science",
        "Cybersecurity",
        "Robotics",
    ];
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h3 className="text-2xl font-semibold text-center mb-8 lg:text-3xl">
                Explore by Category
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 ">
                {categories.map((category) => (
                    <Link
                        to={"#"}
                        key={category}
                        className="btn btn-outline btn-info lg:text-lg"
                    >
                        {category}
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Category;
