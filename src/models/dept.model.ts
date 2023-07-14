import mongoose from "mongoose";
import { IDeptSchema } from "../types/models/dept.model";

const deptSchema = new mongoose.Schema<IDeptSchema>({
  companyId: {
    type: String,
    required: true,
  },
  jobs: [
    {
      type: String,
    },
  ],
  deptName: {
    type: String,
    required: true,
  },
});

export const deptModel = mongoose.model("department", deptSchema);
