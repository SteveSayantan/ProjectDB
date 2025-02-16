import React from "react";

const UserDetails = ({user}) => {
    const {email, university, role} = user;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {university}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                {role}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button className="btn btn-sm btn-outline btn-primary">Edit</button>
            </td>
        </tr>
    );
};

export default UserDetails;
