import { useLoaderData } from "react-router-dom";

const headers=["email","university","role","actions"]

const UsersContainer = () => {

    const {users,count}=useLoaderData();

   
    return <section className="prose prose-thead:uppercase overflow-x-auto mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        
        <table className="table shadow">
            {/* head */}
            <thead className="bg-base-200">
                <tr>
                    {headers.map((header,id)=>{
                        return <th key={id} className="px-6 py-3">{header}</th>
                    })}
                   
                </tr>
            </thead>
            {/* body */}
            <tbody>
                {users.map((user)=>{
                    const {_id,email,name,role}=user;
                    return <tr className="hover" key={_id}>
                    <th className="whitespace-nowrap">{email}</th>
                    <td className="whitespace-nowrap capitalize">{name}</td>
                    <td className="capitalize">{role}</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-outline btn-primary">Edit</button>
                    </td>
                </tr>
                })}
               
            </tbody>
        </table>
        {/* <!-- Pagination --> */}

        {/* <div className="join my-4 mx-auto">
            <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                defaultChecked={true}
            />
            <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="2"
            />
            <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="3"
            />
            <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="4"
            />
        </div> */}
    </section>


}

export default UsersContainer;