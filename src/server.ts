import express from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions";
import { envs } from "./config/EnvConfig";

const server = express();

// #region : middleware

server.use(express.json());
server.use(cors(corsOptions));

// #endregion : middleware

const startServer = async () => {
  server.listen(envs.PORT, () => {
    console.log(`server started listening at PORT ${envs.PORT}`);
  });
};

startServer();
