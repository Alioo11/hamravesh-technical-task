import fs from "fs";
import path from "path";
import type { ITask } from "@/types/task";
import type { NextApiRequest, NextApiResponse } from "next";

const tasksFilePath = path.join(process.cwd(), "data/tasks.json");

type errorResponse = {
  message: string;
};

const handleGetTasks = (req: NextApiRequest, res: NextApiResponse<Array<ITask> | errorResponse>) => {
  try {
    const search = req.query.search as string || "";
    const tasksJSON = fs.readFileSync(tasksFilePath, "utf8");
    const tasks = JSON.parse(tasksJSON) as Array<ITask>;
    const filteredTasks = tasks.filter((task) => task.title.toLowerCase().includes(search.toLowerCase()));

    res.status(200).json(filteredTasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wen't wrong" });
  }
};

const handleCreateTasks = (req: NextApiRequest, res: NextApiResponse<ITask | errorResponse>) => {
  try {
    const bodyData = req.body.data;
    const tasksJSON = fs.readFileSync(tasksFilePath, "utf8");
    const tasks = JSON.parse(tasksJSON) as Array<ITask>;

    const newTask: ITask = {
      id: Math.floor(Math.random() * 1000), // dummy id and userId
      userId: Math.floor(Math.random() * 1000),
      title: bodyData.title,
      status: bodyData.status,
    };

    fs.writeFileSync(tasksFilePath, JSON.stringify([...tasks, newTask]), "utf8");

    res.status(201).json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"something wen't wrong"});
  }
};

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse<Array<ITask>> }res
 *
 * @description dummy api to return mock todo data :)
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") handleGetTasks(req, res);
  else if (req.method === "POST") handleCreateTasks(req, res);
}
