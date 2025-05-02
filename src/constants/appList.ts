import { AppShowcaseItem } from "../types/AppShowcaseItem";
import {
  URL_ICON_ASR,
  URL_ICON_DUCK_BLOCK,
  URL_ICON_JOTTER,
  URL_ICON_JUST_FOCUS,
  URL_ICON_NEKO_FOCUS,
  URL_ICON_PROFFY,
  URL_ICON_ROCKET_PIXELS,
  URL_VID_ASR,
  URL_VID_DUCK_BLOCK,
  URL_VID_JOTTER,
  URL_VID_JUST_FOCUS,
  URL_VID_NEKO_FOCUS,
  URL_VID_PROFFY,
  URL_VID_ROCKET_PIXELS,
} from "./globalConstants";

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
  {
    name: "NekoFocus",
    shortDescription: "Cat themed focus app",
    description:
      "A cat themed productivity app + pomodoro timer. Built with SwiftUI and used SpriteKit for animations. Gained users through TikTok + in person events.",
    year: "2025",
    videoUrl: URL_VID_NEKO_FOCUS,
    iconUrl: URL_ICON_NEKO_FOCUS,
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6737785097" },
    ],
  },
  {
    name: "Rocket Pixels",
    shortDescription: "Rocket themed iOS game",
    description: "A rocket and asteroid themed runner game made with Godot.",
    year: "2024",
    videoUrl: URL_VID_ROCKET_PIXELS,
    iconUrl: URL_ICON_ROCKET_PIXELS,
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6701996449" },
    ],
  },
  {
    name: "Jotter",
    shortDescription: "Lightning fast note taking app",
    description:
      "A note taking app with a focus on keyboard shortcuts and speed. Built with electron JS, mainly for MacOS. It works by being an overlay over your screen when needed.",
    year: "2024",
    videoUrl: URL_VID_JOTTER,
    iconUrl: URL_ICON_JOTTER,
    links: [
      {
        label: "Github",
        url: "https://github.com/fDirham/electron-Jotter-quick_note_taking",
      },
    ],
  },
  {
    name: "DuckBlock",
    shortDescription: "App blocking focus app",
    description:
      "An app that blocks other apps on a schedule so you can focus. It works by grouping apps into block groups then assigning a block schedule. Built with Swift.",
    year: "2024",
    videoUrl: URL_VID_DUCK_BLOCK,
    iconUrl: URL_ICON_DUCK_BLOCK,
    links: [
      {
        label: "Github",
        url: "https://github.com/fDirham/iOS-DuckBlock-app_blocking",
      },
    ],
  },
  {
    name: "Just Focus",
    shortDescription: "Pomodoro timer in your mac menu bar",
    description:
      "A native mac OS app that is a pomodoro timer in your menu bar. It is a simple timer that you can start and stop. Built with Swift.",
    year: "2024",
    videoUrl: URL_VID_JUST_FOCUS,
    iconUrl: URL_ICON_JUST_FOCUS,
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/id6615067696" },
    ],
  },
  {
    name: "AppStore Researcher",
    shortDescription: "An app research tool",
    description:
      "A native mac OS app that scrapes app store data. Used to conduct competitor research. Built with Swift.",
    year: "2024",
    videoUrl: URL_VID_ASR,
    iconUrl: URL_ICON_ASR,
    links: [
      {
        label: "Github",
        url: "https://github.com/fDirham/macOS-ASR-app_store_researcher",
      },
    ],
  },
];
