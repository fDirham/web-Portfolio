import { AppShowcaseItem } from "./AppShowcaseItem";

export type ChatMessage = {
  id: string;
  avatarUrl: string;
  author: string;
  content: string;
  appShowcaseItem?: AppShowcaseItem;
};
