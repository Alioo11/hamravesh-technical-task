import fs from "fs";
import path from "path";
import type { ITask } from "@/types/task";
import type { NextApiRequest, NextApiResponse } from "next";

const tasksFilePath = path.join(process.cwd(), "data/tasks.json");

const handleGetTasks = (req: NextApiRequest, res: NextApiResponse<Array<ITask>>) => {
  try {
    const search = req.query.search as string | "";
    const tasksJSON = fs.readFileSync(tasksFilePath, "utf8");
    const tasks = JSON.parse(tasksJSON) as Array<ITask>;

    const filteredTasks = tasks.filter((task) => task.title.includes(search));
    res.send(filteredTasks);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const handleCreateTasks = (req: NextApiRequest, res: NextApiResponse<Array<ITask>>) => {
  try {
    const body = req.body;
    const tasksJSON = fs.readFileSync(tasksFilePath, "utf8");
    const tasks = JSON.parse(tasksJSON) as Array<ITask>;

    const newTask: ITask = {
      id: Math.floor(Math.random() * 1000), // dummy id and userId
      userId: Math.floor(Math.random() * 1000),
      title: body.title,
      status: body.status,
    };

    fs.writeFileSync(tasksFilePath, JSON.stringify([...tasks, newTask]), "utf8");

    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse<Array<Transaction>> }res
 *
 * @description dummy api to return mock todo data :)
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Array<ITask>>) {
  if (req.method === "GET") return handleGetTasks(req, res);
  if (req.method === "POST") return handleCreateTasks(req, res);
}
