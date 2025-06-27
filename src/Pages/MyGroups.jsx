import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const MyGroups = () => {
  const { user } = use(AuthContext);
  const allCreate = useLoaderData();
  const myGroups = allCreate.filter(create => create.email === user.email);
const [group , setGroup] = useState(myGroups)
  const handleDelete = (id)=>{

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://assignment-ten-server-sepia.vercel.app/hobby/${id}`, {
        method : 'DELETE'
    }).then(res => res.json()).then(data =>{
        // console.log(data)
        if (data) {
            Swal.fire({
      title: "Deleted!",
      text: "Your Group has been deleted.",
      icon: "success"
    
    });
    const remain = myGroups.filter(my => my._id !== id)
    setGroup(remain)
        }
    })
    
  }
});
    
  }
 return (
  <div className="my-5 w-full max-w-7xl mx-auto px-4">
    <h1 className="text-2xl font-semibold mb-4 text-center">
      {group?.length === 0 ? 'You have no groups yet.' : `My Groups: ${group.length}`}
    </h1>

    {group?.length === 0 ? (
      <div className="text-center my-10">
        <p className="text-lg text-gray-600 mb-4">
          You haven't created any groups yet.
        </p>
        <Link to="/createGroup" className="btn btn-primary text-white">
          Create a Group
        </Link>
      </div>
    ) : (
     <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
  <table className="table-auto w-full text-sm text-left text-gray-700">
    <thead className="bg-gray-100 text-gray-800 uppercase tracking-wider text-xs">
      <tr>
        <th className="px-6 py-4 border-b">Group Name</th>
        <th className="px-6 py-4 border-b">Hobby Category</th>
        <th className="px-6 py-4 border-b">Meeting Location</th>
        <th className="px-6 py-4 border-b text-center">Actions</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {group.map(grp => (
        <tr key={grp._id} className="hover:bg-gray-50 transition duration-150">
          <td className="px-6 py-4 flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-10 w-10">
                <img src={grp.imageURL} alt="Group Avatar" />
              </div>
            </div>
            <span className="font-medium">{grp.groupName || 'Unnamed'}</span>
          </td>
          <td className="px-6 py-4">{grp.hobbyCategory}</td>
          <td className="px-6 py-4">{grp.meetingLocation}</td>
          <td className="px-6 py-4 text-center">
            <div className="flex justify-center gap-2">
              <Link
                to={`updateGroup/${grp._id}`}
                className="btn btn-sm btn-outline btn-primary"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(grp._id)}
                className="btn btn-sm btn-outline btn-error"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    )}
  </div>
);

};

export default MyGroups;
