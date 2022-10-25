import path from "path";
import { DataSource } from "typeorm";

const commonOptions = {
  type: "postgres" as const,
  entities: [path.join(__dirname, "..", "entities", "index.ts")],
  logging: false,
};

export const dbDatasource = new DataSource(commonOptions);

export async function DbConfig() {
  dbDatasource.setOptions({
    url: process.env.DATABASE_URL,
    synchronize: true,
  });

  await dbDatasource.initialize();
}
