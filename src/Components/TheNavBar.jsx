import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import Swal from 'sweetalert2';
import { CgProfile } from 'react-icons/cg';



const TheNavBar = () => {

  const {user , logOut , } = use(AuthContext)
 

  const handleLogOut =()=>{

    Swal.fire({
  title: "Are you sure to Log-out?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Log-out!"
}).then((result) => {
  if (result.isConfirmed) {
    
     logOut().then(() => {
  // Sign-out successful.
  Swal.fire({
  title: "Log-out successful.",
  icon: "success",
  draggable: true
});
}).catch((error) => {
  Swal.fire({
  icon: error,
  title: "Oops...",
  text: "Something went wrong!",
  
});
});
  }
});
  
  }

  const link =  <>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/'>Home</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/groups'>All Groups</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/'>About us</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/'>Contact</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/'>Support </NavLink></li>

  {
    user && <>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/createGroup'>Create Groups</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/myGroups'>My Groups</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive ? 'text-primary font-bold' : 'font-sem')} to='/dashBoard'>Dash Board</NavLink></li>
    
    </>
  }

    </>

    return (
        <div className='bg-secondary shadow-lg sticky top-0 z-50'>
            <div className="navbar w-full max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {link}
      </ul>
    </div>
    <Link to='/' className=" text-xl md:text-3xl font-bold text-primary">HobbyHub </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>
  </div>
  <div className="navbar-end">
    
      {user ? 
         <div className="flex">
    <div className="relative flex flex-col group">
      <Link to='/profile' className="btn btn-ghost btn-circle avatar">
        <div className=" rounded-full">
          {
            user.photoURL ? <img src={user.photoURL} alt="" /> : <CgProfile size={25}/>
          }
          
        
        </div>
      </Link>
      <div className="text-sm font-semibold mt-6 opacity-0 bg-base-100 rounded-box shadow p-2 w-32 text-center group-hover:opacity-100 transition-opacity duration-200 absolute right-2.5">
       {user.displayName}
      </div>
    </div>

<Link onClick={handleLogOut} className="btn mx-2 btn-primary text-white hover:bg-[#D85F25]">LogOut</Link>
  </div>
  : <> <CgProfile size={40}/>
   <Link to='/login' className="btn btn-primary mx-2 text-white hover:bg-[#D85F25]">Login</Link>
        {/* <Link to='/register' className="btn btn-primary text-white hover:bg-[#D85F25]">Register</Link> */}
 
  </> 
  
  }



    
  </div>
</div>
        </div>
    );
};

export default TheNavBar;