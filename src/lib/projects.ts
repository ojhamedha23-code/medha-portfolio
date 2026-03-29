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
