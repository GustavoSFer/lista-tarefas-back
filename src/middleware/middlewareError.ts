import {  NextFunction, Request, Response } from "express";
import { IError } from "../interfaces/IError";

const error = (
  err: IError,
  req: Request,
  res: Response,
  _next: NextFunction
) => res.status(err.error).json({ message: err.message });

export default error;
