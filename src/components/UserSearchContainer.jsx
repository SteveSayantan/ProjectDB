import { Form } from "react-router-dom";
import AddUserModal from "./AddUserModal";
import { useEffect, useRef } from "react";
import { customInstance } from "../utils";

const UserSearchContainer = () => {

    const ref=useRef(null);

    return <>
        <Form className="px-4 py-4 max-w-7xl mb-5 mx-auto md:flex md:gap-2 md:px-6 lg:p-8">
            <input type="text" name="name" placeholder="Search by name or email" className="input input-bordered w-full md:w-1/4" />
            <select name="role" className="select select-bordered mt-3 w-full md:mt-0 md:w-1/4 " defaultValue=''>
                <option value='' >All</option>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
            </select>
            <div className="flex items-center justify-between mt-3 md:mt-0 md:grow">
                <button type="submit" className="btn btn-primary btn-sm md:btn-md">Search</button>
                <button type="button" className="btn btn-sm btn-primary md:btn-md" onClick={()=>ref.current.showModal()}>+ Add New User</button>
            </div>
        </Form>
        <AddUserModal modalRef={ref}/>
    </>
}

export default UserSearchContainer;