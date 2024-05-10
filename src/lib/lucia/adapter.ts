import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import db from "../db";
import { userTable, userSession} from "../db/schema";


const adapter = new DrizzlePostgreSQLAdapter(db, userSession, userTable);

export default adapter;