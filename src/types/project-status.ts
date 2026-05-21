export const PROJECT_STATUS = {
  InProgress: "InProgress",
  Finished: "Finished",
  Staging: "Staging",
  Production: "Production",
} as const;

export type ProjectStatus =
  (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];
