import { NextFunction, Request, Response } from "express";
import schema from "../Joi";
import statusErrorString from "../Joi/statusError";

const validationTask = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error !== undefined) {
    const erroStatus = statusErrorString(error.details[0].type);
    const middlewareError = { error: erroStatus, message: error.details[0].message };

    return next(middlewareError);
  }
  next();
};

export default {
  validationTask,
};
