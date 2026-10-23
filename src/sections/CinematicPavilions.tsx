import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pavilionsConfig } from "../config";

gsap.registerPlugin(ScrollTrigger);

// function VideoPlayer({ src, caption }: { src: string; caption: string }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const video = videoRef.current;
//     if (!container || !video) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             video.play().catch(() => {});
//           } else {
//             video.pause();
//           }
//         });
//       },
//       { threshold: 0.3 },
//     );

//     observer.observe(container);

//     gsap.fromTo(
//       container,
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: container,
//           start: "top 80%",
//           once: true,
//         },
//       },
//     );

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} style={{ opacity: 0 }}>
//       <div
//         style={{
//           position: "relative",
//           aspectRatio: "16 / 9",
//           overflow: "hidden",
//           background: "#000",
//         }}
//       >
//         <video
//           ref={videoRef}
//           src={src}
//           muted
//           loop
//           playsInline
//           preload="metadata"
//           style={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             display: "block",
//           }}
//         />
//       </div>
//       <p
//         style={{
//           fontFamily: "var(--font-sans)",
//           fontSize: "0.75rem",
//           fontWeight: 400,
//           color: "var(--text-secondary)",
//           marginTop: "1rem",
//           letterSpacing: "0.03em",
//         }}
//       >
//         {caption}
//       </p>
//     </div>
//   );
// }

export default function CinematicPavilions() {
  if (!pavilionsConfig.sectionLabel) {
    return null;
  }

  return (
    <section
      id="skills"
      style={{
        background: "var(--bg-primary)",
        padding: "6rem 4vw 8rem",
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid #e5e5e5",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "3.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text-secondary)",
          }}
        >
          {pavilionsConfig.sectionLabel}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            color: "var(--text-secondary)",
            letterSpacing: "0.05em",
          }}
        >
          Full Stack & AI Capabilities
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.75rem",
        }}
      >
        {Object.entries(pavilionsConfig.skills).map(([category, skills]) => (
          <div
            key={category}
            style={{
              padding: "2.25rem 2rem",
              background: "#fafafa",
              border: "1px solid #eaeaea",
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "border-color 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#c5c5c5";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#eaeaea";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid #eeeeee",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    margin: 0,
                    color: "var(--text-primary)",
                  }}
                >
                  {category}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  {skills.length} skills
                </span>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.55rem",
                }}
              >
                {skills.map((skill: string) => (
                  <li
                    key={skill}
                    style={{
                      padding: "0.45rem 0.85rem",
                      background: "#ffffff",
                      border: "1px solid #e2e2e2",
                      borderRadius: "999px",
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      color: "#222222",
                      letterSpacing: "0.02em",
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#000000";
                      (e.currentTarget as HTMLElement).style.color = "#ffffff";
                      (e.currentTarget as HTMLElement).style.borderColor = "#000000";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "#ffffff";
                      (e.currentTarget as HTMLElement).style.color = "#222222";
                      (e.currentTarget as HTMLElement).style.borderColor = "#e2e2e2";
                    }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
