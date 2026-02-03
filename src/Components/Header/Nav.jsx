import { NavLink } from "react-router";

const Nav = () => {

    const link = <>
        <NavLink className={({isActive}) => `m-3 text-lg ${isActive ? "text-[#D5FF3F]" : "text-white"}`} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => `m-3 text-lg ${isActive ? "text-[#D5FF3F]" : "text-white "}`} to='/About'>About</NavLink>
        <NavLink className={({isActive}) => `m-3 text-lg ${isActive ? "text-[#D5FF3F] hidden md:flex" : "text-white hidden md:flex"}`} to='/Projects'>Projects</NavLink>
        <NavLink className={({isActive}) => `m-3 text-lg ${isActive ? "text-[#D5FF3F] hidden md:flex" : "text-white hidden md:flex"}`} to='/Contact'>Contact</NavLink>
        <NavLink className={({isActive}) => `m-3 text-lg ${isActive ? "text-[#D5FF3F]" : "text-white"}`} to='/add_project'>Add Project</NavLink>
    </>
    
    return (
        <div className="flex flex-col justify-center items-center">
                <ul className="menu menu-horizontal md:px-1 font-sans">
                    {link}
                </ul>
        </div>
    );
};

export default Nav;
