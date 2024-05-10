import { defineConfig } from 'drizzle-kit' 
import * as dotenv from "dotenv";

dotenv.config({ path: "./.env.neon" });

export default defineConfig({
 schema: "./src/lib/db/schema.ts", 
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
  out: 'dist',
})