import express, { NextFunction } from "express";
import core from "express-serve-static-core";

export const asyncHandler =
  (cb: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  async (...args: [Request, Response, NextFunction]) => {
    const next = args[args.length - 1] as NextFunction;
    try {
      await cb(...args);
      next();
    } catch (err) {
      next(err);
    }
  };
