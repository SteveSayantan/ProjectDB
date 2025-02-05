import UserDetails from "../components/UserDetails";

const Users = () => {
    return (
        <div class="min-h-screen flex flex-col">
            {/* <!-- Header --> */}
            <header class=" shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-white md:text-3xl">
                        User Management
                    </h1>
                    <button class="btn btn-sm btn-primary" id="add-user-btn">
                        + Add New User
                    </button>
                </div>
            </header>

            {/* <!-- Search and Filter --> */}
            <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div class="flex flex-wrap gap-4">
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        class="input input-bordered w-full md:w-1/3"
                    />
                    <select class="select select-bordered w-full md:w-1/3">
                        <option disabled selected>
                            Filter by Permission
                        </option>
                        <option>User</option>
                        <option>Admin</option>
                    </select>
                    <button class="btn btn-primary">Search</button>
                </div>
            </div>

            {/* <!-- User Table --> */}
            <main class="flex-grow">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="bg-gray-900 shadow overflow-x-scroll sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-950">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                        Email
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                        University
                                    </th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                        Role
                                    </th>
                                    <th class="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-gray-900 divide-y divide-gray-200">
                                {/* <!-- Example Row --> */}
                                <UserDetails email={"test@gmail.com"} university={"ABC university"} role={"Admin"}/>
                                
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- Pagination --> */}
                    <div class="join mt-4">
                        <input
                            class="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label="1"
                            checked="checked"
                        />
                        <input
                            class="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label="2"
                        />
                        <input
                            class="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label="3"
                        />
                        <input
                            class="join-item btn btn-square"
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
