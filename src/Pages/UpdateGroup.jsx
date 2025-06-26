import React from 'react';
import { formatISO, addDays } from 'date-fns';
import { useLoaderData } from 'react-router';
// import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const UpdateGroup = () => {
    // const {user} = use(AuthContext)
    const groupData = useLoaderData()
    const handleUpdate =e=>{
		e.preventDefault()
		const form = e.target
        const formData = new FormData(form)
        const startDate = new Date();
        const fullData = Object.fromEntries(formData.entries())
        fullData.startDate = formatISO(startDate);
                fullData.countdownEnd = formatISO(addDays(startDate, 1));
        // console.log(fullData)

        

        fetch(`https://assignment-ten-server-sepia.vercel.app/hobby/${groupData?._id}`, {
            method : 'PUT',
                 headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(fullData)
        }).then(res => res.json()).then(data =>{
            if (data) {
                 Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Group updated successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    return (
        <div>
          
         <section className="p-6 text-gray-900">
            <h1 className="text-3xl text-center font-semibold mb-4">Update : {groupData?.groupname}</h1>
	<form onSubmit={handleUpdate} className="container flex flex-col mx-auto space-y-12">
		<div className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Group name</label>
					<input defaultValue={groupData?.groupname}  name="groupname" type="text" placeholder="Group name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label   className="text-sm">Hobby Category</label><br />
                   <select name="hobbyCategory" defaultValue="Pick a Hobby Category" className="select w-full"> 
                    			     <option >Drawing & Painting</option> 
                                     <option>Photography</option> 
                                     <option>Video Gaming</option> 
                                     <option>Running</option> 
                                     <option>Cooking</option> 
                                     <option>Reading</option> 
                                     <option>Cooking</option> 
                                     <option>Fishing</option></select>
				</div>

               <div className="col-span-full sm:col-span-2">
	<label className="text-sm">Start Date</label>
	<input defaultValue={groupData?.startDate} name="startDate" type="date" className="w-full rounded-md p-2 bg-white border-gray-300" />
</div>

				<div className="col-span-full">
					<label  className="text-sm">Description</label>
					<input defaultValue={groupData?.description} name="description" type="text" placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Meeting Location</label>
					<input defaultValue={groupData?.meetingLocation} name="meetingLocation" type="text" placeholder="Meeting Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Max Members</label>
					<input defaultValue={groupData?.maxMembers} name="maxMembers" type="text" placeholder="Max Members" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Image URL</label>
					<input defaultValue={groupData?.imageURL} name="imageURL" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

			</div>
		</div>

		<div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-200">


			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				 <div className="col-span-full sm:col-span-3">
					<label className="text-sm">Name</label>
					<input defaultValue={groupData?.name} name="name" type="name"  placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>
				 <div className="col-span-full sm:col-span-3">
					<label className="text-sm">Email</label>
					<input defaultValue={groupData?.email} name="email" type="email"  placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>
				
				
			</div>
		</div>
        <input type="submit" className='btn w-full btn-primary text-white' value="Update" />
	</form>
</section> 
        </div>
    );
};

export default UpdateGroup;