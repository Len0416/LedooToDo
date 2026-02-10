import type { Task } from "./Task.ts"

export type List = {
  id: string;
  name: string;
  tasks: Task[];
}