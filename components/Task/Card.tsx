import { Card } from "antd";
import type { ITask } from "@/types/task";
import type { FC } from "react";

const TaskCard: FC<{ task: ITask }> = (props) => {
  const { task } = props;
  return <Card>{task.title}</Card>;
};

export default TaskCard;
