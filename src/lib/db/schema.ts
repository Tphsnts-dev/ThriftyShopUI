import { pgTable, text, timestamp} from "drizzle-orm/pg-core"; 
export const userTable = pgTable("userTable", {
    id: text("id").primaryKey().notNull(),
    email: text("email").notNull().unique(),
    passwordHash: text("passwordHash").notNull(),
    firstName: text("firstName").notNull(),
    lastName: text("lastName").notNull(),
    username: text("userName").notNull().unique(),
    phoneNumber: text("phoneNumber").notNull().unique(),
    createdAt: timestamp("created_at", {
        withTimezone: true,
        mode: "date"
    }).notNull(),
    isAdmin : text("isAdmin").notNull(),
    password_key : text("password_key").notNull(),
    vector : text("vector").notNull()
});

export const userSession = pgTable("userSession",{
    id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull(),
});


