import React from "react";

const ProjectCard = ({title, description, contributors}) => {
    return (
        <div class="card bg-gray-950 shadow-md hover:shadow-lg p-6">
            <h3 class="text-xl font-semibold text-blue-600">
                {title}
            </h3>
            <p class="text-gray-600 text-justify mt-2">
                {description}
            </p>
            <p class="text-sm text-gray-500 mt-2">
                Contributors:{" "}
                <span class="font-semibold">{contributors ?  contributors.join(", ") : "No contributors"}</span>
            </p>
            <div class="mt-4 flex grow justify-end items-end gap-2">
                <button class="btn btn-sm btn-success">Approve</button>
                <button class="btn btn-sm btn-error">Decline</button>
            </div>
        </div>
    );
};

export default ProjectCard;
