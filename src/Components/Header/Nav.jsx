import { NavLink } from "react-router";

const Nav = () => {

    const link = <>
        <NavLink className={({isActive}) => `m-2 ${isActive ? "text-[#D5FF3F]" : "text-white"}`} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => `m-2 ${isActive ? "text-[#D5FF3F]" : "text-white"}`} to='/About'>About</NavLink>
        <NavLink className={({isActive}) => `m-2 ${isActive ? "text-[#D5FF3F]" : "text-white"}`} to='/Project'>Project</NavLink>
        <NavLink className={({isActive}) => `m-2 ${isActive ? "text-[#D5FF3F]" : "text-white"}`} to='/Contact'>Contact</NavLink>
        <NavLink className={({isActive}) => `m-2 ${isActive ? "text-[#D5FF3F]" : "text-white"}`} to='/add_project'>Add Project</NavLink>
    </>
    
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-sans">
                    {link}
                </ul>
            </div>
        </div>
    );
};

export default Nav;