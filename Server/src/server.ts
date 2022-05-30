import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

const serverPort = "3333";

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(serverPort, () => {
  console.log(`HTTP Server Running on PORT ${serverPort}`);
});
