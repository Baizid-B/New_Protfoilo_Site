import logo from '../../assets/logo/Portfolio_logo.png'

const Footer = () => {
    return (
        <>
            {/* Home_contact_section */}
            <div className="w-11/12 mx-auto bg-[#161B22] flex flex-row justify-between items-top p-8 rounded-xl mt-5">
                <div>
                    <img className='w-40' src={logo} alt="Baizid Bostami Logo Image" />  
                </div>

                <div className="flex flex-row justify-end ">
                    <h1 className="font-humane text-white text-8xl w-2/3">Turning <span className='text-[#D5FF3F]'>Ideas</span> into <span className='text-[#D5FF3F]'>Interactive</span> Experiences</h1>
                </div>
            </div>
        </>
    );
};

export default Footer;