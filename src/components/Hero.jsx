import { Link } from "react-router-dom";

const Hero = () => {
    return <main className="hero bg-blue-600 py-20">
        <div className="hero-content text-center text-white">
            <div className="max-w-5xl">
                <h1 className="text-4xl font-bold mb-4">Innovate, Share, and Learn</h1>
                <p className="text-lg mb-8 px-1 lg:text-xl">
                    A platform to showcase student projects across Indian universities and colleges.
                </p>
                <Link to='/gallery' className="btn btn-primary capitalize">explore projects</Link>
            </div>
        </div>
    </main>



}

export default Hero;
