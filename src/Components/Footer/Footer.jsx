import { Link } from 'react-router';
import logo from '../../assets/logo/Portfolio_logo.png'

const Footer = () => {
    return (
        <>
            {/* Home_contact_section */}
            <div className="w-11/12 mx-auto bg-[#090909] flex flex-col md:flex-row justify-between items-top p-4 md:p-8 rounded-xl mt-5 gap-5 md:gap-0">
                <Link to='/'>
                    <img className='w-30 md:w-40' src={logo} alt="Baizid Bostami Logo Image" />  
                </Link>

                <div className="flex flex-row justify-end ">
                    <h1 className="font-humane text-white text-6xl md:text-8xl w-auto md:w-2/3">Turning <span className='text-[#D5FF3F]'>Ideas</span> into <span className='text-[#D5FF3F]'>Interactive</span> Experiences</h1>
                </div>
            </div>
        </>
    );
};

export default Footer;