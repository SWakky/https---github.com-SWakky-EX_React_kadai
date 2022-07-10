// services/slack.service.js

import { findAll, findToday } from "../repositories/todo.repository.js";
import { WebClient } from "@slack/web-api";
import dotenv from "dotenv";

dotenv.config();

const postToSlack = async (token, channel, text) => {
  const client = new WebClient(token);
  const response = await client.chat.postMessage({ channel, text });
  console.log(response.ok);
  return response;
};

export const postAllTodoData = async () => {
  try {
    const token = process.env.SLACK_API_TOKEN;
    const todoData = await findAll();
    const text = todoData.map((x) => `${x.deadline}\t${x.todo}`).join("\n");
    return await postToSlack(token, "#test", `現在のTodo！\n${text}`);
  } catch (e) {
    throw Error("Error while posting All Todo Data");
  }
};

export const postTodayTodoData = async () => {
  try {
    const token = process.env.SLACK_API_TOKEN;
    const todoData = await findToday();
    const text = todoData.map((x) => `${x.deadline}\t${x.todo}`).join("\n");
    return await postToSlack(token, "#test", `本日締切！！\n${text}`);
  } catch (e) {
    throw Error("Error while posting Today Todo Data");
  }
};
