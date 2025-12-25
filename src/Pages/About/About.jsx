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

            <div className="bg-[#161B22] rounded-lg p-11 flex flex-row items-center">
                {/* image */}
                <div className="w-[40%] overflow-hidden bg-amber-300 rounded-2xl">
                    <img src={About_img} alt="About_image" />
                </div>

                {/* about_details */}
                <div className="w-[58%] space-y-5 p-5">
                    <p>
                        I'm a Computer Science student at SRM Institute of Science and Technology.
                        My passion lies in building user-friendly solutions that enhance overall user
                        experiences. I am currently focused on React Native, Expo, Firebase, and React,
                        leveraging these technologies to create responsive and functional applications.
                        One of my ongoing projects is Rescue Paws, a mobile app designed to facilitate
                        the rescue and adoption of stray and pet dogs. The app will soon be published
                        on the Play Store and App Store, and it incorporates AI-driven features to guide users
                        through the adoption process. In addition to app development, I’ve led the design and 
                        development of platforms like the GitHub Community SRM website, which serves as an all-in-one
                        platform for the community. I’ve also organized and managed events such as hackathons and workshops,
                        mentoring others in UI/UX and graphic design. I thrive in Agile Scrum environments and believe
                        or a collaborative team 
                        member, I’m here to help bring ideas to life. Let’s connect and create innovative solutions together!
                    </p>
                    
                    <div className="flex flex-row justify-items-start">
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
                        <div className="text-6xl px-6 text-[#D5FF3F]"><FaHtml5 /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><SiCss3 /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><FaJsSquare /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><RiTailwindCssFill /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><RiReactjsFill /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><SiFirebase /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><SiMongodb /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><FaNodeJs /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><SiExpress /></div>
                        <div className="text-6xl px-6 text-[#D5FF3F]"><FaGithub /></div>
                    </Marquee>
                </div>

                {/* Social icon */}
                <div className="w-2/6 py-9 flex flex-row gap-5 justify-center bg-[#161B22] text-4xl rounded-lg">
                    <Link to='https://github.com/Baizid-B' target="_blank"><FaGithub /></Link>
                    <Link to='https://www.linkedin.com/in/baizid-bostami-36962b292/' target="_blank"><FaLinkedin /></Link>
                    <Link to='https://www.facebook.com/baizidbr' target="_blank"><FaFacebook /></Link>
                    <Link to='https://www.instagram.com/baizid_bostami21/' target="_blank"><AiFillInstagram /></Link>
                </div>
            </div>
        </div>
    );
};

export default About;