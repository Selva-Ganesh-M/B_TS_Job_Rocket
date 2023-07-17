import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { IWDCompanySchema } from "../types/models/company.model";
import { companyModel } from "../models/company.model";

const createCompany = asyncHandler(
  async (req: Request<{}, {}, IWDCompanySchema, {}>, res: Response) => {
    const tempCompany = new companyModel(req.body);
    const company = await tempCompany.save();
    res.status(201).json({
      statusText: "success",
      statusCode: 201,
      message: "new company created",
      payload: company,
    });
  }
);

const companyCtrl = {
  createCompany,
};

export default companyCtrl;
