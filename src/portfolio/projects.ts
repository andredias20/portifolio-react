import { lazy, type ComponentType } from "react";
import type { Language, Localized } from "./content";
export interface ProjectMetadata {
  slug: string;
  title: Localized;
  description: Localized;
  tags: string[];
  status: Localized;
  preview?: string;
}
export interface PortfolioProject extends ProjectMetadata {
  Page: ComponentType<{ language: Language }>;
}
const metadata = import.meta.glob<{ default: ProjectMetadata }>(
  "../personal-projects/*/metadata.ts",
  { eager: true },
);
const pages = import.meta.glob<{
  default: ComponentType<{ language: Language }>;
}>("../personal-projects/*/Page.tsx");
export const projects: PortfolioProject[] = Object.entries(metadata).map(
  ([path, module]) => {
    const load = pages[path.replace("/metadata.ts", "/Page.tsx")];
    if (!load) throw new Error(`Missing project page: ${module.default.slug}`);
    return { ...module.default, Page: lazy(load) };
  },
);
