import React from 'react';
import { Link } from 'react-router';

const GroupTable = ({groups}) => {
  return (
   <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 mt-6">
      <table className="table-auto w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-800 uppercase tracking-wider text-xs">
          <tr>
            <th className="px-6 py-4 border-b">Group Name</th>
            <th className="px-6 py-4 border-b">Category</th>
            <th className="px-6 py-4 border-b">Meeting Location</th>
            <th className="px-6 py-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {groups.map(group => (
            <tr key={group._id} className="hover:bg-gray-50 transition duration-150">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-10 w-10">
                    <img src={group.imageURL} alt="Group Avatar" />
                  </div>
                </div>
                <span className="font-medium">{group.groupname}</span>
              </td>
              <td className="px-6 py-4">{group.hobbyCategory}</td>
              <td className="px-6 py-4">{group.meetingLocation}</td>
              <td className="px-6 py-4 text-center">
                <Link
                  to={`/group/${group._id}`}
                  className="btn btn-sm btn-outline btn-primary"
                >
                  See Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupTable;