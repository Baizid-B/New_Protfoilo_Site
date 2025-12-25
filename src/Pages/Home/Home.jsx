import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import contact_icon from "../../assets/Vector.svg"
import { Link, Links } from "react-router";


const Home = () => {
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
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center z-2">
                <p className="font-sans text-[#D5FF3F] text-xl">Hey There I'm</p>
                <h1 className="font-humane text-[#D5FF3F] text-[280px] leading-none -tracking-normal">Baizid</h1>
                <p className="font-sans text-[#D5FF3F] text-xl -mt-11.25">currently studying Computer science and Engineering</p>

                {/* icon */}
                <div className="flex flex-row gap-3 mt-5">
                    <div className="text-3xl text-[#D5FF3F]"><FaLinkedin /></div>
                    <div className="text-3xl text-[#D5FF3F]"><FaGithub /></div>
                </div>
            </div>

        </div>
        
        <div className="w-11/12 mx-auto">
            {/* Home_about_section */}
            <div className="bg-[#D5FF3F] px-24 py-12 rounded-xl space-y-5 my-20">

                <h1 className="uppercase font-humane text-5xl text-center text-[#161B22]">about</h1>
                <p className="text-[#161B22] capitalize font-sans">
                    Hi there! I'm Rahul, a third-year Computer Science student
                    at SRM Institute with a passion for crafting user-centric
                    experiences. I specialize in UI/UX design, front-end development,
                    and graphic design, with expertise in HTML, CSS, JavaScript, React,
                    Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration and
                    bring experience in agile scrum methodologies. Beyond coding, I enjoy
                    photography, graphic design, and exploring music. Let's connect and bring
                    your digital visions to life
                </p>
                
                {/* About page button */}
                <div className="flex justify-end pr-8">
                    <Link to='/about'>
                        <button className="btn rounded-lg border-none py-2.5 px-5 text-[#D5FF3F] bg-[#242938]">More...</button>
                    </Link>
                </div>

            </div>

            {/* Home_project_section */}
            <div className="flex flex-col gap-5 my-20">
                {/* project details page button */}
                <div className="flex flex-row items-center justify-between py-5 px-8 bg-[#161B22] rounded-xl">
                    <h1 className="text-5xl font-humane">Recent Projects</h1>
                    <button className="flex flex-row items-center gap-2 text-lg font-sans">See all <span className="text-white"><FaArrowRight /></span></button>
                </div>

                {/* prject show card */}
                <div className="grid grid-cols-3 gap-5">

                    {/* First_Card */}
                    <div className="bg-[#8B949E] p-5 rounded-2xl overflow-hidden">
                        <img src="" alt="" />

                        <h1>Heading</h1>

                        <p>
                            Developed to showcase my skills
                            in web development, my portfolio
                            website exemplifies proficiency in
                            technologies such as ReactJS, CSS, and Figma.
                        </p>

                        {/* More Images */}
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>

                    {/* Second_Card */}
                    <div className="bg-[#8B949E] p-5 rounded-2xl overflow-hidden">
                        <img src="" alt="" />

                        <h1>Heading</h1>

                        <p>
                            Developed to showcase my skills
                            in web development, my portfolio
                            website exemplifies proficiency in
                            technologies such as ReactJS, CSS, and Figma.
                        </p>

                        {/* More Images */}
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>

                    {/* Third_Card */}
                    <div className="bg-[#8B949E] p-5 rounded-2xl overflow-hidden">
                        <img src="" alt="" />

                        <h1>Heading</h1>

                        <p>
                            Developed to showcase my skills
                            in web development, my portfolio
                            website exemplifies proficiency in
                            technologies such as ReactJS, CSS, and Figma.
                        </p>

                        {/* More Images */}
                        <div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Home_contact_section */}
            <div className="bg-[#D5FF3F] flex flex-row justify-between items-top p-12 rounded-xl">
                <div className="">
                    <h1 className="font-humane text-black text-8xl">Get in Touch</h1>

                    <p className="w-96 capitalize text-black font-sans">
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
                        <Link to='https://github.com/Baizid-B' target="_blank"><FaGithub /></Link>
                        <Link to='https://www.linkedin.com/in/baizid-bostami-36962b292/' target="_blank"><FaLinkedin /></Link>
                        <Link to='https://www.facebook.com/baizidbr' target="_blank"><FaFacebook /></Link>
                        <Link to='https://www.instagram.com/baizid_bostami21/' target="_blank"><AiFillInstagram /></Link>
                    </div>

                    <button className="btn bg-transparent border-black border-2 rounded-xl text-lg font-neue tracking-wider">Contact Me <span><img className="w-5" src={contact_icon} alt="Contact icon" /></span></button>
                </div>
            </div>

        </div>
    </>
  );
};

export default Home;