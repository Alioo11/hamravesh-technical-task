import { Card, Flex, Typography } from "antd";
import { Else, If, Then } from "@/components/kits/ConditonalRendering";
import TaskCard from "./Card";
import type { FC } from "react";
import type { ITask } from "@/types/task";

interface TaskGroupProps {
  tasks: Array<ITask>;
  title: string;
}

const TaskGroup: FC<TaskGroupProps> = (props) => {
  const { tasks, title } = props;

  const isEmpty = tasks.length === 0;

  return (
    <Card
      styles={{ header: { borderBottom: "solid 1px grey" } }}
      title={title}
      style={{ minWidth: 300, height: "fit-content" }}
    >
      <If condition={isEmpty}>
        <Then>
          <Typography style={{ color: "grey" }}>Empty</Typography>
        </Then>
        <Else>
          <Flex gap={10} vertical style={{ overflowX: "auto", maxHeight: 550 }}>
            {tasks.map((task) => {
              return <TaskCard task={task} key={task.id} />;
            })}
          </Flex>
        </Else>
      </If>
    </Card>
  );
};

export default TaskGroup;
