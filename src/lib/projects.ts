import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "voice-ai-agent",
    title: "AI Voice Agent",
    description:
      "A conversational AI that handles inbound and outbound phone calls with human-like responsiveness. Built from zero to one as PM — qualifies leads, schedules appointments, provides product information, and routes to human agents when needed.",
    tags: ["Voice AI", "Product Management", "0-to-1"],
    status: "live",
    websiteUrl: "https://docs.adya.ai/s/home/doc/ai-voice-agent-DaIEBcRN4A",
    socialProofUrl: "https://www.linkedin.com/posts/adyadotai_ai-voiceai-callautomation-activity-7363224237387468800-qYHu",
    previewImage: "/images/voice-agent-thumb.svg",
    featured: true,
  },
  {
    id: "recruitment-tracker",
    title: "Recruitment Tracker",
    description:
      "A personal productivity tool for managing the job search. A beautifully designed dashboard to track every application, interview stage, deadline, and outcome — all in one place. No sign-up, no sync, just open and go.",
    tags: ["Productivity", "No-code", "Design"],
    status: "live",
    websiteUrl: "https://medha-job-dashboard.lovable.app/",
    downloadFile: "/recruitment-tracker.html",
    caseStudySlug: "recruitment-tracker",
    previewImage: "/images/recruitment-tracker-thumb.svg",
    featured: true,
  },
  {
    id: "vc-agent",
    title: "VC Pitch Screening Agent",
    description:
      "Multi-agent AI pipeline that automates pitch deck screening for early-stage VCs. Built with Claude API, Tavily, and a two-pass PDF parser — produces structured investment memos with PASS / REVIEW / ARCHIVE decisions.",
    tags: ["Generative AI", "Multi-Agent", "Claude API"],
    status: "live",
    websiteUrl: "https://insidersden.vercel.app/",
    liveUrl: "https://github.com/ojhamedha23-code/vc-agent",
    caseStudySlug: "vc-agent",
    previewImage: "/images/vc-agent-thumb.svg",
    featured: true,
  },
  {
    id: "hr-attrition-ml",
    title: "HR Attrition Prediction",
    description:
      "ML pipeline to predict which employees are at risk of leaving, using the IBM HR Analytics dataset. Achieved AUC 0.86 using LightGBM with behavioural feature engineering — estimated $8–12M in potential annual HR cost savings.",
    tags: ["Machine Learning", "Python", "LightGBM"],
    status: "live",
    liveUrl: "https://github.com/ojhamedha23-code/hr-attrition-prediction",
    caseStudySlug: "hr-attrition-ml",
    previewImage: "/images/attrition-ml-thumb.svg",
    featured: true,
  },
];
