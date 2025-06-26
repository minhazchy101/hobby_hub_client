import React, { use } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { formatISO, addDays } from 'date-fns'; 
import { AuthContext } from '../Context/AuthProvider';

const CreateGroup = () => {
	const {user} = use(AuthContext)
	const navigate = useNavigate()
	const handleCreate =e=>{
		e.preventDefault()
		const form = e.target
		const formData = new FormData(form)

		const startDate = new Date(); 
		const createData = Object.fromEntries(formData.entries())

		createData.startDate = formatISO(startDate);
		createData.countdownEnd = formatISO(addDays(startDate, 1));
		// console.log(createData)


		fetch('https://assignment-ten-server-sepia.vercel.app/hobby' , {
			method : 'POST',
			headers : {
				 "Content-Type": "application/json",
			},
			body : JSON.stringify(createData)
		}).then(res => res.json()).then(data =>{
			if (data.insertedId) {
							Swal.fire({
						  title: "You Create a Group successfully! ",
						  icon: "success",
						  draggable: true
					});
					navigate('/')
						}
			
		})

		
		
	}
    return (
        <>

         <section className="p-6 text-gray-900">
            <h1 className="text-4xl text-center font-semibold mb-4">Create a Group</h1>

	<form onSubmit={handleCreate} className="container flex flex-col mx-auto space-y-12">
		<div className="grid grid-cols-3 gap-6 p-6 rounded-md shadow-sm bg-gray-200">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Group name</label>
					<input required   name="groupname" type="text" placeholder="Group name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
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
	<input required name="startDate" type="date" className="w-full rounded-md p-2 bg-white border-gray-300" />
</div>

				<div className="col-span-full">
					<label  className="text-sm">Description</label>
					<input required name="description" type="text" placeholder="Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Meeting Location</label>
					<input required name="meetingLocation" type="text" placeholder="Meeting Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Max Members</label>
					<input required name="maxMembers" type="text" placeholder="Max Members" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Image URL</label>
					<input required name="imageURL" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>

			</div>
		</div>

		<div className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-200">


			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				 <div className="col-span-full sm:col-span-3">
					<label className="text-sm">Name</label>
					<input name="name" type="name" value={user?.displayName} placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>
				 <div className="col-span-full sm:col-span-3">
					<label className="text-sm">Email</label>
					<input name="email" type="email" value={user?.email} placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 bg-white focus ring-violet-600 border-gray-300" />
				</div>
				
				
			</div>
		</div>
        <input type="submit" className='btn w-full btn-primary text-white' value="Create" />
	</form>
</section> 
          
        </>
    );
};

export default CreateGroup;