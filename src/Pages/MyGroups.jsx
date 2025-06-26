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
    <div className="my-5 w-full max-w-7xl mx-auto px-4 ">
      <h1 className="text-2xl font-semibold mb-4">My Groups: {group?.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full min-w-[600px]">
          <thead className="bg-base-200">
            <tr>
              <th>Group Name</th>
              <th>Hobby Category</th>
              <th>Meeting Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {group?.map(grp => (
              <tr key={grp._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={grp.imageURL} alt="Group Avatar" />
                      </div>
                    </div>
                  
                  </div>
                </td>
                <td>
                 {grp.hobbyCategory}
                </td>
                <td>{grp.meetingLocation}</td>
                <td>
                 <div className="join join-vertical">
                      <Link to={`updateGroup/${grp._id}`} className="btn join-item">Update</Link>
                      <button onClick={()=>handleDelete(grp._id)} className="btn join-item">Delete</button>
                     
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
