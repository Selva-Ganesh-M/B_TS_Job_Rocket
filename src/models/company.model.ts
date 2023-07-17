import mongoose from "mongoose";
import { IWDCompanySchema } from "../types/models/company.model";

const companySchema = new mongoose.Schema<IWDCompanySchema>(
  {
    cName: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    deparments: {
      type: [
        {
          type: String,
        },
      ],
      default: [],
    },
    hrs: {
      type: [
        {
          type: String,
        },
      ],
      default: [],
    },
    jobs: {
      type: [
        {
          type: String,
        },
      ],
      default: [],
    },
    noOfEmployees: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const companyModel = mongoose.model("company", companySchema);

type Tcompany = typeof companyModel;

interface ICompanyDoc extends Tcompany {}
