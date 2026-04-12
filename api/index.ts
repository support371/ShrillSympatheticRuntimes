import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const httpServer = createServer(app);

const setup = registerRoutes(httpServer, app);

export default async (req: any, res: any) => {
  await setup;
  app(req, res);
};
