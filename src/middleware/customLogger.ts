import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const customLogger = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const date = new Date();
  const log: string = `${req.method}\t${req.path}`;
  console.log(log);
  // const logRecord = `${uuidv4()}\t${date.toDateString()}\t` + log
  next();
};
