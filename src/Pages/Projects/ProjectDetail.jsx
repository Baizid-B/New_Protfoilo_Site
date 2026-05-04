import { useLoaderData, Link } from "react-router";
import { useState } from "react";

const ProjectDetail = () => {
  const Data = useLoaderData();
  const [selectedImage, setSelectedImage] = useState(Data?.image || Data?.multiple?.[0]);

  if (!Data) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white">Project not found</h2>
          <Link to="/projects" className="text-[#D5FF3F] mt-4 inline-block">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="w-11/12 max-w-6xl mx-auto">
        
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-2 text-[#888888] hover:text-[#D5FF3F] transition-colors mb-6 group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>

        {/* Main Content */}
        <div className="bg-[#0a0a0a] rounded-2xl border border-[#1a1a1a] overflow-hidden">
          
          {/* Hero Image Section */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden">
            <img 
              src={selectedImage} 
              alt={Data.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
            
            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{Data.name}</h1>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="px-3 py-1 bg-[#D5FF3F]/20 text-[#D5FF3F] rounded-full text-sm">
                  Featured Project
                </span>
                {Data.category && (
                  <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">
                    {Data.category}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Short Description */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Overview</h3>
                  <p className="text-[#aaaaaa] leading-relaxed">
                    {Data.shortDetail || "No short description provided."}
                  </p>
                </div>

                {/* Full Details */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Project Details</h3>
                  <p className="text-[#aaaaaa] leading-relaxed whitespace-pre-wrap">
                    {Data.details || "No detailed description provided."}
                  </p>
                </div>

                {/* Extra Fields (to be added from your form) */}
                {(Data.challenges || Data.solution || Data.features) && (
                  <div className="space-y-4">
                    {Data.challenges && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Challenges</h3>
                        <p className="text-[#aaaaaa] leading-relaxed">{Data.challenges}</p>
                      </div>
                    )}
                    {Data.solution && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Solution</h3>
                        <p className="text-[#aaaaaa] leading-relaxed">{Data.solution}</p>
                      </div>
                    )}
                    {Data.features && Data.features.length > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Key Features</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {Data.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-[#aaaaaa]">
                              <span className="w-1.5 h-1.5 bg-[#D5FF3F] rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Project Info Card */}
                <div className="bg-[#111111] rounded-xl p-5 border border-[#1a1a1a]">
                  <h3 className="text-lg font-semibold text-white mb-4">Project Info</h3>
                  <div className="space-y-3">
                    {Data.client && (
                      <div>
                        <p className="text-xs text-[#666666] uppercase tracking-wide">Client</p>
                        <p className="text-white">{Data.client}</p>
                      </div>
                    )}
                    {Data.year && (
                      <div>
                        <p className="text-xs text-[#666666] uppercase tracking-wide">Year</p>
                        <p className="text-white">{Data.year}</p>
                      </div>
                    )}
                    {Data.role && (
                      <div>
                        <p className="text-xs text-[#666666] uppercase tracking-wide">My Role</p>
                        <p className="text-white">{Data.role}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-[#666666] uppercase tracking-wide">Project ID</p>
                      <p className="text-white text-sm font-mono">{Data._id}</p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Card */}
                {Data.multiple && Data.multiple.length > 0 && (
                  <div className="bg-[#111111] rounded-xl p-5 border border-[#1a1a1a]">
                    <h3 className="text-lg font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {Data.multiple.map((img, idx) => (
                        <div 
                          key={idx} 
                          className="w-12 h-12 rounded-lg bg-[#0a0a0a] border border-[#222222] p-2 hover:scale-110 transition-transform cursor-pointer"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img src={img} alt={`Tech ${idx + 1}`} className="w-full h-full object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Project Button */}
                {Data.project_view_link && (
                  <a
                    href={Data.project_view_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#D5FF3F] text-black text-center py-3 rounded-xl font-semibold hover:bg-[#c2e635] transition-all transform hover:scale-[1.02]"
                  >
                    View Live Project →
                  </a>
                )}
              </div>
            </div>

            {/* Image Gallery Section (if multiple images exist) */}
            {Data.multiple && Data.multiple.length > 1 && (
              <div className="mt-10 pt-6 border-t border-[#1a1a1a]">
                <h3 className="text-xl font-semibold text-white mb-4">Project Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Data.multiple.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${selectedImage === img ? 'border-[#D5FF3F]' : 'border-transparent'}`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-24 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;