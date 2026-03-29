import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "recruitment-tracker",
    title: "Recruitment Tracker",
    description:
      "A beautifully designed job application dashboard that helps you track every application, interview, and outcome in one place.",
    tags: ["tool", "productivity"],
    status: "download",
    downloadFile: "/recruitment-tracker.html",
    caseStudySlug: "recruitment-tracker",
    previewImage: "/images/recruitment-tracker.png",
    featured: true,
  },
  {
    id: "ravi-wordle",
    title: "Ravi Wordle",
    description:
      "A custom Wordle game with a personal word pool — built as a gift.",
    tags: ["game", "gift"],
    status: "live",
    liveUrl: "https://ojhamedha23-code.github.io/ravi-wordle/",
    previewImage: "/images/ravi-wordle.png",
    featured: true,
  },
  {
    id: "tictactoe",
    title: "Tic Tac Toe",
    description:
      "Two-player Tic Tac Toe with score tracking. No setup, just open and play.",
    tags: ["game"],
    status: "download",
    downloadFile: "/games/tictactoe.html",
    previewImage: "/images/tictactoe.png",
    featured: false,
  },
  {
    id: "snake",
    title: "Snake Game",
    description: "A personalised Snake game built as a gift.",
    tags: ["game", "gift"],
    status: "download",
    downloadFile: "/games/snake.html",
    previewImage: "/images/snake.png",
    featured: false,
  },
];
