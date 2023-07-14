import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { IWDCompanySchema } from "../types/models/company.model";
import { companyModel } from "../models/company.model";

const createCompany = asyncHandler(
  async (req: Request<{}, {}, IWDCompanySchema, {}>, res: Response) => {
    const created = new companyModel(req.body);
  }
);
