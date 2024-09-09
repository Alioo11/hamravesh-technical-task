type TaskStatus = "todo" | "doing" | "done";

export interface ITask {
  userId: number;
  id: number;
  title: string;
  status: TaskStatus;
}
