/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router";
import { useState } from "react";

const Projects = () => {
  const projectData = useLoaderData();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D5FF3F]/10 border border-[#D5FF3F]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D5FF3F] animate-pulse"></span>
            <span className="text-xs font-mono text-[#D5FF3F] tracking-wider">MY WORK</span>
          </div>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured
            <span className="text-[#D5FF3F] block sm:inline sm:ml-3"> Projects</span>
          </h2> */}
          <p className="text-[#888888] max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and creativity
          </p>
        </div>

        {projectData && projectData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.map((users, index) => (
              <div
                key={users._id}
                className="group relative bg-[#0a0a0a] pb-4 rounded-2xl overflow-hidden border border-[#1a1a1a] transition-all duration-500 hover:border-[#D5FF3F]/30 hover:shadow-2xl hover:shadow-[#D5FF3F]/5"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={users.image}
                    alt={users.name}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Name Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <Link
                      to={users.project_view_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#D5FF3F] cursor-pointer text-black px-6 py-2 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                    {users.name}
                  </h3>
                  
                  {/* Short Description */}
                  <p className="text-[#999999] text-sm mb-4 line-clamp-2">
                    {users.shortDetail}
                  </p>

                  {/* Technology Stack Images */}
                  {users?.multiple && users.multiple.length > 0 && (
                    <div className="mb-12">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1 h-4 bg-[#D5FF3F] rounded-full"></div>
                        <span className="text-xs font-medium text-[#D5FF3F] uppercase tracking-wider">
                          Tech Stack
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {users.multiple.slice(0, 4).map((img, idx) => (
                          <div
                            key={idx}
                            className="w-10 h-10 rounded-lg bg-[#111111] border border-[#222222] p-1 overflow-hidden hover:scale-110 transition-transform duration-300"
                          >
                            <img
                              className="w-full h-full object-contain"
                              src={img}
                              alt={`Tech ${idx + 1}`}
                            />
                          </div>
                        ))}
                        {users.multiple.length > 4 && (
                          <div className="w-10 h-10 rounded-lg bg-[#111111] border border-[#222222] flex items-center justify-center text-xs text-[#888888]">
                            +{users.multiple.length - 4}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* View Details Button */}
                  <Link
                    to={`/projects/${users._id}`}
                    className="w-full px-6 py-3 cursor-pointer bg-transparent border border-[#D5FF3F]/30 text-[#D5FF3F] rounded-lg font-semibold transition-all duration-300 hover:bg-[#D5FF3F] hover:text-black hover:border-transparent"
                  >
                    View Details
                  </Link>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D5FF3F]/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <svg className="w-24 h-24 text-[#333333] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-xl font-semibold text-[#888888]">No projects available</p>
              <p className="text-[#666666] mt-2">Check back later for new work</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;