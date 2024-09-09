import axios from "axios";
import type { ITask } from "@/types/task";
import type { Nullable } from "ts-wiz";

interface taskListParams {
  search?: Nullable<ITask["title"]>;
}

const getTaskList = async (params: taskListParams = {}): Promise<Array<ITask>> => {
  const response = await axios.get<Array<ITask>>("api/task", {
    params: params,
  });

  return response.data;
};

export default getTaskList;
