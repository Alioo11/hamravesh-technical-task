import TaskGroup from "@/components/Task/Group";
import TaskOverlay from "@/components/Task/Overlay";
import { DEBOUNCE_TIMEOUT_IN_MS } from "@/constants";
import useToggle from "@/hooks/useToggle";
import TaskService from "@/services/tasks";
import { ITask } from "@/types/task";
import { Button, Flex, Input } from "antd";
import { useEffect, useMemo, useRef, useState } from "react";
import { Nullable } from "ts-wiz";

const TasksPage = () => {
  const [search, setSearch] = useState<ITask["title"]>("");
  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [isOpenOverlay, toggleOpenOverlay] = useToggle(false);

  const timeoutId = useRef<Nullable<NodeJS.Timeout>>(null);
  const hasMounted = useRef<boolean>(false);

  const fetchTasks = async () => {
    try {
      const tasks = await TaskService.list({ search });
      setTasks(tasks);
    } catch (err) {
      console.log(err);
    }
  };

  const todoTasks = useMemo(() => tasks.filter((task) => task.status === "todo"), [tasks]);
  const doingTasks = useMemo(() => tasks.filter((task) => task.status === "doing"), [tasks]);
  const doneTasks = useMemo(() => tasks.filter((task) => task.status === "done"), [tasks]);

  const clearSearchTimeout = () => {
    if (timeoutId.current === null) return;
    clearTimeout(timeoutId.current);
    timeoutId.current = null;
  };


  const createTaskCb = ()=>{
    fetchTasks();
    toggleOpenOverlay();
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (!hasMounted.current) hasMounted.current = true;
    else {
      timeoutId.current = setTimeout(fetchTasks, DEBOUNCE_TIMEOUT_IN_MS);
      return clearSearchTimeout;
    }
  }, [search]);

  return (
    <>
      <TaskOverlay open={isOpenOverlay} toggle={toggleOpenOverlay} onCreate={createTaskCb} />
      <Flex vertical gap={10}>
        <Flex gap={20} justify="space-between">
          <Input
            variant="outlined"
            placeholder="search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: 400 }}
          />
          <Button onClick={toggleOpenOverlay}>Create New Task</Button>
        </Flex>
        <Flex gap={10} style={{ overflowY: "auto" }}>
          <TaskGroup tasks={todoTasks} title="To-Do" />
          <TaskGroup tasks={doingTasks} title="Doing" />
          <TaskGroup tasks={doneTasks} title="Done" />
        </Flex>
      </Flex>
    </>
  );
};

export default TasksPage;
