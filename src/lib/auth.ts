"use server"
import { lucia } from "../lib/lucia/session";
import { cookies } from "next/headers";
import { validateRequest } from "@/lib/lucia/session";
async function auth(id: string, firstName: string, lastName: string) {

    const lucia_session = await lucia.createSession(id, {
        expiresIn: 60 * 60 * 24 * 30,
    })
    const sessionCookie = lucia.createSessionCookie(lucia_session.id)
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    )

    return {
        success: true,
        data: {
            id,
            firstName,
            lastName
        },
    }

}
async function signout() {
    try{
        const { session } = await validateRequest()
        if (!session) {
            return {
                error: "Unauthorized",
            }
        }

        await lucia.invalidateSession(session.id)
        const sessionCookie = lucia.createBlankSessionCookie()
        cookies().set(
            sessionCookie.name,
            sessionCookie.value,
            sessionCookie.attributes
        )
    }
    catch (error: any) {
        return {
            error: error?.message,
        }
    }
}
export { auth, signout };