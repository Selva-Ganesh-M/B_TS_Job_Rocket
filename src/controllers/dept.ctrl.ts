import { NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { deptModel } from "../models/dept.model";

const getAllDepartments = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const departments = await deptModel.find();
  }
);
