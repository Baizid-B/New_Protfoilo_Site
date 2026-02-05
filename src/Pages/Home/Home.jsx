import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import contact_icon from "../../assets/Vector.svg"
import { Link, useLoaderData } from "react-router";



const Home = () => {
  const projectData = useLoaderData()

  return (
    <>
        {/* Home_hero_section */}
        <div className="relative py-16">
            <div className="flex flex-col items-center justify-center gap-20">
                <Marquee direction="left" speed={25}>
                    <div className="mx-2">
                        <svg
                            width="100%"
                            height="150"
                            viewBox="0 0 2200 200"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            
                            <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="none"
                            stroke="rgba(189,226,58,0.8)"
                            strokeWidth="0.6"
                            fontSize="150"
                            fontWeight="900"
                            letterSpacing="6"
                            fontFamily="Neue, sans-serif"
                            transform="scale(1, 1.4)"
                            >
                            FRONT-END DEVELOPER
                            </text>
                        </svg>
                    </div>
                    <div className="mx-2">
                        <svg
                            width="100%"
                            height="150"
                            viewBox="0 0 2200 200"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="none"
                            stroke="rgba(189,226,58,0.8)"
                            strokeWidth="0.6"
                            fontSize="150"
                            fontWeight="900"
                            letterSpacing="6"
                            fontFamily="Neue, sans-serif"
                            transform="scale(1, 1.4)"
                            >
                            FRONT-END DEVELOPER
                            </text>
                        </svg>
                    </div>
                </Marquee>

                <Marquee direction="right" speed={25}>
                    <div className="mx-2">
                        <svg
                            width="100%"
                            height="150"
                            viewBox="0 0 2200 200"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="none"
                            stroke="rgba(189,226,58,0.8)"
                            strokeWidth="0.6"
                            fontSize="150"
                            fontWeight="900"
                            letterSpacing="6"
                            fontFamily="Neue, sans-serif"
                            transform="scale(1, 1.4)"
                            >
                            BACK-END DEVELOPER
                            </text>
                        </svg>
                    </div>
                    <div className="mx-2">
                        <svg
                            width="100%"
                            height="150"
                            viewBox="0 0 2200 200"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="none"
                            stroke="rgba(189,226,58,0.8)"
                            strokeWidth="0.6"
                            fontSize="150"
                            fontWeight="900"
                            letterSpacing="6"
                            fontFamily="Neue, sans-serif"
                            transform="scale(1, 1.4)"
                            >
                            BACK-END DEVELOPER
                            </text>
                        </svg>
                    </div>
                </Marquee>
            </div>
            
            <div className="absolute inset-0 flex flex-col justify-center items-center z-2">
                <p className="font-sans text-[#D5FF3F] text-xl">Hey There I'm</p>
                <h1 className="font-humane text-[#D5FF3F] text-[200px] md:text-[280px] leading-none -tracking-normal">Baizid</h1>
                <p className="font-sans text-[#D5FF3F] text-center text-xl -mt-8 md:-mt-11.25">currently studying Computer science and Engineering</p>

                {/* icon */}
                <div className="flex flex-row gap-3 mt-5">
                    <Link to='https://www.linkedin.com/in/baizid-bostami-36962b292/' className="text-3xl text-[#D5FF3F] hover:text-white transition-all duration-300 ease-in-out"><FaLinkedin /></Link>
                    <Link to='https://github.com/Baizid-B' className="text-3xl text-[#D5FF3F] hover:text-white transition-all duration-300 ease-in-out"><FaGithub /></Link>
                </div>
            </div>

        </div>
        
        <div className="w-11/12 mx-auto">
            {/* Home_about_section */}
            <div className="bg-[#D5FF3F] px-5 md:px-14 lg:px-24 py-5 md:py-8 lg:py-12 rounded-xl space-y-5 my-20">

                <h1 className="uppercase font-humane text-5xl text-center text-[#161B22]">about</h1>
                <p className="text-[#161B22] text-left capitalize font-sans">
                    I’m an aspiring front-end developer passionate about building responsive and user-friendly web interfaces. Although I don’t have professional experience yet, I’ve been actively learning and practicing key technologies, including HTML, CSS, JavaScript, Tailwind CSS, React.js, MongoDB, Express.js, Node.js, and lastly, Next.js.I enjoy turning design ideas into functional and visually appealing websites. Through personal projects, online tutorials,and hands-on practice, I’ve developed a good understanding of modern web development concepts such as component-based design, responsive layouts, and interactive UI behavior. I’m highly motivated to grow, learn from real-world challenges, and contribute to a team where I can apply and expand my skills in a practical environment. Let me know if you'd like to include details about personal projects or tools you’re familiar with (like GitHub ).
                </p>
                
                {/* About page button */}
                <div className="flex justify-start md:justify-end pr-8">
                    <Link to='/about'>
                        <button className="btn rounded-lg border-none py-2.5 px-5 text-[#D5FF3F] bg-[#242938]">More...</button>
                    </Link>
                </div>

            </div>

            {/* Home_project_section */}
            <div className="flex flex-col gap-5 my-20">
                {/* project details page button */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-5 px-8 bg-[#161B22] rounded-xl">
                    <h1 className="text-5xl font-humane">Recent Projects</h1>
                    <Link to="/projects" className="flex flex-row items-center gap-2 text-lg font-sans">See all <span className="text-white"><FaArrowRight /></span></Link>
                </div>

                {/* prject show card */}
                <div>

                   
                   { 
                       projectData && projectData.length > 0 ? (<div className="grid grid-cols-1 md:grid-cols-3 gap-5">{projectData.slice(0, 3).map( users => (
                                <div className="bg-[#8B949E] p-2.5 md:p-5 rounded-2xl overflow-hidden">
                                <div className="image-wrap">
                                    <img className="rounded-xl" src={users.image} alt={users.name} />
                                </div>

                                <h1 className="uppercase font-bold text-2xl font-sans my-2">{users.name}</h1>

                                <p className="capitalize font-sans">{users.shortDetail}</p>

                                {/* More Images */}
                                <div className="flex flex-row gap-5 overflow-hidden my-5">
                                    {
                                        users?.multiple?.map(img => (
                                            <img className="w-16 h-16 object-cover rounded-2xl" key={img._id} src={img} alt={img.name} />
                                        ))
                                    }
                                </div>

                                <Link to={`/projects/${users._id}`} className="btn bg-[#242938] text-white rounded-lg py-2 px-5">View Details</Link>
                            </div>
                        ))} </div>) : (<p className="flex justify-center items-center p-5 text-xl font-semibold font-sans w-full">
                            No data avabaliable
                        </p>)
                    }

                </div>
            </div>

            {/* Home_contact_section */}
            <div className="bg-[#D5FF3F] flex flex-col gap-12 md:gap-0 md:flex-row justify-between items-top p-5 md:p-12 rounded-xl">
                <div className="">
                    <h1 className="font-humane text-black text-8xl">Get in Touch</h1>

                    <p className="w-auto capitalize text-black font-sans">
                        If you are interested in my
                        work or want to provide feedback
                        about this website, I am open to
                        exchanging ideas.
                    </p>

                </div>

                <div className="flex flex-col gap-6">
                    <p className="font-neue text-black text-3xl">Follow me on</p>
                    
                    {/* contact_icon */}
                    <div className="flex flex-row gap-5 text-black text-3xl">
                        <Link className="hover:text-white transition-all duration-300 ease-in-out" to='https://github.com/Baizid-B' target="_blank"><FaGithub /></Link>
                        <Link className="hover:text-white transition-all duration-300 ease-in-out" to='https://www.linkedin.com/in/baizid-bostami-36962b292/' target="_blank"><FaLinkedin /></Link>
                        <Link className="hover:text-white transition-all duration-300 ease-in-out" to='https://www.facebook.com/baizidbr' target="_blank"><FaFacebook /></Link>
                        <Link className="hover:text-white transition-all duration-300 ease-in-out" to='https://www.instagram.com/baizid_bostami21/' target="_blank"><AiFillInstagram /></Link>
                    </div>

                    <Link to="/contact" className="btn bg-transparent border-black border-2 rounded-xl text-lg font-neue tracking-wider">Contact Me <span><img className="w-5" src={contact_icon} alt="Contact icon" /></span></Link>
                </div>
            </div>

        </div>
    </>
  );
};

export default Home;