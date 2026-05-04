/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Add_project = () => {
  // 🔐 Password protection state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  // 👑 Hardcoded password (change this to your desired password)
  const HARDCODED_PASSWORD = import.meta.env.VITE_PASSWORD ;

  // Function to verify password and grant access
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === HARDCODED_PASSWORD) {
      setIsAuthenticated(true);
      toast.success('Access granted!');
      setPasswordInput('');
    } else {
      toast.error('Incorrect password! Access denied.');
      setPasswordInput('');
    }
  };

  // Submit handler for the project form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const image = formData.get("Main_Image");
    const name = formData.get("project_name");
    const details = formData.get("text-details");
    const multiple = formData.getAll("Mult_images");
    const project_view_link = formData.get("project_view_link");
    const shortDetail = formData.get("short-details")

    const data = { image, name, multiple, details, project_view_link,shortDetail };

    try {
      const res = await fetch("https://protfoilo-backend.vercel.app/project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        if (result.errors) {
          result.errors.forEach((err) => {
            toast.error(err.msg);
          });
        } else if (result.message) {
          toast.error(result.message);
        } else {
          toast.error("Something went wrong");
        }
        return;
      }

      if (result.insertedId) {
        toast.success("Project added successfully!");
        e.target.reset();
      }
    } catch (error) {
      toast.error("Server not responding");
    }
  };

  // 🔒 Password screen (locked)
  if (!isAuthenticated) {
    return (
      <div className="h-screen flex justify-center items-center ">
        <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-6">
            <div className="inline-block p-3 bg-[#d5ff3f58] rounded-full mb-4">
              <svg className="w-12 h-12 text-[#d5ff3f] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Password Protected</h2>
            <p className="text-gray-200">Protect your page from unauthorized persons using password authentication.</p>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-5">
            <div>
              {/* <label className="block text-sm font-medium text-gray-200 mb-2">Enter your password</label> */}
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d5ff3f] focus:border-transparent transition-all"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#d5ff3f] hover:bg-[#c4e834] cursor-pointer text-gray-900 font-semibold py-3 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
      </div>
    );
  }

  // 🟢 Actual Project Form (unlocked)
  return (
    <div className="min-h-screen bg-black overflow-y-auto py-12 flex justify-center items-start">
      <div className="w-[75%] max-w-5xl mx-auto">
        {/* Card */}
        <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl border border-[#1a1a1a] overflow-hidden">
          
          {/* Card Header */}
          <div className="px-8 pt-8 pb-6 border-b border-[#1a1a1a]">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Add New Project
                </h2>
                <p className="text-[#6b6b6b] text-sm mt-1">
                  Fill out the form below to add a new project to your portfolio
                </p>
              </div>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center gap-2 text-sm bg-[#141414] hover:bg-[#1a1a1a] text-[#a0a0a0] hover:text-white px-4 py-2 rounded-full transition-all duration-200 border border-[#1a1a1a]"
              >
                🔒 Lock Page
              </button>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Project Name */}
              <div>
                <label className="block text-sm font-medium text-[#d4d4d4] mb-2">
                  Project Name <span className="text-[#e50914]">*</span>
                </label>
                <input
                  type="text"
                  name="project_name"
                  placeholder="e.g., E-Commerce Dashboard"
                  className="w-full bg-[#111111] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#d5ff3f] focus:ring-1 focus:ring-[#d5ff3f] transition-all duration-200"
                  required
                />
              </div>

              {/* Row: Main Image + Project Link */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#d4d4d4] mb-2">
                    Project Image URL <span className="text-[#e50914]">*</span>
                  </label>
                  <input
                    type="text"
                    name="Main_Image"
                    placeholder="https://example.com/image.jpg"
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#d5ff3f] focus:ring-1 focus:ring-[#d5ff3f] transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#d4d4d4] mb-2">
                    Project View Link <span className="text-[#e50914]">*</span>
                  </label>
                  <input
                    type="text"
                    name="project_view_link"
                    placeholder="https://example.com/live-demo"
                    className="w-full bg-[#111111] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#d5ff3f] focus:ring-1 focus:ring-[#d5ff3f] transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Short Details */}
              <div>
                <label className="block text-sm font-medium text-[#d4d4d4] mb-2">
                  Short Details <span className="text-[#e50914]">*</span>
                </label>
                <textarea
                  name="short-details"
                  rows={3}
                  placeholder="Brief description of the project..."
                  className="w-full bg-[#111111] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#d5ff3f] focus:ring-1 focus:ring-[#d5ff3f] transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              {/* Technology Images Section */}
              <div>
                <div className="mb-3">
                  <label className="text-sm font-medium text-[#d4d4d4]">
                    Technology Stack Images
                  </label>
                  <p className="text-xs text-[#6b6b6b] mt-0.5">Add up to 6 image URLs for technology stack</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(6)].map((_, idx) => (
                    <input
                      key={idx}
                      type="text"
                      name="Mult_images"
                      placeholder={`Technology Image ${idx + 1} URL`}
                      className="bg-[#111111] border border-[#222222] rounded-xl px-4 py-2.5 text-white placeholder-[#4a4a4a] text-sm focus:outline-none focus:border-[#d5ff3f] focus:ring-1 focus:ring-[#d5ff3f] transition-all duration-200"
                    />
                  ))}
                </div>
              </div>

              {/* Full Details */}
              <div>
                <label className="block text-sm font-medium text-[#d4d4d4] mb-2">
                  Project Details <span className="text-[#e50914]">*</span>
                </label>
                <textarea
                  name="text-details"
                  rows={6}
                  placeholder="Write a detailed description of the project, including features, technologies used, challenges, etc..."
                  className="w-full bg-[#111111] border border-[#222222] rounded-xl px-4 py-3 text-white placeholder-[#4a4a4a] focus:outline-none focus:border-[#d5ff3f] focus:ring-1 focus:ring-[#d5ff3f] transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#d5ff3f] hover:bg-[#c2e635] text-black font-semibold py-3 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Submit Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_project;


