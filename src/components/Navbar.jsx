import { Link, NavLink } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {

  const links = <>
    <li><NavLink className={` px-4 py-2  font-semibold  border rounded-lg`} to='/'>Home</NavLink></li>
    <li><NavLink className={`px-4 py-2  font-semibold border rounded-lg`} to='/listedbooks'>Listed Books</NavLink></li>
    <li><NavLink className={`px-4 py-2  font-semibold border rounded-lg`} to='/pagestoRead'>Pages To Read</NavLink></li>
  </>

  return (
    <div className="flex shadow-lg p-2 items-center rounded-lg">
      <div className="navbar-start items-center md:justify-start justify-between flex w-full md:w-[50%]">
        <div className="dropdown">

          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
            {links}
          </ul>
        </div>

        <Link to={'/'} className=" text-4xl text-[#131313] font-bold">Book Vive</Link>
        <Link to={'/sign-in'} className="w-[40px] h-[40px] text-white font-semibold bg-[#59C6D2] rounded-full md:hidden flex justify-center items-center"><FaRegUserCircle size={25}/></Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-5 hidden md:flex">
        <Link to={'sign-in'} className=" px-4 py-2 text-white font-semibold bg-[#23BE0A] rounded-lg">Sign In</Link>
        <Link to={'login'} className=" px-4 py-2 text-white font-semibold bg-[#59C6D2] rounded-lg">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
