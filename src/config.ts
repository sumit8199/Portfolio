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
  sections: ExhibitionArticleSection[]
}

export interface ExhibitionsConfig {
  sectionLabel: string
  countLabel: string
  detailBackText: string
  items: ExhibitionItem[]
}

export interface PavilionVideoItem {
  src: string
  caption: string
}

export interface PavilionsConfig {
  sectionLabel: string
  skills: Skills
  // videos: PavilionVideoItem[]
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
  siteTitle: "Sumit Pingale | Full Stack Developer",
  siteDescription: "Portfolio of Sumit Pingale — Full Stack Developer specializing in Angular, React, Node.js, and AI integration. Building impactful digital experiences.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "Sumit Pingale",
  links: [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
}

export const heroConfig: HeroConfig = {
  titleLines: ["SUMIT", "PINGALE"],
  subtitle: "FULL STACK DEVELOPER",
}

export const manifestoConfig: ManifestoConfig = {
  headingText: "Building Digital Impact",
  bodyText: "A strong enthusiasm for creating impactful software solutions drives everything I build. With a solid foundation in full-stack development and hands-on experience enhancing user experiences, I implement innovative features and streamline processes. From AI-powered automation to IoT dashboards, I deliver technology that fosters growth and engagement. Skilled in Angular, React, Node.js, and LLM integration, I take a proactive approach to every challenge.",
  videoPath: "/videos/manifesto-code.mp4",
}

export const exhibitionsConfig: ExhibitionsConfig = {
  sectionLabel: "Selected Work",
  countLabel: "Projects",
  detailBackText: "Back to Projects",
  items: [
    {
      slug: "iot-thingsboard-dashboard",
      title: "IoT Thingsboard Dashboard",
      image: "/images/iot-dashboard.jpg",
      year: "2025",
      eyebrow: "Nistantritech PVT LTD",
      intro: "An end-to-end IoT dashboard built in Thingsboard for real-time visualization of connected devices, featuring interactive maps, alarm management, and device simulations.",
      sections: [
        {
          heading: "Interactive Mapping",
          body: "Integrated multiple OpenStreetMap features including search functionality, pin locator, and dynamic layer changing. The map interface allows operators to track device locations in real-time, search for specific devices across regions, and toggle between different visualization layers for optimal monitoring of IoT deployments across large geographic areas.",
        },
        {
          heading: "Alarm & Simulation Systems",
          body: "Created multiple device simulations on Node-RED for comprehensive alarm detection with configurable severity levels. Built dynamic forms in ThingsBoard actions for telemetry generation at timed intervals and image upload capabilities for device galleries. This enabled proactive maintenance workflows and rich device data visualization for operations teams.",
        },
      ],
    },
    {
      slug: "ai-event-platform",
      title: "AI Event & Course Platform",
      image: "/images/ai-event-platform.jpg",
      year: "2024",
      eyebrow: "Wajooba Private Limited",
      intro: "An AI-powered platform automating event and course creation with Gemini integration, flyer generation, and streamlined content management workflows.",
      sections: [
        {
          heading: "Gemini AI Integration",
          body: "Integrated complex AI workflows with Google Gemini to auto-generate event and course assets including names, long descriptions, and HTML templates. This reduced manual input significantly, accelerated event and course setup timelines, and enabled consistent, high-quality content generation. The LLM integration cut course and event creation time by 70%, transforming a manual multi-step process into an automated intelligent workflow.",
        },
        {
          heading: "HTML-to-Image Flyer Generation",
          body: "Implemented an HTML-to-image flyer generation feature using ConvertAPI for events and courses, enabling users to convert custom HTML designs into shareable PNG or JPEG flyers. Extended backend APIs by introducing support for additional fields including long descriptions, tags, and template HTML. This improved content management flexibility, enabling richer event pages and customizable flyer generation for marketing teams.",
        },
      ],
    },
    {
      slug: "crm-email-integration",
      title: "CRM & Email Integration",
      image: "/images/crm-integration.jpg",
      year: "2024",
      eyebrow: "Wajooba Private Limited",
      intro: "Seamless CRM integration with multiple email providers and external websites, automating document workflows and communication pipelines.",
      sections: [
        {
          heading: "Multi-Provider Email Integration",
          body: "Integrated multiple email providers including Gmail, Outlook, and Zoho, enabling admins to communicate with their users directly through personalized email channels. This optimized admin communication efficiency by 25% and provided a unified messaging experience. Built comprehensive email templates with Mailgun for reliable delivery and consistent branding across all customer touchpoints.",
        },
        {
          heading: "API Synchronization & Automation",
          body: "Implemented seamless integration between CRM and external websites by handling multiple POST and GET API calls to synchronize user data. Developed automated document workflows using Plumsail for contract generation and document management. This created a connected ecosystem where data flows bidirectionally between the CRM and external platforms without manual intervention.",
        },
      ],
    },
    {
      slug: "onboarding-user-management",
      title: "Onboarding & User Platform",
      image: "/images/onboarding-flow.jpg",
      year: "2023",
      eyebrow: "Wajooba Private Limited",
      intro: "An innovative onboarding system and user management platform that streamlined tenant registration, improved user engagement, and enhanced administrative control.",
      sections: [
        {
          heading: "Revolutionary Onboarding Flow",
          body: "Developed a seamless and innovative onboarding process for new tenants on the app, delivering an enhanced and engaging user experience. The new multi-step onboarding flow reduced onboarding time by 40% through progressive profiling, guided setup wizards, and contextual help. This transformation turned user registration from a friction point into a delightful first impression that improved retention rates.",
        },
        {
          heading: "Advanced User Management",
          body: "Implemented advanced contact management and user categorization features, enabling streamlined organization and improved accessibility. Introduced a powerful preview feature enabling admins to seamlessly access user profiles and interact with external websites directly through the admin dashboard. Resolved 40+ critical bugs across features, increasing overall platform performance by 15% and ensuring optimal user satisfaction.",
        },
      ],
    },
  ],
}

export const pavilionsConfig: PavilionsConfig = {
  sectionLabel: "Technical Skills",
  skills: {
    Languages: ["JavaScript", "TypeScript"],
    Frontend: ["Angular", "React"],
    Backend: ["Node.js", "Express.js"],
    Database: ["MongoDB"],
    Software: ["Postman", "API Dog"],
    Additional: [
      "ThingsBoard",
      "JIRA",
      "Prompt Engineering",
      "LLM Integration",
      "GitLab",
      "Problem Solving",
    ],
  },
}

export const footerConfig: FooterConfig = {
  visitLabel: "Location",
  visitLines: ["Pune, Maharashtra", "411045, India", "Open to relocation"],
  connectLabel: "Connect",
  connectLinks: [
    { label: "GitHub", href: "https://github.com/sumit8199" },
    { label: "LinkedIn", href: "www.linkedin.com/in/sumit-pingale-771641159" },
    { label: "Email", href: "mailto:sumitpingale234@gmail.com" },
  ],
  brandName: "SP",
  rightsText: "Sumit Pingale 2025. All rights reserved.",
  coordinatesText: "18.5204 N, 73.8567 E",
}
