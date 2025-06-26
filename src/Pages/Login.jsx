import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

	const location = useLocation()
	const navigate = useNavigate()
	const {login , google} = use(AuthContext)

	const handleLogin = e =>{
		e.preventDefault()
		const form = e.target;
		const email = form.email.value
		const password = form.password.value
		// console.log(email , password)

		login(email , password).then(result =>{
			const user = result.user
			// console.log(user)
			if (user) {
				
				Swal.fire({
					  title: "Log-in successful!",
					  icon: "success",
					  draggable: true
	
				});
				navigate(`${location.state ? location.state : '/'}`)
				// console.log(location.state)
			}
		}).catch(error =>{
			if (error) {
				
				Swal.fire({
					  icon: "error",
					  title: "Error",
					  text: error.code,
					 
					});
			}
			
		})
	}

	const provider = new GoogleAuthProvider();
	const handleGoogle =()=>{
		google(provider).then((result) => {
   
    
    const user = result.user;
	if (user) {
				
				Swal.fire({
					  title: "Log-in with Google successful!",
					  icon: "success",
					  draggable: true
	
				});
				navigate(`${location.state ? location.state : '/'}`)
				// console.log(location.state)
			}
  
  }).catch((error) => {
   if (error) {
				
				Swal.fire({
					  icon: "error",
					  title: "Error",
					  text: error.code,
					 
					});
			}
  });
	}

    return (
        <>
         <div className="w-full mx-auto h-lv max-w-md p-8 space-y-3 bg-gray-200 text-gray-800">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleLogin} className="space-y-6">
		 <div className="space-y-1 text-sm">
			<label htmlFor="email" className="block text-gray-600">Email </label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-600">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
			<div className="flex justify-end text-xs text-gray-600">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		{/* <button className="block w-full p-3 text-center rounded-sm text-gray-50 bg-violet-600">Sign in</button> */}
		<input type="submit" value="Login" className="block btn btn-primary w-full p-3 text-center rounded-sm text-gray-50 "/>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
		<p className="px-3 text-sm text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
	</div>
	<div className="flex flex-col justify-center space-y-4">
		
{/* Google */}
<button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
	</div>
	<p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account?
		<Link rel="noopener noreferrer" to='/register' className="underline text-gray-800">Register</Link>
	</p>
</div> 
        </>
    );
};

export default Login;