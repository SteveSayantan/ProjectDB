const FeaturedProjectCard = ({title,summary}) => {
    
    return (
        <div className="card bg-white shadow-md p-6 hover:shadow-lg">
            <h4 className="text-xl font-semibold text-blue-600">
                {title}
            </h4>
            <p className="text-gray-600 mt-2">
                {summary}
            </p>
        </div>
    );
};

export default FeaturedProjectCard;
