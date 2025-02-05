import React from "react";

const UserDetails = ({email, university, role}) => {
    return (
        <tr>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {email}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {university}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {role}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button class="btn btn-sm btn-outline btn-primary">Edit</button>
            </td>
        </tr>
    );
};

export default UserDetails;
