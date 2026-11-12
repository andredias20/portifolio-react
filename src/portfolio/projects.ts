import type { ComponentType } from "react";
import type { Localized } from "./content";
export interface PortfolioProject {
  slug: string;
  title: Localized;
  description: Localized;
  tags: string[];
  status: Localized;
  Page: ComponentType<{ language: "pt" | "en" }>;
}
const modules = import.meta.glob<{ default: PortfolioProject }>(
  "../personal-projects/*/index.tsx",
  { eager: true },
);
export const projects = Object.values(modules).map((module) => module.default);
