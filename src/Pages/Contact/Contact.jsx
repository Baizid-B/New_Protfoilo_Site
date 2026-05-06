import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import { useState } from "react";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_KEY,
            import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            toast.success("Message sent successfully!");
            e.target.reset();
            setIsSubmitting(false);
        })
        .catch(() => {
            toast.error("Failed to send message");
            setIsSubmitting(false);
        });
    }

    return (
        <div className="w-full min-h-screen ">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#D5FF3F]/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D5FF3F]/5 rounded-full blur-3xl"></div>
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                
                {/* Floating Orbs */}
                <div className="absolute top-40 right-20 w-32 h-32 bg-[#D5FF3F]/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float-delay"></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-20">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#D5FF3F] animate-pulse"></span>
                        <span className="text-xs font-mono text-[#D5FF3F] tracking-wider">GET IN TOUCH</span>
                    </div>
                    {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tighter">
                        Contact <span className="text-[#D5FF3F]">Us</span>
                    </h1> */}
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a question or want to work with us? We'd love to hear from you.
                    </p>
                </div>

                {/* Contact Form - 70% width */}
                <div className="flex justify-center">
                    <div className="w-full md:w-[70%] lg:w-[70%] xl:w-[70%]">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            
                            {/* Name Field */}
                            <div className="group">
                                <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'transform scale-[1.01]' : ''}`}>
                                    <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none z-10
                                        ${focusedField === 'name' 
                                            ? '-top-3 left-3 text-xs bg-[#0d1117] px-2 text-[#D5FF3F]' 
                                            : 'top-4 text-gray-400 group-hover:text-gray-300'}`}>
                                        Full Name
                                    </label>
                                    <input 
                                        className="w-full h-14 px-4 pt-2 pb-2 bg-[#000000] border-2 border-gray-800 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300" 
                                        type="text" 
                                        name="name" 
                                        placeholder=" "
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#D5FF3F] transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="group">
                                <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.01]' : ''}`}>
                                    <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none z-10
                                        ${focusedField === 'email' 
                                            ? '-top-3 left-3 text-xs bg-[#0d1117] px-2 text-[#D5FF3F]' 
                                            : 'top-4 text-gray-400 group-hover:text-gray-300'}`}>
                                        Email Address
                                    </label>
                                    <input 
                                        className="w-full h-14 px-4 pt-2 pb-2 bg-[#000000] border-2 border-gray-800 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300" 
                                        type="email" 
                                        name="email" 
                                        placeholder=" "
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#D5FF3F] transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="group">
                                <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'transform scale-[1.01]' : ''}`}>
                                    <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none z-10
                                        ${focusedField === 'message' 
                                            ? '-top-3 left-3 text-xs bg-[#0d1117] px-2 text-[#D5FF3F]' 
                                            : 'top-5 text-gray-400 group-hover:text-gray-300'}`}>
                                        Your Message
                                    </label>
                                    <textarea 
                                        className="w-full min-h-45 px-4 pt-5 pb-2 bg-[#000000] border-2 border-gray-800 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300 resize-none" 
                                        name="message" 
                                        placeholder=" "
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                    />
                                    <div className="absolute right-4 top-5 text-gray-600 group-focus-within:text-[#D5FF3F] transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className="relative cursor-pointer w-full group overflow-hidden rounded-xl bg-gradient-to-r from-[#D5FF3F] to-[#b8e02e] p-px transition-all duration-300 hover:shadow-[0_0_35px_rgba(213,255,63,0.5)] mt-8"
                            >
                                <div className="relative flex items-center justify-center gap-3 bg-[#000000] rounded-xl px-6 py-4 transition-all duration-300 group-hover:bg-transparent">
                                    <span className="text-lg font-semibold text-white group-hover:text-black transition-colors duration-300 uppercase tracking-wider">
                                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                    </span>
                                    {!isSubmitting && (
                                        <svg className="w-5 h-5 text-white group-hover:text-black transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    )}
                                    {isSubmitting && (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    )}
                                </div>
                            </button>

                            {/* Contact Info Links */}
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8 text-center">
                                <div className="flex items-center justify-center gap-3 text-gray-400 hover:text-[#D5FF3F] transition-colors group">
                                    <div className="p-2 rounded-lg bg-[#111827] group-hover:bg-[#D5FF3F]/10 transition-colors">
                                        <svg className="w-5 h-5 text-[#D5FF3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span>baizidbostami324@gmail.com</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-gray-400 hover:text-[#D5FF3F] transition-colors group">
                                    <div className="p-2 rounded-lg bg-[#111827] group-hover:bg-[#D5FF3F]/10 transition-colors">
                                        <svg className="w-5 h-5 text-[#D5FF3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span>+8801304-867-302</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-gray-400 hover:text-[#D5FF3F] transition-colors group">
                                    <div className="p-2 rounded-lg bg-[#111827] group-hover:bg-[#D5FF3F]/10 transition-colors">
                                        <svg className="w-5 h-5 text-[#D5FF3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-20px) translateX(10px); }
                }
                @keyframes float-delay {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(20px) translateX(-10px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delay {
                    animation: float-delay 8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default Contact;