export type AppShowcaseItem = {
  name: string;
  shortDescription: string;
  description: string;
  iconUrl: string;
  year: string;
  videoUrl: string;
  links: { [label: string]: string }[];
  isVideoHorizontal: boolean;
};
