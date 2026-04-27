export const HOME_SECTION_IDS = [
  "hero",
  "experience",
  "skills",
  "academics",
  "about",
  "contact",
] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];
