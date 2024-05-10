import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { userTable, userSession } from "./schema";

const sql = neon(process.env.DB_URL as string);
const db = drizzle(sql, { schema: { userTable, userSession } });
export default db;