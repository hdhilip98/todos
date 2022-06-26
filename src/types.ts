export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export type Mode = "preview" | "edit";
export type Filter = "all" | "completed" | "active";
