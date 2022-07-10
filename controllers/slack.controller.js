// controllers/slack.controller.js

import {
    postAllTodoData,
    postTodayTodoData,
  } from "../services/slack.service.js";
  
  export const sendAllTodoData = async (req, res, next) => {
    try {
      const result = await postAllTodoData();
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Successfully send All Todo Data!",
      });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  };
  
  export const sendTodayTodoData = async (req, res, next) => {
    try {
      const result = await postTodayTodoData();
      return res.status(200).json({
        status: 200,
        result: result,
        message: "Successfully send Today Todo Data!",
      });
    } catch (e) {
      return res.status(500).json({ status: 500, message: e.message });
    }
  };
  