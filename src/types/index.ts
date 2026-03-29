export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "download";
  liveUrl?: string;
  downloadFile?: string;
  caseStudySlug?: string;
  previewImage?: string;
  featured: boolean;
}

export interface WorkEntry {
  role: string;
  company: string;
  dateRange: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface CaseStudyMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  showInListing?: boolean;
  previewImage?: string;
  context?: string;
}
