// routes/todo.route.js

import express from "express";
import { readAllTodoData, readTodayTodoData,createTodoData } from "../controllers/todo.controller.js";

export const todoRouter = express.Router();

todoRouter.get("/", (req, res) => readAllTodoData(req, res));
todoRouter.get("/today", (req, res) => readTodayTodoData(req, res));
todoRouter.post("/", (req, res) => createTodoData(req, res));