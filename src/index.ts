import { config } from "dotenv";
import { Server } from "./server";

config();

Server.run();
