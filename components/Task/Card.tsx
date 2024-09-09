import { Card } from "antd";
import { TRUNCATE_TEXT_LENGTH } from "@/constants";
import type { ITask } from "@/types/task";
import type { FC } from "react";

const TaskCard: FC<{ task: ITask }> = (props) => {
  const { task } = props;
  const isLargeContent = task.title.length > TRUNCATE_TEXT_LENGTH;
  const content = isLargeContent ? task.title.slice(0, TRUNCATE_TEXT_LENGTH).concat("...") : task.title;
  return <Card>{content}</Card>;
};

export default TaskCard;
