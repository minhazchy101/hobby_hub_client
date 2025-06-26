import React, { use } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {

	
	const {register , setUser , profile} = use(AuthContext)
	const navigate = useNavigate()

	const handleRegister = e =>{
		const regEx = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
		e.preventDefault()
		const form = e.target;
		const email = form.email.value
		const password = form.password.value
		const name = form.name.value
		const photo = form.photoURL.value
		const usersData = {name , email , photo}
		
if (regEx.test(password) === false) {
         		Swal.fire({
         	  icon: "error",
         	  title: "Error",
         	  text: "Password must be at least 6 characters long and include both uppercase and lowercase letters.",
         	});
        
        return;
    }

register(email , password).then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
	profile({displayName : name , photoURL : photo}).then(()=>{

		setUser({...user , displayName : name , photoURL : photo})
	}).catch(error =>{
		// console.log(error)
		Swal.fire({
  icon: {error},
  title: "Oops...",
  text: "Something went wrong!",

});
		setUser(user)
	})
	

		// send data to server 

		fetch('https://assignment-ten-server-sepia.vercel.app/users' , {
			method : 'POST',
			headers : {
				 "Content-Type": "application/json",
			},
			body : JSON.stringify(usersData)
		}).then(res =>res.json()).then(data=>{
			// console.log(data)
			if (data.insertedId) {
				Swal.fire({
			  title: "You register an Account successfully! ",
			  icon: "success",
			  draggable: true
		});
		navigate('/')
			}
		})




  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
	Swal.fire({
  icon: "error",
  title: "Error",
  text: errorCode,
});

  });
	}

	

    return (
        <>
          <div className="w-full mx-auto h-lv max-w-md p-8 space-y-3 bg-gray-200 text-gray-800">
			
	<h1 className="text-2xl font-bold text-center">Register</h1>
	<form onSubmit={handleRegister} className="space-y-6">
		
        <div className="space-y-1 text-sm">
			<label htmlFor="name" className="block text-gray-600">Name</label>
			<input required type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>

        <div className="space-y-1 text-sm">
			<label htmlFor="email" className="block text-gray-600">Email </label>
			<input required type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>

        <div className="space-y-1 text-sm">
			<label htmlFor="photoURL" className="block text-gray-600">photoURL </label>
			<input required type="text" name="photoURL" id="photoURL" placeholder="photoURL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>


		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600">Password</label>
			<input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
			
		</div>

		<input type="submit" value="Register" className="block btn btn-primary w-full p-3 text-center rounded-sm text-gray-50 "/>
		{/* <button className="block btn btn-primary w-full p-3 text-center rounded-sm text-gray-50 ">Register</button> */}
	</form>


	<p className="text-xs  text-center sm:px-6 text-gray-600">Already have an account?
		<Link rel="noopener noreferrer" to='/login' className="underline text-md text-violet-600">Log in</Link>
	</p>
</div>  
        </>
    );
};

export default Register;