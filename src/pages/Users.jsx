import UserDetails from "../components/UserDetails";

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
        university: "ABC university",
        role: "Admin",
    },
    {
        id: 3,
        email: "test@gmail.com",
        university: "ABC university",
        role: "Admin",
    },
];

const Users = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* <!-- Header --> */}
            <header className=" shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-300 md:text-3xl">
                        User Management
                    </h1>
                    <button
                        className="btn btn-sm btn-primary"
                        id="add-user-btn"
                    >
                        + Add New User
                    </button>
                </div>
            </header>

            {/* <!-- Search and Filter --> */}
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        className="input input-bordered w-full md:w-5/12"
                    />
                    <select className="select select-bordered w-full md:w-1/3">
                        <option disabled selected>
                            Filter by Permission
                        </option>
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                    <button className="btn btn-primary">Search</button>
                </div>
            </div>

            {/* <!-- User Table --> */}
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
                    <div className="bg-gray-900 shadow overflow-x-scroll sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-950">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                        University
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                        Role
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-900 divide-y divide-gray-400">
                                {/* <!-- Example Row --> */}
                                {users.map((user) => (
                                    <UserDetails key={user?.id} user={user} />
                                ))}
                            </tbody>
                        </table>
                    </div>

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
                </div>
            </main>
        </div>
    );
};

export default Users;
