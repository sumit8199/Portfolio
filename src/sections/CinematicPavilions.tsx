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
    <div
    id="skills"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "2rem",
        padding: '20px',
      }}
    >
      {Object.entries(pavilionsConfig.skills).map(([category, skills]) => (
        <div
          key={category}
          style={{
            padding: "2rem",
            background: "var(--bg-growth)",
            borderRadius: "12px",
          }}
        >
          <h3
            style={{
              marginBottom: "1rem",
              fontSize: "1rem",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            {category}
          </h3>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            {skills.map((skill: string) => (
              <li
                key={skill}
                style={{
                  padding: "0.5rem 1rem",
                  background: "var(--bg-tags)",
                  borderRadius: "999px",
                  fontSize: "0.9rem",
                  color: "var(--text-primary)",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
