import React from 'react';
import { Link } from 'react-router';

const TheFooter = () => {
    return (
      <>
         <footer className="footer footer-horizontal footer-center bg-secondary text-base-content rounded p-10">
          <nav>
      <Link to='/' className=" text-xl md:text-3xl font-bold text-primary">HobbyHub </Link>
  
  </nav>
  <nav className="grid grid-flow-col gap-4">
<Link to='/' className="link link-hover hover:text-primary">Home</Link>
<Link to='/aboutUs' className="link link-hover hover:text-primary">About us</Link>
{/* <Link to='/contact' className="link link-hover hover:text-primary">Contact</Link>
     */}
  </nav>
  
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className=" font-bold text-primary">HobbyHub</span> Ltd</p>
  </aside>
</footer>
        </>
    );
};

export default TheFooter;