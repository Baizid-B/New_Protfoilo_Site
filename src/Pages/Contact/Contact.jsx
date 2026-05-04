// import { useState } from "react";
// import { Link } from "react-router";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const formRef = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       toast.success("Account created successfully! 🚀");
//       setIsSubmitting(false);
//       e.target.reset();
//       setPassword("");
//       setConfirmPassword("");
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[#D5FF3F]/5 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D5FF3F]/5 rounded-full blur-3xl"></div>
        
//         {/* Subtle Grid Pattern */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
//       </div>

//       {/* Sign Up Card - Perfectly Centered */}
//       <div className="relative z-10 w-full max-w-md mx-auto px-4 py-8">
//         <div className="bg-[#0a0a0a] rounded-3xl border border-[#1a1a1a] shadow-2xl p-6 md:p-8 transition-all duration-500 hover:border-[#D5FF3F]/20">
          
//           {/* Section Header - Centered */}
//           <div className="mb-8 text-center">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-4">
//               <span className="w-2 h-2 rounded-full bg-[#D5FF3F] animate-pulse"></span>
//               <span className="text-xs font-mono text-[#D5FF3F] tracking-wider">JOIN US</span>
//             </div>
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//               Let's Work
//               <span className="text-[#D5FF3F] block"> Together</span>
//             </h2>
//             <p className="text-[#888888] text-sm max-w-xs mx-auto">
//               Work together to create a better future. The future starts with you.
//             </p>
//           </div>

//           {/* Sign Up Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email Field */}
//             <div className="group">
//               <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
//                 <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none
//                   ${focusedField === 'email' || formRef.current?.email?.value 
//                     ? '-top-3 left-3 text-xs bg-[#0a0a0a] px-2 text-[#D5FF3F]' 
//                     : 'top-4 text-[#666666] group-hover:text-[#888888]'}`}>
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full h-14 bg-[#111111] border border-[#222222] rounded-xl px-4 pb-4 pt-4 text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300"
//                   placeholder=" "
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="group">
//               <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'transform scale-[1.02]' : ''}`}>
//                 <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none
//                   ${focusedField === 'password' || password 
//                     ? '-top-3 left-3 text-xs bg-[#0a0a0a] px-2 text-[#D5FF3F]' 
//                     : 'top-4 text-[#666666] group-hover:text-[#888888]'}`}>
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   onFocus={() => setFocusedField('password')}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full h-14 bg-[#111111] border border-[#222222] rounded-xl px-4 pb-4 pt-4 text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300"
//                   placeholder=" "
//                   required
//                 />
//               </div>
//             </div>

//             {/* Confirm Password Field */}
//             <div className="group">
//               <div className={`relative transition-all duration-300 ${focusedField === 'confirmPassword' ? 'transform scale-[1.02]' : ''}`}>
//                 <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none
//                   ${focusedField === 'confirmPassword' || confirmPassword 
//                     ? '-top-3 left-3 text-xs bg-[#0a0a0a] px-2 text-[#D5FF3F]' 
//                     : 'top-4 text-[#666666] group-hover:text-[#888888]'}`}>
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   onFocus={() => setFocusedField('confirmPassword')}
//                   onBlur={() => setFocusedField(null)}
//                   className="w-full h-14 bg-[#111111] border border-[#222222] rounded-xl px-4 pb-4 pt-4 text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300"
//                   placeholder=" "
//                   required
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="relative cursor-pointer w-full group overflow-hidden rounded-xl bg-[#D5FF3F] hover:bg-[#c2e635] transition-all duration-300 hover:shadow-[0_0_20px_rgba(213,255,63,0.3)] mt-6"
//             >
//               <div className="relative flex items-center justify-center gap-3 px-6 py-3">
//                 <span className="text-lg font-semibold text-black">
//                   {isSubmitting ? 'CREATING ACCOUNT...' : 'SIGN UP NOW'}
//                 </span>
//                 {!isSubmitting && (
//                   <svg className="w-5 h-5 text-black transition-all duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                   </svg>
//                 )}
//                 {isSubmitting && (
//                   <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
//                 )}
//               </div>
//             </button>

//             {/* Sign In Link */}
//             <div className="text-center pt-4">
//               <p className="text-[#666666] text-sm">
//                 Already have an account?{" "}
//                 <Link to="/signin" className="text-[#D5FF3F] hover:underline font-semibold transition-colors">
//                   Sign in here.
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-20px) translateX(10px); }
//         }
//         @keyframes float-delay {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(20px) translateX(-10px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delay {
//           animation: float-delay 8s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Contact;


import { useState } from "react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }
    
    if (!agreeTerms) {
      toast.error("Please agree to the terms and conditions!");
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Account created successfully! 🚀");
      setIsSubmitting(false);
      e.target.reset();
      setPassword("");
      setConfirmPassword("");
      setAgreeTerms(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center relative">
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

      {/* Sign Up Card */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4 py-8">
        <div className="bg-gradient-to-br from-[#0a0a0a] to-[#0d0d0d] rounded-3xl border border-[#1a1a1a] shadow-2xl p-6 md:p-8 transition-all duration-500 hover:border-[#D5FF3F]/30 hover:shadow-[0_0_50px_rgba(213,255,63,0.1)]">
          
          {/* Section Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D5FF3F] animate-pulse"></span>
              <span className="text-xs font-mono text-[#D5FF3F] tracking-wider">GET STARTED</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Create Account
            </h2>
            <p className="text-[#888888] text-sm">
              Join us and start your journey today
            </p>
          </div>

          {/* Sign Up Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div className="group">
              <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'transform scale-[1.02]' : ''}`}>
                <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none
                  ${focusedField === 'name' 
                    ? '-top-3 left-3 text-xs bg-[#0a0a0a] px-2 text-[#D5FF3F]' 
                    : 'top-4 text-[#666666] group-hover:text-[#888888]'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-14 bg-[#111111] border border-[#222222] rounded-xl px-4 pb-4 pt-4 text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300"
                  placeholder=" "
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="group">
              <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none
                  ${focusedField === 'email' 
                    ? '-top-3 left-3 text-xs bg-[#0a0a0a] px-2 text-[#D5FF3F]' 
                    : 'top-4 text-[#666666] group-hover:text-[#888888]'}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-14 bg-[#111111] border border-[#222222] rounded-xl px-4 pb-4 pt-4 text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300"
                  placeholder=" "
                  required
                />
              </div>
            </div>

            {/* Password Field with Show/Hide */}
            <div className="group">
              <div className={`relative transition-all duration-300 ${focusedField === 'password' ? 'transform scale-[1.02]' : ''}`}>
                <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none
                  ${focusedField === 'password' || password 
                    ? '-top-3 left-3 text-xs bg-[#0a0a0a] px-2 text-[#D5FF3F]' 
                    : 'top-4 text-[#666666] group-hover:text-[#888888]'}`}>
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-14 bg-[#111111] border border-[#222222] rounded-xl px-4 pb-4 pt-4 text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300 pr-12"
                  placeholder=" "
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#D5FF3F] transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="group">
              <div className={`relative transition-all duration-300 ${focusedField === 'confirmPassword' ? 'transform scale-[1.02]' : ''}`}>
                <label className={`absolute left-4 transition-all duration-300 cursor-text pointer-events-none
                  ${focusedField === 'confirmPassword' || confirmPassword 
                    ? '-top-3 left-3 text-xs bg-[#0a0a0a] px-2 text-[#D5FF3F]' 
                    : 'top-4 text-[#666666] group-hover:text-[#888888]'}`}>
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setFocusedField('confirmPassword')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full h-14 bg-[#111111] border border-[#222222] rounded-xl px-4 pb-4 pt-4 text-white placeholder-transparent focus:outline-none focus:border-[#D5FF3F] focus:ring-2 focus:ring-[#D5FF3F]/20 transition-all duration-300 pr-12"
                  placeholder=" "
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#D5FF3F] transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center gap-3 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 rounded border-[#222222] bg-[#111111] text-[#D5FF3F] focus:ring-[#D5FF3F] focus:ring-offset-0"
              />
              <label htmlFor="terms" className="text-sm text-[#888888]">
                I agree to the{" "}
                <Link to="/terms" className="text-[#D5FF3F] hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-[#D5FF3F] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative cursor-pointer w-full group overflow-hidden rounded-xl bg-gradient-to-r from-[#D5FF3F] to-[#b8e02e] p-[1px] transition-all duration-300 hover:shadow-[0_0_25px_rgba(213,255,63,0.5)] mt-6"
            >
              <div className="relative flex items-center justify-center gap-3 bg-black rounded-xl px-6 py-3 transition-all duration-300 group-hover:bg-transparent">
                <span className="text-lg font-semibold text-white group-hover:text-black transition-colors duration-300">
                  {isSubmitting ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
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

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-[#666666] text-sm">
                Already have an account?{" "}
                <Link to="/signin" className="text-[#D5FF3F] hover:underline font-semibold transition-colors hover:text-[#c2e635]">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
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