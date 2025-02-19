import { Form } from "react-router-dom";
import FormInput from "./FormInput";

const ProjectCreateContainer = () => {
    
    return <Form className="px-4 py-6 bg-base-100 shadow-lg rounded-xl max-w-7xl md:px-6 md:py-8 md:mx-auto md:w-11/12 md:grid md:grid-cols-2 md:gap-6 lg:px-10">

        <h2 className="text-2xl font-semibold text-accent-content mb-4 text-center md:col-span-2 md:text-left">Create New Project</h2>

        <FormInput label="Title" type="text" name="title" placeholder="Gold Extraction from Milk" />
        <FormInput label="Summary" type="text" name="summary" placeholder="Random sentence with heavy words..." />

        <label className="form-control w-full">
            <div className="label">
                <span className="label-text font-medium capitalize">Category</span>
            </div>
            <select className="select select-bordered w-full" defaultValue="" required>
                <option disabled value="">Choose a category</option>
                <option value="ai/ml">AI/ML</option>
                <option value="iot">IoT</option>
            </select>
        </label>

        <FormInput label="Contributors" type="text" name="contributors" placeholder="Alan, Bob, Jimmy" />

        <label className="form-control w-full col-span-2">
            <div className="label">
                <span className="label-text font-medium capitalize">Description</span>
            </div>
            <textarea className="textarea textarea-bordered" placeholder="Some more gibberish" required></textarea>
        </label>

        <button type="submit" className="btn btn-primary col-span-2 mt-2">Add Project</button>

    </Form>

}

export default ProjectCreateContainer;