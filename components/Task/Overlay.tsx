import { type FC, useState } from "react";
import { Flex, Input, Modal, Select } from "antd";
import TaskService from "@/services/tasks";
import type { ITask } from "@/types/task";
import type { NoneToVoidFunction } from "ts-wiz";

interface taskOverlayProps {
  open: boolean;
  toggle: NoneToVoidFunction;
  onCreate: NoneToVoidFunction;
}

const taskStatusOptions: Array<ITask["status"]> = ["todo", "doing", "done"];

const TaskOverlay: FC<taskOverlayProps> = (props) => {
  const { open, toggle, onCreate } = props;
  const [title, setTitle] = useState<ITask["title"]>("");
  const [status, setStatus] = useState<ITask["status"]>("todo");

  const resetForm = () => {
    setTitle("");
    setStatus("todo");
  };

  const handleCreateTask = async () => {
    try {
      await TaskService.create({ status, title });
      resetForm();
      onCreate();
    } catch (err) {
      console.error("failed to create new task.");
    }
  };

  return (
    <Modal
      centered
      title="Create New Task"
      open={open}
      onCancel={toggle}
      onOk={handleCreateTask}
      okText="Create"
      okButtonProps={{ disabled: title.trim().length === 0 }}
    >
      <Flex vertical gap={10}>
        <Input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Select<ITask["status"]> value={status} onChange={(newStatus) => setStatus(newStatus)}>
          {taskStatusOptions.map((status) => (
            <Select.Option key={status} value={status}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Select.Option>
          ))}
        </Select>
      </Flex>
    </Modal>
  );
};

export default TaskOverlay;
