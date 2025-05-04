import { Form, useLocation } from "react-router-dom"
import FormInput from "./FormInput"

const ProjectSearchContainerAdmin=()=>{
    
    let location = useLocation();

    return <Form className="px-4 py-6 mt-7 shadow-md rounded-lg bg-base-100 max-w-7xl md:mx-auto md:w-11/12 md:grid md:grid-cols-2 md:gap-5 md:items-end md:px-6 md:py-8 lg:px-10">
        <h2 className="text-2xl font-semibold text-accent-content mb-4 text-center md:col-span-2 md:text-left">Search Project</h2>
        <FormInput label='institution name' type='text' name='institution' placeholder='IIT Dholakpur'/>

        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-medium capitalize">filter by category</span>
            </div>
            <select name='category' className="select select-bordered" defaultValue='all'>
                <option value='all'>All</option>
                <option value='ai/ml'>AI/ML</option>
                <option value='iot'>IoT</option>
            </select>
        </label>

        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-medium capitalize">filter by year</span>
            </div>
            <select name="year" className="select select-bordered" defaultValue='all'>
                <option value='all'>All</option>
                <option value='2025'>2025</option>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
            </select>
        </label>

        <label className="form-control w-full ">
            <div className="label">
                <span className="label-text font-medium capitalize">filter by status</span>
            </div>
            <select name="year" className="select select-bordered" defaultValue='all' disabled={location.pathname==='/gallery'}>
                <option value='all'>All</option>
                <option value='2025'>2025</option>
                <option value='2024'>2024</option>
                <option value='2023'>2023</option>
            </select>
        </label>
        <button type="submit" className="btn btn-primary btn-block mt-3 md:mt-0 md:col-span-full">Search</button>
    </Form>
}

export default ProjectSearchContainerAdmin;