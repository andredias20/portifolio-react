import type { Language } from "./content";
export const serverCrashThreshold = 10;
export function shouldCrashServer(clicks: number) {
  return clicks > serverCrashThreshold;
}
export function getQuitMessage(language: Language, date = new Date()) {
  const weekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
  }).format(date);
  if (weekday === "Fri")
    return language === "pt"
      ? "Quem fez, fez. Quem não fez, não faz mais"
      : "What’s done is done. What isn’t done isn’t getting done now.";
  return language === "pt"
    ? "Por hoje chega. Bora pedalar?"
    : "That’s enough for today. Shall we go for a ride?";
}
