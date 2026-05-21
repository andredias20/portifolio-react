export type StackCategory = "Backend" | "Banco" | "InfraDevOps" | "Frontend";

export interface StackItem {
  name: string;
  level?: "principal" | "forte" | "intermediario";
}

export type StackByCategory = Record<StackCategory, StackItem[]>;
