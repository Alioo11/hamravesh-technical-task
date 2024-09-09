
import { Card, Flex, Typography } from "antd";
import TaskCard from "./Card";
import { Else, If, Then } from "@/components/kits/ConditonalRendering";
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
    <Card color="primary" title={title} bordered={false} style={{minWidth:300}}>
      <If condition={isEmpty}>
        <Then>
          <Typography style={{color:"grey"}}>empty</Typography>
        </Then>
        <Else>
          <Flex gap={10} vertical style={{overflowX:"auto", maxHeight:600}}>
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
