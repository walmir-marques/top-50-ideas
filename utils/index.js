import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
  "postgresql://moneytrackerdb_owner:y8XLWoFVcmT4@ep-mute-rain-a5dkmcg1.us-east-2.aws.neon.tech/top-50-ideas?sslmode=require"
);
export const db = drizzle(sql, { schema });
