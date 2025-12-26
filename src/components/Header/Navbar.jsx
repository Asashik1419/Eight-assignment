import React from 'react';
import logo from '../../assets/logo.png'
import git from '../../assets/git.png'

const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Apps</a></li>
        <li><a>Installation</a></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className='flex items-center text-xl font-bold'>
      <a className="btn btn-ghost px-1 text-xl">
        <img className='w-10' src={logo} alt="" /> <h3>HERO.IO</h3>
      </a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href="https://github.com/Asashik1419">
    <button className='btn bg-gradient-to-r from-[#6A38D9] via-[#7E49E7]
     to-[#A178FF] text-white mt-4 rounded-sm md:px-5 mb-4 py-6'> <img src={git} alt="" /> Contribute</button>
    </a>
  </div>
</div>
    );
};

export default Navbar;