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
            <div className="flex flex-col gap-6 my-20">
                {/* Header Section - Clean and Modern */}
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 px-6 bg-[#161B22] rounded-xl border border-gray-800 hover:border-[#D5FF3F]/30 transition-colors duration-300">
                    <h1 className="text-4xl md:text-5xl font-humane text-[#D5FF3F]">
                    Recent Projects
                    </h1>
                    <Link 
                    to="/projects" 
                    className="flex items-center gap-2 text-gray-300 hover:text-[#D5FF3F] transition-colors duration-300 font-sans text-lg group"
                    >
                    <span>See all</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                        <FaArrowRight />
                    </span>
                    </Link>
                </div>

                {/* Project Cards Grid */}
                <div>
                    {projectData && projectData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectData.slice(0, 3).map((users) => (
                        <div 
                            key={users._id} 
                            className="group bg-[#161B22] p-4 rounded-2xl border border-gray-800 hover:border-[#D5FF3F]/40 hover:shadow-[0_8px_30px_rgba(213,255,63,0.1)] transition-all duration-300"
                        >
                            {/* Image Container with Hover Effect */}
                            <div className="relative overflow-hidden rounded-xl mb-4">
                            <img 
                                className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" 
                                src={users.image} 
                                alt={users.name} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#161B22] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                            </div>

                            {/* Title */}
                            <h1 className="uppercase font-bold text-xl text-[#D5FF3F] font-sans mb-1">
                            {users.name}
                            </h1>

                            {/* Description */}
                            <p className="capitalize font-sans text-gray-300 text-sm mb-3">
                            {users.shortDetail}
                            </p>

                            {/* Screenshots (Optional) */}
                            {users?.multiple && users.multiple.length > 0 && (
                            <div className="flex flex-row gap-2 overflow-hidden mb-4">
                                {users.multiple.slice(0, 3).map((img) => (
                                <img 
                                    className="w-14 h-14 object-cover rounded-lg border border-gray-700 group-hover:border-[#D5FF3F]/20 transition-colors duration-300" 
                                    key={img._id} 
                                    src={img} 
                                    alt="screenshot" 
                                />
                                ))}
                                {users.multiple.length > 3 && (
                                <div className="w-14 h-14 rounded-lg bg-[#D5FF3F] text-[#161B22] flex items-center justify-center font-bold text-sm">
                                    +{users.multiple.length - 3}
                                </div>
                                )}
                            </div>
                            )}

                            {/* View Details Button */}
                            <Link 
                            to={`/projects/${users._id}`} 
                            className="block w-full bg-[#D5FF3F] text-[#161B22] text-center font-semibold py-2 rounded-lg hover:bg-white hover:scale-[1.02] transition-all duration-300"
                            >
                            View Details
                            </Link>
                        </div>
                        ))}
                    </div>
                    ) : (
                    <div className="bg-[#161B22] p-10 rounded-xl border border-gray-800 text-center">
                        <p className="text-gray-400 font-sans text-lg">
                        No projects available yet. <span className="text-[#D5FF3F]">Stay tuned!</span>
                        </p>
                    </div>
                    )}
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


