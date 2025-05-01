import { ChatMessage } from "../types/ChatMessage";
import { NAME_BOT, URL_BLANK_AVATAR, URL_BOT_AVATAR } from "./globalConstants";

export const PLACEHOLDER_MESSAGES: ChatMessage[] = [
  {
    id: "one",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content: `👋 Welcome to my portfolio! My name is ${NAME_BOT}. Before we get started, tell me a little about yourself.`,
  },
  {
    id: "two",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "I’m a recruiter.",
  },
  {
    id: "three",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content: "That's great! Are you looking for a specific skill set?",
  },
  {
    id: "four",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "Yes, I’m looking for a front-end developer.",
  },
  {
    id: "five",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content:
      "Awesome! I specialize in front-end development. Let me show you some projects.",
  },
  {
    id: "six",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "What technologies do you use?",
  },
  {
    id: "seven",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content: "I primarily work with React, TypeScript, and Preact.",
  },
  {
    id: "eight",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "Do you have experience with responsive design?",
  },
  {
    id: "nine",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content:
      "Yes, I ensure all my projects are mobile-friendly and responsive.",
  },
  {
    id: "ten",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "Can you tell me about your most challenging project?",
  },
  {
    id: "eleven",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content:
      "Sure! I once built a real-time chat app with WebSocket integration.",
  },
  {
    id: "twelve",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "That sounds interesting! What was the hardest part?",
  },
  {
    id: "thirteen",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content:
      "The hardest part was ensuring scalability and handling edge cases.",
  },
  {
    id: "fourteen",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "What’s your favorite project so far?",
  },
  {
    id: "fifteen",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content:
      "My favorite project is this portfolio! It’s a blend of creativity and functionality.",
  },
  {
    id: "sixteen",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "Do you work well in teams?",
  },
  {
    id: "seventeen",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content: "Absolutely! I enjoy collaborating and learning from others.",
  },
  {
    id: "eighteen",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "What’s your approach to problem-solving?",
  },
  {
    id: "nineteen",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content:
      "I break problems into smaller tasks and tackle them systematically.",
  },
  {
    id: "twenty",
    avatarUrl: URL_BLANK_AVATAR,
    author: "You",
    content: "Thank you for sharing! I’ll review your portfolio further.",
  },
  {
    id: "twenty-one",
    avatarUrl: URL_BOT_AVATAR,
    author: NAME_BOT,
    content: "Thank you! Feel free to reach out if you have any questions.",
  },
];
