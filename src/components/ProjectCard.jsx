const ProjectCard = ({ title, description, contributors }) => {
    return (
        <li className="card prose prose-sm prose-headings:text-blue-600 shadow-md hover:shadow-lg p-5 bg-base-100  md:prose-base md:p-7 md:prose-p:text-justify">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
                Contributors:&nbsp;
                <strong>
                    {contributors.join(", ")}
                </strong>
            </p>
            <div className="flex justify-end items-end grow gap-2">
                <button type='button' className="btn btn-sm btn-success">Approve</button>
                <button type='button' className="btn btn-sm btn-error">Decline</button>
            </div>

        </li>
    );
};

export default ProjectCard;
