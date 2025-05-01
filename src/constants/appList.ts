import { AppShowcaseItem } from "../types/AppShowcaseItem";
import { URL_ICON_PROFFY, URL_VID_PROFFY } from "./globalConstants";

export const APP_LIST: AppShowcaseItem[] = [
  {
    name: "Proffy AI",
    shortDescription: "AI study tutor + flash cards app",
    description:
      "An AI study tutor + flash cards app for iOS. Take a picture of a homework problem and get answers. Take a picture of your notes, get flash cards. It is written in SwiftUI.",
    year: "2025",
    videoUrl: URL_VID_PROFFY,
    iconUrl: URL_ICON_PROFFY,
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6742863940" },
    ],
  },
  // {
  //   name: "NekoFocus",
  //   shortDescription: "Cat themed focus app",
  //   description:
  //     "Cat themed productivity app + pomodoro timer. Built with SwiftUI and used SpriteKit for animations. Gained users through TikTok + in person events.",
  //   year: "2025",
  //   videoUrl: "https://www.youtube.com/watch?v=2e8v4g0j7xA",
  //   iconUrl: CDN_ROOT_URL + "nekotimer/icon-64x64.jpg",
  //   links: [
  //     { label: "Website", url: "https://proffy.ai" },
  //     { label: "App Store", url: "https://apps.apple.com/app/id1234567890" },
  //     { label: "GitHub", url: "" },
  //   ],
  // },
  // {
  //   name: "Rocket Pixels",
  //   shortDescription: "Rocket themed mobile game",
  //   description: "A rocket and asteroid themed runner game made with Godot.",
  //   year: "2024",
  //   videoUrl: "https://www.youtube.com/watch?v=example1",
  //   iconUrl: CDN_ROOT_URL + "tasktamer/icon-64x64.jpg",
  //   links: [
  //     { label: "Website", url: "https://tasktamer.com" },
  //     { label: "App Store", url: "https://apps.apple.com/app/id1234567891" },
  //     { label: "GitHub", url: "https://github.com/example/tasktamer" },
  //   ],
  // },
  // {
  //   name: "DuckBlock",
  //   shortDescription: "App blocker focus app",
  //   description: "An app that blocks other apps so you can keep focus",
  //   year: "2024",
  //   videoUrl: "https://www.youtube.com/watch?v=example2",
  //   iconUrl: CDN_ROOT_URL + "fittrack/icon-64x64.jpg",
  //   links: [
  //     { label: "Website", url: "https://fittrack.com" },
  //     { label: "App Store", url: "https://apps.apple.com/app/id1234567892" },
  //     { label: "GitHub", url: "https://github.com/example/fittrack" },
  //   ],
  // },
];
