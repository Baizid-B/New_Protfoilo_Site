import { useEffect, useRef } from "react";

const Loading = () => {
  const i0 = useRef(null);
  const i1 = useRef(null);
  const i2 = useRef(null);

  useEffect(() => {
    const icons = [i0.current, i1.current, i2.current];
    let cur = 0;

    function next() {
      const leaving = icons[cur];
      if (leaving) {
        leaving.classList.remove("active");
        leaving.classList.add("exit");
      }

      cur = (cur + 1) % icons.length;
      const entering = icons[cur];

      setTimeout(() => {
        if (leaving) leaving.classList.remove("exit");
        if (entering) entering.classList.add("active");
      }, 120);
    }

    const interval = setInterval(next, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes spin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes rspin { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes pulse { 0%,100%{transform:scale(0.94);opacity:.25} 50%{transform:scale(1.06);opacity:.6} }

        .ic {
          position:absolute; inset:0;
          display:flex; align-items:center; justify-content:center;
          opacity:0;
          transform:scale(0.68) rotate(-8deg);
          transition:
            opacity 700ms cubic-bezier(0.16,1,0.3,1),
            transform 700ms cubic-bezier(0.16,1,0.3,1);
          will-change: opacity, transform;
        }
        .ic.active {
          opacity:1;
          transform:scale(1) rotate(0deg);
        }
        .ic.exit {
          opacity:0;
          transform:scale(0.68) rotate(8deg);
          transition:
            opacity 500ms cubic-bezier(0.4,0,1,1),
            transform 500ms cubic-bezier(0.4,0,1,1);
        }
      `}</style>

      {/* ব্যাকগ্রাউন্ড ১০vh করে দিয়েছি যাতে পুরো পেজ জুড়ে দেখায় */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center", minHeight:"100vh", background:"rgba(0, 0, 0, 0.95)"}}>
        <div style={{position:"relative",width:"144px",height:"144px",display:"flex",alignItems:"center",justifyContent:"center"}}>

          <svg style={{position:"absolute",inset:0,width:"144px",height:"144px",overflow:"visible"}} viewBox="0 0 144 144">
            <circle cx="72" cy="72" r="65" fill="none" stroke="#d5ff3f" strokeWidth="0.6"
              strokeDasharray="8 5" opacity=".18"
              style={{transformOrigin:"72px 72px",animation:"spin 6s linear infinite"}}/>
            <circle cx="72" cy="72" r="50" fill="none" stroke="#d5ff3f" strokeWidth="0.5"
              opacity=".2"
              style={{transformOrigin:"72px 72px",animation:"pulse 2.4s ease-in-out infinite"}}/>
            <circle cx="72" cy="72" r="36" fill="none" stroke="#d5ff3f" strokeWidth="0.8"
              strokeDasharray="2 7" opacity=".2"
              style={{transformOrigin:"72px 72px",animation:"rspin 4s linear infinite"}}/>
            <circle cx="72" cy="7" r="3.5" fill="#d5ff3f" opacity=".85"
              style={{transformOrigin:"72px 72px",animation:"spin 6s linear infinite"}}/>
            <circle cx="72" cy="137" r="2.5" fill="#d5ff3f" opacity=".4"
              style={{transformOrigin:"72px 72px",animation:"rspin 4s linear infinite"}}/>
          </svg>

          <div style={{position:"relative",width:"58px",height:"58px"}}>
            <div className="ic active" ref={i0}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
                fill="none" stroke="#d5ff3f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>

            <div className="ic" ref={i1}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
                fill="none" stroke="#d5ff3f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                <line x1="6" y1="1" x2="6" y2="4"/>
                <line x1="10" y1="1" x2="10" y2="4"/>
                <line x1="14" y1="1" x2="14" y2="4"/>
              </svg>
            </div>

            <div className="ic" ref={i2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24"
                fill="none" stroke="#d5ff3f" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Loading;