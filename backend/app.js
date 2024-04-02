import express from "express";
//import { router } from "./routes/product.routes.js";
import { router } from "./routes/user.routes.js";

const app = express();
app.use(express.json());
app.use("/api/v1", router);

export { app };
