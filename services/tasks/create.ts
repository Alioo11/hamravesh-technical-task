import axios from "axios";
import type { ITask } from "@/types/task";

interface taskBodyContent extends Omit<ITask, "id" | "userId"> {}

const createTask = async (body: taskBodyContent): Promise<void> => {
  const response = await axios.get<void>("api/task", {
    method: "POST",
    data: body,
  });

  return response.data;
};

export default createTask;
