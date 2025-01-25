import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error)

    if(error.status===404) return <section className="flex items-center justify-center h-screen bg-gray-100">
        <div className="max-w-3xl text-center">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <p className="text-xl mb-6 text-gray-700">
                Oops! The page you're looking for doesn’t exist.
            </p>
            <Link to="/" className="btn btn-primary">Go Back Home</Link>
        </div>
    </section>

    return <section className="flex items-center justify-center h-screen bg-gray-100 ">
            <h1 className="max-w-3xl text-6xl font-bold">There was an Error...</h1>
    </section>
}

export default ErrorPage;