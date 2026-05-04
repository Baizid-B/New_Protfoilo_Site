// import Marquee from "react-fast-marquee";
// import { Link } from "react-router";
// import About_img from "../../assets/about_image/baizid.jpg"
// import { FaFacebook, FaFile, FaLinkedin } from "react-icons/fa6";
// import { FaHtml5 } from "react-icons/fa6";
// // import { SiCss3 } from "react-icons/si";
// import { FaJsSquare } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { RiReactjsFill } from "react-icons/ri";
// import { SiFirebase } from "react-icons/si";
// import { SiMongodb } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa6";
// import { SiExpress } from "react-icons/si";
// import { FaGithub } from "react-icons/fa";
// import { AiFillInstagram } from "react-icons/ai";


// const About = () => {

//     return (
//         <div className="w-11/12 mx-auto space-y-5">
//             <div className="bg-[#161B22] rounded-lg">
//                 <h1 className="font-humane text-6xl p-5 flex flex-row justify-center">About</h1>
//             </div>

//             <div className="bg-[#161B22] rounded-lg p-4 md:p-6 lg:p-11 flex flex-col md:flex-col lg:flex-row gap-8 md:gap-8 lg:gap-0 ">
//                 {/* image */}
//                 <div className="w-full h-fit md:w-full lg:w-[48%] overflow-hidden bg-[#D5FF3F] rounded-2xl">
//                     <img width="100%" height="100%" objectFit="cover" src={About_img} alt="About_image" />
//                 </div>

//                 {/* about_details */}
//                 <div className="w-full lg:w-[48%] px-5 flex flex-col justify-between items-stretch gap-8 ">
//                     <p className="leading-relaxed text-lg">
//                         I’m an aspiring front-end developer passionate about building 
//                         responsive and user-friendly web interfaces. Although I don’t 
//                         have professional experience yet, I’ve been actively learning 
//                         and practicing key technologies, including HTML, CSS, JavaScript, 
//                         Tailwind CSS, React.js, MongoDB, Express.js, Node.js.I enjoy turning design ideas into functional and visually 
//                         appealing websites. Through personal projects, online tutorials,and 
//                         hands-on practice, I’ve developed a good understanding of modern web 
//                         development concepts such as component-based design, responsive layouts, 
//                         and interactive UI behavior. I’m highly motivated to grow, learn from real-world
//                         challenges, and contribute to a team where I can apply and expand my skills in a
//                         practical environment. Let me know if you'd like to include details about personal
//                         projects or tools you’re familiar with (like GitHub) and next terget is <span className="uppercase text-[#D5FF3F] font-bold">backend developer</span>
//                     </p>
                    
//                     <div className="flex flex-row">
//                         <a href="/public/Md.Baizid Bostami Professional CV Resume.pdf" download className="flex flex-row items-center gap-2 py-2 px-3 rounded-lg bg-transparent border-[#D5FF3F] border-2 text-[#D5FF3F] font-semibold hover:bg-[#000000] hover:text-white hover:border-black transition-all duration-400 ease-in-out">
//                             <span className="text-[#D5FF3F]"><FaFile /></span> Download Resume
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col md:flex-row items-center overflow-hidden gap-6">
//                 {/* skills */}
//                 <div className="w-full md:w-[67%] py-6 flex flex-row bg-[#161B22] rounded-xl md:rounded-lg ">
//                     <Marquee>
//                         <div className="text-3xl md:text-5xl px-8 text-[#D5FF3F]"><FaHtml5 /></div>
//                         {/* <div className="text-3xl md:text-5xl px-8 text-[#D5FF3F]"><SiCss3 /></div> */}
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><FaJsSquare /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><RiTailwindCssFill /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><RiReactjsFill /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><SiFirebase /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><SiMongodb /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><FaNodeJs /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><SiExpress /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><FaGithub /></div>
//                         <div className="text-3xl md:text-5xl px-8 text-[#D5FF3F]"><FaHtml5 /></div>
//                         {/* <div className="text-3xl md:text-5xl px-8 text-[#D5FF3F]"><SiCss3 /></div> */}
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><FaJsSquare /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><RiTailwindCssFill /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><RiReactjsFill /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><SiFirebase /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><SiMongodb /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><FaNodeJs /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><SiExpress /></div>
//                         <div className="text-3xl md:text-6xl px-8 text-[#D5FF3F]"><FaGithub /></div>

//                     </Marquee>
//                 </div>

//                 {/* Social icon */}
//                 <div className="w-full md:w-2/6 py-9 flex flex-row gap-5 justify-center bg-[#161B22] text-3xl md:text-4xl rounded-lg">
//                     <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://github.com/Baizid-B' target="_blank"><FaGithub /></Link>
//                     <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://www.linkedin.com/in/baizid-bostami-36962b292/' target="_blank"><FaLinkedin /></Link>
//                     <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://www.facebook.com/baizidbr' target="_blank"><FaFacebook /></Link>
//                     <Link className="hover:text-[#d5ff3f] transition-all duration-300 ease-in-out" to='https://www.instagram.com/baizid_bostami21/' target="_blank"><AiFillInstagram /></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;


import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import About_img from "../../assets/about_image/baizid.jpg";
import { FaFacebook, FaFileDownload, FaLinkedin, FaHtml5, FaJs, FaNodeJs, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiFirebase, SiMongodb, SiExpress } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Technology icons array for cleaner mapping
  const techIcons = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaJs, name: "JavaScript" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS" },
    { icon: RiReactjsFill, name: "React.js" },
    { icon: SiFirebase, name: "Firebase" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express.js" },
    { icon: FaGithub, name: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 overflow-x-hidden">
      <div className="w-11/12 max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D5FF3F] animate-pulse"></span>
            <span className="text-xs font-mono text-[#D5FF3F] tracking-wider">GET TO KNOW ME</span>
          </div>
          <h1 className="text-4xl font-humane md:text-8xl font-bold text-white">
            About
            <span className="text-[#D5FF3F] block sm:inline sm:ml-3"> Me</span>
          </h1>
          <p className="text-[#888888] max-w-2xl mx-auto mt-4">
            Passionate developer creating amazing web experiences
          </p>
        </div>

        {/* Main Content Card - Image + About Text */}
        <div className={`bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-2xl border border-[#1a1a1a] overflow-hidden shadow-2xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col lg:flex-row gap-0">
            
            {/* Image Section with Overlay Effect */}
            <div className="lg:w-[45%] relative group overflow-hidden min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 lg:bg-gradient-to-r"></div>
              <img 
                className="w-full h-full object-cover lg:h-full transition-transform duration-700 group-hover:scale-110" 
                src={About_img} 
                alt="Baizid Bostami" 
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 lg:hidden">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
                  <h3 className="text-white font-bold text-xl">Baizid Bostami</h3>
                  <p className="text-[#D5FF3F]">Front-End Developer</p>
                </div>
              </div>
            </div>

            {/* About Details */}
            <div className="lg:w-[55%] p-6 md:p-8 lg:p-10">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20">
                  <span className="text-xs font-mono  text-[#D5FF3F]">WHO AM I?</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  I'm <span className="text-[#D5FF3F]">Baizid Bostami</span>
                </h2>
                
                <p className="text-[#aaaaaa] leading-relaxed">
                  I'm an aspiring front-end developer passionate about building 
                  responsive and user-friendly web interfaces. Although I don't 
                  have professional experience yet, I've been actively learning 
                  and practicing key technologies, including HTML, CSS, JavaScript, 
                  Tailwind CSS, React.js, MongoDB, Express.js, and Node.js.
                </p>
                
                <p className="text-[#aaaaaa] leading-relaxed">
                  I enjoy turning design ideas into functional and visually 
                  appealing websites. Through personal projects, online tutorials, and 
                  hands-on practice, I've developed a good understanding of modern web 
                  development concepts such as component-based design, responsive layouts, 
                  and interactive UI behavior.
                </p>
                
                <p className="text-[#aaaaaa] leading-relaxed">
                  I'm highly motivated to grow, learn from real-world challenges, and contribute 
                  to a team where I can apply and expand my skills. My next target is to become a 
                  <span className="text-[#D5FF3F] font-bold ml-2">Backend Developer</span>
                </p>
                
                {/* Download Resume Button */}
                <div className="pt-4">
                  <a 
                    href="/Md.Baizid Bostami Professional CV Resume.pdf" 
                    download 
                    className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-transparent border-2 border-[#D5FF3F] text-[#D5FF3F] font-semibold overflow-hidden transition-all duration-300 hover:text-black hover:border-[#D5FF3F]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <FaFileDownload className="text-[#D5FF3F] group-hover:text-black transition-colors duration-300" />
                      Download Resume
                    </span>
                    <div className="absolute inset-0 bg-[#D5FF3F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Social Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Skills Section - Fixed Marquee Overlap Issue */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-2xl border border-[#1a1a1a] p-6 h-full">
              <div className="mb-4 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-3">
                  <span className="text-xs font-mono text-[#D5FF3F]">TECH STACK</span>
                </div>
                <h3 className="text-xl font-bold text-white">Technologies I Work With</h3>
              </div>
              
              {/* Fixed Marquee - Added proper container and gradient */}
              <div className="relative w-full overflow-hidden rounded-xl">
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                <Marquee 
                  gradient={false} 
                  speed={40} 
                  pauseOnHover={true}
                  className="py-4"
                >
                  {techIcons.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center justify-center mx-6 group cursor-pointer"
                    >
                      <div className="text-5xl md:text-6xl text-[#D5FF3F] group-hover:scale-110 transition-transform duration-300">
                        <tech.icon />
                      </div>
                      <p className="text-xs text-center text-[#666666] mt-2 group-hover:text-[#D5FF3F] transition-colors">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                  {/* Duplicate for seamless loop */}
                  {techIcons.map((tech, index) => (
                    <div 
                      key={`dup-${index}`} 
                      className="flex flex-col items-center justify-center mx-6 group cursor-pointer"
                    >
                      <div className="text-5xl md:text-6xl text-[#D5FF3F] group-hover:scale-110 transition-transform duration-300">
                        <tech.icon />
                      </div>
                      <p className="text-xs text-center text-[#666666] mt-2 group-hover:text-[#D5FF3F] transition-colors">
                        {tech.name}
                      </p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-2xl border border-[#1a1a1a] p-6 h-full">
              <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                {/* Left aligned content */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-3">
                  <span className="text-xs font-mono text-[#D5FF3F]">CONNECT WITH ME</span>
                </div>

                {/* Right aligned content */}
                <div>
                    <h3 className="text-xl font-bold text-white">Follow Me</h3>
                    <p className="text-[#666666] text-sm mt-1">Let's connect and collaborate</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-6">
                <Link 
                  to='https://github.com/Baizid-B' 
                  target="_blank"
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-[#111111] border border-[#1a1a1a] hover:border-[#D5FF3F] transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="text-2xl text-[#D5FF3F] group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-[#D5FF3F] transition-colors">GitHub</span>
                </Link>
                
                <Link 
                  to='https://www.linkedin.com/in/baizid-bostami-36962b292/' 
                  target="_blank"
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-[#111111] border border-[#1a1a1a] hover:border-[#D5FF3F] transition-all duration-300 hover:-translate-y-1"
                >
                  <FaLinkedin className="text-2xl text-[#D5FF3F] group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-[#D5FF3F] transition-colors">LinkedIn</span>
                </Link>
                
                <Link 
                  to='https://www.facebook.com/baizidbr' 
                  target="_blank"
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-[#111111] border border-[#1a1a1a] hover:border-[#D5FF3F] transition-all duration-300 hover:-translate-y-1"
                >
                  <FaFacebook className="text-2xl text-[#D5FF3F] group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-[#D5FF3F] transition-colors">Facebook</span>
                </Link>
                
                <Link 
                  to='https://www.instagram.com/baizid_bostami21/' 
                  target="_blank"
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-[#111111] border border-[#1a1a1a] hover:border-[#D5FF3F] transition-all duration-300 hover:-translate-y-1"
                >
                  <AiFillInstagram className="text-2xl text-[#D5FF3F] group-hover:scale-110 transition-transform" />
                  <span className="text-white group-hover:text-[#D5FF3F] transition-colors">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Fixed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-5 text-center hover:border-[#D5FF3F]/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-[#D5FF3F] mb-2 group-hover:scale-110 transition-transform">10+</div>
            <div className="text-sm text-[#888888]">Projects Completed</div>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-5 text-center hover:border-[#D5FF3F]/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-[#D5FF3F] mb-2 group-hover:scale-110 transition-transform">1000+</div>
            <div className="text-sm text-[#888888]">Hours of Coding</div>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-5 text-center hover:border-[#D5FF3F]/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-[#D5FF3F] mb-2 group-hover:scale-110 transition-transform">8+</div>
            <div className="text-sm text-[#888888]">Technologies</div>
          </div>
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-5 text-center hover:border-[#D5FF3F]/30 transition-all duration-300 group">
            <div className="text-3xl font-bold text-[#D5FF3F] mb-2 group-hover:scale-110 transition-transform">2024</div>
            <div className="text-sm text-[#888888]">Started Journey</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;