import { Form } from "react-router-dom";

const AddUserModal = ({ modalRef }) => {

    return <dialog id="add-user-modal" className="modal" ref={modalRef}>

        <div className="modal-box">
            <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => modalRef.current.close()}>✕</button>
            <Form method="POST" id="add-user-form">
                <h3 className="font-bold text-lg">Add New User</h3>
                <div className="py-4">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="abc@xyz.com" name="email" className="input input-bordered w-full" required />
                </div>
                <div className="py-4">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" placeholder="IIT Dholakpur" name="name" className="input input-bordered w-full" required />
                </div>
                <div className="py-4">
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select className="select select-bordered w-full" name="role" required defaultValue="">
                        <option disabled value="">Select Role</option>
                        <option value="contributor">Contributor</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div className="py-4">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" required />
                </div>
                <div className="modal-action">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </Form>
        </div>
    </dialog>
}

export default AddUserModal;