import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import { envs } from "./config/EnvConfig";
import connectToDb from "./config/connectToDb";
import { customErrorHandler } from "./middleware/customErrorHandler";
import { customLogger } from "./middleware/customLogger";
import companyRouter from "./routers/company.router";

const server = express();

// #region : initial-mw

server.use(express.json());
server.use(customLogger);
server.use(cors(corsOptions));

// #endregion : initial-mw

// #region : routes
server.use("/api/companies", companyRouter);
// #endregion : routes

// #region : end-mw
server.use(customErrorHandler);
// #endregion : end-mw

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
