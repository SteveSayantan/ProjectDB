import React from "react";
import RecentProjectCard from "./RecentProjectCard";

const RecentProjects = () => {
    return (
        <section class="py-12 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 text-center">
                <h3 class="text-2xl font-bold mb-8 text-black">Recent Projects</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <RecentProjectCard/>
                    <RecentProjectCard/>
                    <RecentProjectCard/>
                </div>
            </div>
        </section>
    );
};

export default RecentProjects;
