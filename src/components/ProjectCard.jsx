import React from "react";

const ProjectCard = ({title, description, contributors}) => {
    return (
        <div className="card bg-slate-950 transition-shadow hover:shadow-[16px_0px_28px_rgba(0,0,0,0.6)]  p-6">
            <h3 className="text-xl font-semibold text-blue-600">
                {title}
            </h3>
            <p className="text-gray-400 text-justif mt-2">
                {description}
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Contributors:{" "}
                <span className="font-semibold">{contributors ?  contributors.join(", ") : "No contributors"}</span>
            </p>
            <div className="mt-4 flex grow justify-end items-end gap-2">
                <button className="btn btn-sm btn-success">Approve</button>
                <button className="btn btn-sm btn-error">Decline</button>
            </div>
        </div>
    );
};

export default ProjectCard;
