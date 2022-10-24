import express from "express";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT ?? 4004;

app.listen({ port }, () => {
  console.log("listen at http://localhost:%d", port);
});
