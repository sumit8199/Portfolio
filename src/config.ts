export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  titleLines: string[]
  subtitle: string
}

export interface ManifestoConfig {
  headingText: string
  bodyText: string
  videoPath: string
}

export interface ExhibitionArticleSection {
  heading: string
  body: string
}

export interface ExhibitionItem {
  slug: string
  title: string
  image: string
  year: string
  eyebrow: string
  intro: string
  githubUrl?: string
  liveUrl?: string
  technologies?: string[]
  sections: ExhibitionArticleSection[]
}

export interface ExhibitionsConfig {
  sectionLabel: string
  countLabel: string
  detailBackText: string
  items: ExhibitionItem[]
}

export interface PavilionsConfig {
  sectionLabel: string
  skills: Skills
}

export interface Skills {
  Languages: string[];
  Frontend: string[];
  Backend: string[];
  Database: string[];
  Software: string[];
  Additional: string[];
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterConfig {
  visitLabel: string
  visitLines: string[]
  connectLabel: string
  connectLinks: FooterLink[]
  brandName: string
  rightsText: string
  coordinatesText: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Sumit Pingale | Full Stack & AI Solutions Engineer",
  siteDescription: "Portfolio of Sumit Pingale — Full Stack Developer specializing in Next.js, React, Angular, Node.js, and Generative AI workflows.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "Sumit Pingale",
  links: [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
}

export const heroConfig: HeroConfig = {
  titleLines: ["SUMIT", "PINGALE"],
  subtitle: "FULL STACK & AI ENGINEER",
}

export const manifestoConfig: ManifestoConfig = {
  headingText: "Engineering Scalable Systems & AI",
  bodyText: "I build robust, high-performance web and mobile platforms bridging modern frontend architectures with distributed backend microservices and local LLM generative pipelines. From high-concurrency dispatch engines with Redis locks to real-time IoT monitoring dashboards and Ollama multi-model workflows, I deliver software that is reliable, elegant, and impactful.",
  videoPath: "/videos/manifesto-code.mp4",
}

export const exhibitionsConfig: ExhibitionsConfig = {
  sectionLabel: "Featured Projects",
  countLabel: "08 Selected Works",
  detailBackText: "Back to Projects",
  items: [
    {
      slug: "rentkar-fleet-dispatch",
      title: "Rentkar Fleet Dispatch",
      image: "/images/rentkar-dispatch.jpg",
      year: "2025",
      eyebrow: "Next.js 15 • Redis Locks • MongoDB • Docker",
      githubUrl: "https://github.com/sumit8199/rentkar-assignment",
      technologies: ["Next.js 15", "React 19", "TypeScript", "Redis", "MongoDB", "Docker", "Nginx", "WebSockets"],
      intro: "A high-concurrency vehicle booking and partner verification system featuring automated nearest-partner dispatch, distributed Redis locks for concurrent document review, and real-time live GPS tracking.",
      sections: [
        {
          heading: "Distributed Concurrency & Redis Locks",
          body: "Engineered an intelligent partner dispatch engine that computes proximity algorithms to allocate the nearest active driver. Implemented distributed Redis mutex locks for concurrent document reviews and payment handshakes, preventing race conditions, dual allocation, and duplicate approvals across simultaneous client requests.",
        },
        {
          heading: "Real-time Telemetry & Containerized Infrastructure",
          body: "Developed live GPS streaming with rate-limited WebSockets and pub/sub broadcasting for sub-second partner telemetry updates on interactive map overlays. Packaged the entire platform with Docker Compose, Nginx reverse proxying, and comprehensive health monitoring for resilient cloud deployments.",
        },
      ],
    },
    {
      slug: "ollama-ai-event-generator",
      title: "Ollama AI Event Studio",
      image: "/images/ollama-ai-event.jpg",
      year: "2025",
      eyebrow: "Node.js • Local LLMs • TypeScript • Automated Flyers",
      githubUrl: "https://github.com/sumit8199/AI-Event-Creation-Workflow-using-OLLAMA",
      technologies: ["TypeScript", "Node.js", "Ollama LLM", "Llama 3", "LLaVA", "Express", "Jest"],
      intro: "An AI-powered backend automation engine orchestrating local Ollama multi-model inference pipelines to autonomously generate comprehensive event narratives, agendas, and production-grade promotional graphics.",
      sections: [
        {
          heading: "Multi-Model Local LLM Pipelines",
          body: "Leveraged Ollama's local inference runtime combining specialized text and vision models. Developed structured prompt pipelines that ingest raw event outlines and automatically synthesize marketing hooks, attendee prerequisites, structured schedules, and SEO-optimized HTML copy without external API costs or privacy leaks.",
        },
        {
          heading: "Automated Dynamic Graphic Generation",
          body: "Built an automated flyer compilation engine supporting multiple typographic design layouts, gradient palettes, and branding assets. Designed RESTful endpoints secured with Helmet, CORS, and strict input validation schemas, complemented by end-to-end integration tests in Jest.",
        },
      ],
    },
    {
      slug: "suvarnacare-mobile-health",
      title: "SuvarnaCare Mobile App",
      image: "/images/suvarnacare-mobile.jpg",
      year: "2025",
      eyebrow: "Angular 20 • Ionic • Mobile Health Ecosystem",
      githubUrl: "https://github.com/sumit8199/MobileApp-V1",
      technologies: ["Angular 20", "Ionic Framework", "TypeScript", "SCSS", "Node.js", "REST APIs"],
      intro: "A cross-platform mobile healthcare and patient management platform engineered with Angular 20 and Ionic, streamlining consultation bookings, health telemetry tracking, and medical record access.",
      sections: [
        {
          heading: "Modern Angular 20 & Ionic Architecture",
          body: "Architected a responsive, mobile-first experience using Angular 20's latest standalone component paradigm and Ionic Framework. Built fluid tab navigation, modular medical records dashboards, patient vitals monitoring charts, and medication reminder notifications designed for both iOS and Android viewports.",
        },
        {
          heading: "Clinical Workflow & Telemedicine Integration",
          body: "Integrated real-time scheduling for virtual doctor consultations, interactive appointment calendars, and secure patient identity verification. Coordinated backend REST microservices to securely exchange electronic medical records, laboratory diagnostic results, and instant consultation joins.",
        },
      ],
    },
    {
      slug: "student-analytics-workspace",
      title: "Student Analytics Hub",
      image: "/images/student-analytics.jpg",
      year: "2025",
      eyebrow: "React • Express 5 • PostgreSQL • Drizzle • AI",
      githubUrl: "https://github.com/sumit8199/Team-Student-Analytics-Dashboard",
      technologies: ["React", "TypeScript", "Express 5", "PostgreSQL", "Drizzle ORM", "Zod", "OpenAPI"],
      intro: "An educational performance analytics workspace featuring cohort comparative metrics, radial completion heatmaps, and automated AI diagnostic summaries for student achievement.",
      sections: [
        {
          heading: "Drizzle ORM & OpenAPI Type Safety",
          body: "Configured modern monorepo workspace with Express 5 and PostgreSQL managed via Drizzle ORM. Leveraged OpenAPI 3.1 contract specifications with Orval to automatically generate type-safe React query hooks, Zod validation schemas, and client SDKs, eliminating data drift across frontend and backend boundaries.",
        },
        {
          heading: "Cohort Visualizations & AI Actionable Insights",
          body: "Rendered interactive trajectory line graphs, radial progress rings, and multi-cohort bar charts for instant educational diagnostics. Integrated an AI performance evaluator that scans assessment scores and formulates tailored pedagogical recommendations and personalized study interventions.",
        },
      ],
    },
    {
      slug: "date-night-gaming-cafe",
      title: "Date Night Gaming Cafe",
      image: "/images/gaming-cafe.jpg",
      year: "2025",
      eyebrow: "React • TypeScript • PostgreSQL • Interactive Lounge",
      githubUrl: "https://github.com/sumit8199/Date-Night-Gaming-Cafe",
      technologies: ["React", "TypeScript", "Express 5", "PostgreSQL", "Drizzle ORM", "OpenAPI", "Zod"],
      intro: "An interactive lounge reservation and gaming experience platform allowing guests to explore tabletop and console libraries, select private booth seating, and reserve curated experience packages.",
      sections: [
        {
          heading: "Spatial Floorplan & Real-Time Booking",
          body: "Engineered an interactive floorplan visualization mapping arcade zones, board game bays, and private console booths with live availability status. Developed unified reservation state machines that prevent double-booking of physical lounge tables while calculating customized date-night combo packages.",
        },
        {
          heading: "Curated Game Catalog & Experience Add-ons",
          body: "Structured a searchable gaming database classifying game difficulty, player count, and gameplay duration. Integrated beverage platter and cocktail pairing add-ons directly into the checkout flow, backed by PostgreSQL transactions and schema-validated Express REST endpoints.",
        },
      ],
    },
    {
      slug: "campus-community-hub",
      title: "Campus Community Hub",
      image: "/images/campus-community.jpg",
      year: "2024",
      eyebrow: "MERN Stack • Real-time Collaboration",
      githubUrl: "https://github.com/sumit8199/CollegeCommunitySystem_MERN_Stack",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "REST APIs"],
      intro: "A full-stack campus collaboration platform facilitating peer-to-peer discussions, verified academic lecture notes sharing, student club announcements, and study channels.",
      sections: [
        {
          heading: "Peer Discussion & Resource Repositories",
          body: "Built role-based access control allowing students and faculty to post announcements, initiate course-specific study channels, and upload shared academic documents. Integrated note upvoting, download tracking, and categorized document search across academic departments.",
        },
        {
          heading: "Scalable Full-Stack MERN Architecture",
          body: "Structured robust Express.js backend routing with MongoDB document schemas for threaded comments, user profiles, and club memberships. Secured endpoints with JWT token validation, image storage handling, and resilient state handling in React.",
        },
      ],
    },
    {
      slug: "iot-thingsboard-dashboard",
      title: "IoT ThingsBoard Telemetry",
      image: "/images/iot-dashboard.jpg",
      year: "2025",
      eyebrow: "Nistantritech • Industrial Telemetry & GIS",
      technologies: ["ThingsBoard", "Node-RED", "OpenStreetMap", "Telemetry Streams", "Docker"],
      intro: "An enterprise IoT platform for real-time visualization of geographically distributed connected devices, featuring interactive GIS mapping, automated telemetry, and multi-tier alarm management.",
      sections: [
        {
          heading: "Interactive Mapping & Spatial Telemetry",
          body: "Integrated multiple OpenStreetMap features including search functionality, pin locator, and dynamic layer changing. The map interface allows operators to track device locations in real-time, search for specific devices across regions, and toggle between visualization layers for optimal monitoring of IoT deployments.",
        },
        {
          heading: "Alarm & Simulation Systems",
          body: "Created multiple device simulations on Node-RED for comprehensive alarm detection with configurable severity levels. Built dynamic forms in ThingsBoard actions for telemetry generation at timed intervals and image upload capabilities for device galleries, enabling proactive maintenance workflows.",
        },
      ],
    },
    {
      slug: "ai-event-platform",
      title: "AI Course & Event Studio",
      image: "/images/ai-event-platform.jpg",
      year: "2024",
      eyebrow: "Wajooba • Enterprise Generative AI",
      technologies: ["Angular", "Google Gemini", "ConvertAPI", "Node.js", "Mailgun"],
      intro: "An AI-powered enterprise platform automating event and course creation workflows with Google Gemini LLM integration, flyer generation, and streamlined content pipelines.",
      sections: [
        {
          heading: "Gemini AI Integration",
          body: "Integrated complex AI workflows with Google Gemini to auto-generate event and course assets including names, long descriptions, and HTML templates. The LLM integration cut course and event creation time by 70%, transforming a manual multi-step process into an automated intelligent workflow.",
        },
        {
          heading: "HTML-to-Image Flyer Generation",
          body: "Implemented an HTML-to-image flyer generation feature using ConvertAPI for events and courses, enabling users to convert custom HTML designs into shareable PNG or JPEG flyers with extended backend API support for long descriptions and tags.",
        },
      ],
    },
  ],
}

export const pavilionsConfig: PavilionsConfig = {
  sectionLabel: "Technical Stack & Expertise",
  skills: {
    Languages: ["TypeScript", "JavaScript", "Python", "Java", "HTML5", "CSS3 / SCSS", "SQL"],
    Frontend: ["React 19", "Next.js 15", "Angular 20", "Ionic Framework", "Tailwind CSS", "GSAP Animations"],
    Backend: ["Node.js", "Express 5", "Spring Boot", "RESTful APIs", "Microservices", "WebSockets"],
    Database: ["PostgreSQL", "MongoDB", "Redis (Distributed Locks)", "Drizzle ORM", "MySQL"],
    Software: ["Docker", "Nginx", "Postman", "Git / GitHub", "ThingsBoard", "Node-RED", "Jest"],
    Additional: [
      "Ollama (Local LLMs)",
      "Google Gemini",
      "LangChain",
      "Prompt Engineering",
      "Multi-Model AI",
      "High-Concurrency Design",
      "CI/CD Pipelines"
    ],
  },
}

export const footerConfig: FooterConfig = {
  visitLabel: "Location",
  visitLines: ["Pune, Maharashtra", "411045, India", "Open to relocation & remote"],
  connectLabel: "Connect",
  connectLinks: [
    { label: "GitHub", href: "https://github.com/sumit8199" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sumit-pingale-771641159/" },
    { label: "Email", href: "mailto:sumitpingale234@gmail.com" },
  ],
  brandName: "SUMIT",
  rightsText: "Sumit Pingale 2025. All rights reserved.",
  coordinatesText: "18.5204° N, 73.8567° E",
}
