import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaPlusCircle, FaBars, FaTimes, FaRobot } from "react-icons/fa";
import logoImage from "../../assets/logo/Portfolio_logo.png";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home", icon: FaHome },
    { to: "/About", label: "About", icon: FaUser },
    { to: "/Projects", label: "Projects", icon: FaProjectDiagram },
    { to: "/Contact", label: "Contact", icon: FaEnvelope },
    { to: "/add_project", label: "Add Project", icon: FaPlusCircle },
  ];

  return (
    <>
      {/* Spacer */}
      <div className="h-20"></div>
      
      <nav
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-[90%] md:w-[70%] lg:w-auto min-w-80 max-w-[1200px] rounded-2xl ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl shadow-2xl"
            : "bg-black/40 backdrop-blur-md"
        } border border-white/15`}
      >
        <div className="px-3 sm:px-4">
          <div className="flex justify-between items-center h-12">
            
            {/* লোগো সেকশন - শুধু মোবাইল এবং ট্যাবলেটে দেখাবে (md:hidden) */}
            <div className="shrink-0">
              <NavLink to="/" className="block md:hidden">
                <img 
                    src={logoImage} 
                    alt="Logo" 
                    className="h-8 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
                />
              </NavLink>
            </div>

            {/* Desktop Navigation - ট্যাবলেট (md) এবং উপরে দেখাবে */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative group flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-[#D5FF3F] bg-[#D5FF3F]/10 shadow-[0_2px_8px_rgba(213,255,63,0.2)]"
                        : "text-gray-300 hover:text-white hover:bg-white/5 hover:shadow-lg hover:shadow-black/30"
                    } transform hover:-translate-y-0.5 active:translate-y-0`
                  }
                >
                  <link.icon className="w-3.5 h-3.5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:drop-shadow-[0_2px_4px_rgba(213,255,63,0.3)]" />
                  <span className="font-medium text-sm tracking-wide">{link.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Button - শুধু মোবাইলে দেখাবে (sm:flex) */}
            <div className="flex md:hidden shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#D5FF3F]/20 hover:border-[#D5FF3F]/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="w-4 h-4 text-white" />
                ) : (
                  <FaBars className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu - শুধু মোবাইলে (md:hidden) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-400 rounded-b-2xl ${
            isMobileMenuOpen ? "max-h-96 opacity-100 pb-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-2 px-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300 transform active:scale-98 ${
                    isActive
                      ? "text-[#D5FF3F] bg-[#D5FF3F]/10 shadow-[0_2px_8px_rgba(213,255,63,0.15)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-1"
                  }`
                }
              >
                <link.icon className="w-4 h-4" />
                <span className="font-medium text-sm">{link.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu - শুধু মোবাইলে (md:hidden) */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Nav;