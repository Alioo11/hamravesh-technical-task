import axios from "axios";
import type { ITask } from "@/types/task";

interface taskBodyContent extends Omit<ITask, "id" | "userId"> {}

const createTask = async (body: taskBodyContent): Promise<void> => {
  const response = await axios.post<void>("api/task", {
    data: body,
  });

  return response.data;
};

export default createTask;
