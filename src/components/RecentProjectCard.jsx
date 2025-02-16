import React from "react";

const RecentProjectCard = ({projectDetails}) => {
    return (
        <div class="card bg-white shadow-md p-6 hover:shadow-lg">
            <h4 class="text-xl font-semibold text-blue-600">
                AI-Based Student Mentor System
            </h4>
            <p class="text-gray-600 mt-2">
                A system to provide AI-driven guidance for students.
            </p>
        </div>
    );
};

export default RecentProjectCard;
