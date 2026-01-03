/* eslint-disable no-irregular-whitespace */
import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import About_img from "../../assets/about_image/baizid.jpg"
import { FaFacebook, FaFile, FaLinkedin } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


const About = () => {

    return (
        <div className="w-11/12 mx-auto space-y-5">
            <div className="bg-[#161B22] rounded-lg">
                <h1 className="font-humane text-6xl p-5 flex flex-row justify-center">About</h1>
            </div>

            <div className="bg-[#161B22] rounded-lg p-11 flex flex-row">
                {/* image */}
                <div className="w-[40%] overflow-hidden bg-amber-300 rounded-2xl">
                    <img src={About_img} alt="About_image" />
                </div>

                {/* about_details */}
                <div className="w-[58%] px-5 flex flex-col justify-between items-stretch">
                    <p className="leading-relaxed text-lg">
                        I’m an aspiring front-end developer passionate about building responsive and user-friendly web interfaces. Although I don’t have professional experience yet, I’ve been actively learning and practicing key technologies, including HTML, CSS, JavaScript, Tailwind CSS, React.js, MongoDB, Express.js, Node.js, and lastly, Next.js.I enjoy turning design ideas into functional and visually appealing websites. Through personal projects, online tutorials,and hands-on practice, I’ve developed a good understanding of modern web development concepts such as component-based design, responsive layouts, and interactive UI behavior. I’m highly motivated to grow, learn from real-world challenges, and contribute to a team where I can apply and expand my skills in a practical environment. Let me know if you'd like to include details about personal projects or tools you’re familiar with (like GitHub ).
                    </p>
                    
                    <div className="flex flex-row">
                        <Link to='' className="flex flex-row items-center gap-2 p-2 rounded-lg bg-transparent border-[#D5FF3F] border-2 text-[#D5FF3F] font-semibold">
                            <span className="text-[#D5FF3F]"><FaFile /></span> Download Resume
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center overflow-hidden gap-6">
                {/* skills */}
                <div className="w-[67%] py-6 flex flex-row bg-[#161B22] rounded-lg">
                    <Marquee>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><FaHtml5 /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><SiCss3 /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><FaJsSquare /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><RiTailwindCssFill /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><RiReactjsFill /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><SiFirebase /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><SiMongodb /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><FaNodeJs /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><SiExpress /></div>
                        <div className="text-6xl px-8 text-[#D5FF3F]"><FaGithub /></div>
                    </Marquee>
                </div>

                {/* Social icon */}
                <div className="w-2/6 py-9 flex flex-row gap-5 justify-center bg-[#161B22] text-4xl rounded-lg">
                    <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://github.com/Baizid-B' target="_blank"><FaGithub /></Link>
                    <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://www.linkedin.com/in/baizid-bostami-36962b292/' target="_blank"><FaLinkedin /></Link>
                    <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://www.facebook.com/baizidbr' target="_blank"><FaFacebook /></Link>
                    <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://www.instagram.com/baizid_bostami21/' target="_blank"><AiFillInstagram /></Link>
                </div>
            </div>
        </div>
    );
};

export default About;