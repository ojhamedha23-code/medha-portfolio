import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "recruitment-tracker",
    title: "Recruitment Tracker",
    description:
      "My personal productivity tool for managing the job search. A beautifully designed dashboard to track every application, interview stage, deadline, and outcome — all in one place. No sign-up, no sync, just download and go.",
    tags: ["productivity", "tool", "design"],
    status: "download",
    downloadFile: "/recruitment-tracker.html",
    livePreviewUrl: "/recruitment-tracker.html",
    caseStudySlug: "recruitment-tracker",
    previewImage: "/images/recruitment-tracker-thumb.jpg",
    featured: true,
  },
  {
    id: "vc-agent",
    title: "VC Pitch Screening Agent",
    description:
      "Multi-agent AI pipeline that automates pitch deck screening for early-stage VCs. Built with Claude API, Tavily, and a two-pass PDF parser — produces structured investment memos with PASS/REVIEW/ARCHIVE decisions. INSEAD Gen AI capstone project.",
    tags: ["Generative AI", "Multi-Agent", "Claude API", "Python"],
    status: "live",
    liveUrl: "https://github.com/ojhamedha23-code/vc-agent",
    caseStudySlug: "vc-agent",
    previewImage: "/images/vc-agent-thumb.jpg",
    featured: true,
  },
  {
    id: "blackbuck-voice-agent",
    title: "BlackBuck Voice AI Agent",
    description:
      "Outbound voice AI agent for India's largest trucking marketplace. Calls drivers in Hindi/Hinglish after delivery to offer matched return-leg loads — capturing booking decisions in under 3 minutes. Built on a no-code voice AI platform.",
    tags: ["Voice AI", "Logistics", "Product Design"],
    status: "live",
    liveUrl: "https://github.com/ojhamedha23-code/blackbuck-voice-agent-teardown",
    caseStudySlug: "blackbuck-voice-agent",
    previewImage: "/images/blackbuck-voice-thumb.jpg",
    featured: false,
  },
  {
    id: "hr-attrition-ml",
    title: "HR Attrition Prediction",
    description:
      "ML pipeline to predict which employees are at risk of leaving, using the IBM HR Analytics dataset. Achieved AUC 0.86 using LightGBM with behavioural feature engineering — estimated $8–12M in potential annual HR cost savings.",
    tags: ["machine learning", "Python", "INSEAD"],
    status: "live",
    liveUrl: "https://github.com/ojhamedha23-code/hr-attrition-prediction",
    caseStudySlug: "hr-attrition-ml",
    previewImage: "/images/attrition-ml-thumb.jpg",
    featured: true,
  },
];
