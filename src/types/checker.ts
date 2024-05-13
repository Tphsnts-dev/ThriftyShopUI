"use server"
import { eq } from "drizzle-orm";
import db from "@/database/index"
import { userTable } from "@/database/schema"
export async function emailExists(value: string) {
    try {
      const user1 = await db.select().from(userTable).where(eq(userTable.email, value));
      return user1.find((user) => user !== undefined) !== undefined;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  
  export async function phoneNumberExist(value: string) {
    try {
      const user1 = await db.select().from(userTable).where(eq(userTable.phoneNumber, value));
      return user1.find((user) => user !== undefined) !== undefined;
    } catch (error) {
      console.error(error);
      return false;
    }
  }