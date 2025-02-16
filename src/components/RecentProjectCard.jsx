import React from "react";

const RecentProjectCard = ({projectDetails}) => {
    return (
        <div className="card bg-white shadow-md p-6 hover:shadow-lg">
            <h4 className="text-xl font-semibold text-blue-600">
                AI-Based Student Mentor System
            </h4>
            <p className="text-gray-600 mt-2">
                A system to provide AI-driven guidance for students.
            </p>
        </div>
    );
};

export default RecentProjectCard;
