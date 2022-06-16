import { NextFunction, Request, Response } from "express";
import schema from "../Joi";
import statusErrorString from "../Joi/statusError";
import { IError } from '../interfaces/IError';

const validationTask = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error !== undefined) {
    const erroStatus = statusErrorString(error.details[0].type);
    const middlewareError = { error: erroStatus, message: error.details[0].message };

    return next(middlewareError);
  }
  return next();
};

const validationUpdate = (req: Request, _res: Response, next: NextFunction) => {
  const { id, task, status } = req.body;
  if (!id) return next({ error: 404, message: 'Id não informado!' });

  return next();
};

export default {
  validationTask,
  validationUpdate,
};
