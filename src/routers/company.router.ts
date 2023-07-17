import express from "express";
import companyCtrl from "../controllers/company.ctrl";
const router = express.Router();

router.post("/create", companyCtrl.createCompany);

export default router;
