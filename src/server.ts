import { IWDCompanySchema } from "./types/models/company.model.d";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import { envs } from "./config/EnvConfig";
import connectToDb from "./config/connectToDb";

const server = express();

// #region : middleware

server.use(express.json());
server.use(cors(corsOptions));

// #endregion : middleware

// #region : routes

// #endregion : routes

// #region : initiate server

const startServer = async () => {
  try {
    // connecting to DB
    await connectToDb();
    server.listen(envs.PORT, () => {
      console.log(`server started listening at PORT ${envs.PORT}`);
    });
  } catch (err) {
    console.log(`server failed to start.`);
  }
};

startServer();

// #endregion : initiate server
