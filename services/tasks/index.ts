import createTask from "./create";
import getTaskList from "./list";

class TaskService {
  static list = getTaskList;
  static create = createTask;
}

export default TaskService;
