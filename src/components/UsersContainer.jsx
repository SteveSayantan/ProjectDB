const users = [
    {
        id: 1,
        email: "test@gmail.com",
        university: "ABC university",
        role: "Admin",
    },
    {
        id: 2,
        email: "test@gmail.com",
        university: "Heritage Institute of Technology",
        role: "Admin",
    },
    {
        id: 3,
        email: "sayantan.manna.23@aot.edu.in",
        university: "Academy of Technology",
        role: "Admin",
    },
];

const headers=["email","university","roll","actions"]

const UsersContainer = () => {
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
                    const {id,email,university,role}=user;
                    return <tr className="hover" key={id}>
                    <th className="whitespace-nowrap">{email}</th>
                    <td className="whitespace-nowrap">{university}</td>
                    <td>{role}</td>
                    <td>
                        <button type="button" className="btn btn-sm btn-outline btn-primary">Edit</button>
                    </td>
                </tr>
                })}
               
            </tbody>
        </table>
        {/* <!-- Pagination --> */}
        <div className="join my-4 mx-auto">
            <input
                className="join-item btn btn-square"
                type="radio"
                name="options"
                aria-label="1"
                checked="checked"
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
        </div>
    </section>


}

export default UsersContainer;