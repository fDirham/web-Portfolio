import { AppShowcaseItem } from "../types/AppShowcaseItem";
import { CDN_ROOT_URL } from "./globalConstants";

export const APP_LIST: AppShowcaseItem[] = [
  {
    name: "Proffy AI",
    shortDescription: "AI flash cards app",
    description:
      "Cat themed productivity app. Built with SwiftUI. Drove users through TikTok + in person events.",
    year: "2025",
    videoUrl: "https://www.youtube.com/watch?v=2e8v4g0j7xA",
    iconUrl: CDN_ROOT_URL + "snapexplain/icon-64x64.jpg",
    links: [
      { label: "Website", url: "https://proffy.ai" },
      { label: "App Store", url: "https://apps.apple.com/app/id1234567890" },
      { label: "GitHub", url: "" },
    ],
  },
  {
    name: "NekoFocus",
    shortDescription: "Cat themed focus app",
    description:
      "Cat themed productivity app. Built with SwiftUI. Drove users through TikTok + in person events.",
    year: "2025",
    videoUrl: "https://www.youtube.com/watch?v=2e8v4g0j7xA",
    iconUrl: CDN_ROOT_URL + "nekotimer/icon-64x64.jpg",
    links: [
      { label: "Website", url: "https://proffy.ai" },
      { label: "App Store", url: "https://apps.apple.com/app/id1234567890" },
      { label: "GitHub", url: "" },
    ],
  },
];
