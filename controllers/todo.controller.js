// controllers/todo.controller.js

import { getAllTodoData, getTodayTodoData, insertTodoData } from "../services/todo.service.js";

export const readAllTodoData = async (req, res, next) => {
  try {
    const result = await getAllTodoData();
    return res.status(200).json({
      status: 200,
      result: result,
      message: "Successfully get All Todo Data!",
    });
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

export const readTodayTodoData = async (req, res, next) => {
    try {
      const result = await getTodayTodoData();
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Successfully get Today Todo Data!",
      });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  };

export const createTodoData = async (req, res, next) => {
    try {
      const { todo, deadline, user_id } = req.body;
      if (!(todo && deadline && user_id)) {
        throw new Error("something is blank");
      }
      const result = await insertTodoData({
        params: { todo: todo, deadline: deadline, user_id: Number(user_id) },
      });
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Successfully post Todo Data!",
      });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  };
