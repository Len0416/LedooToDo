export type Task = {
  id: string;
  title: string;
  date?: string;
  important?: boolean;
  completed?: boolean;
  notes?: string;
  list?: string;
};
