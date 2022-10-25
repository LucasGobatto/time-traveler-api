import path from "path";
import { DataSource } from "typeorm";

export async function DbConfig() {
  const dbConfig = new DataSource({
    type: "postgres" as const,
    url: process.env.DATABASE_URL,
    entities: [path.join(__dirname, "..", "**", "*.entities.ts")],
    logging: false,
  });

  await dbConfig.initialize();
}
