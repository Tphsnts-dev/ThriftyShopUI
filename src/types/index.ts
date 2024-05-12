"use server"
import { z } from "zod"
import db from "@/database/index"
import { userTable } from "@/database/schema"
import { eq } from "drizzle-orm";

let imageValidator;

if (typeof window === "undefined") {
    imageValidator = z.null();
} else {
    imageValidator = z
        .instanceof(File)
        .refine((file) => file?.type === "image/png" || file?.type === "image/jpeg", {
            message: "Image file must be a png or jpg",
        });
}

const emailExists = async (value: string) => {
    try {
        const user1 = (await db.select().from(userTable).where(eq(userTable.email, value)));
        return user1.find((user) => user !== undefined) !== undefined;
    } catch (error) {
        console.error(error);
        return false;
    }
};
const phoneNumberExist = async (value: string) => {
    try {
        const user1 = (await db.select().from(userTable).where(eq(userTable.phoneNumber, value)));
        return user1.find((user) => user !== undefined) !== undefined;
    } catch (error) {
        console.error(error);
        return false;
    }
};
export const signInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, { message: "Password is required" }).max(20),
});

export const signUpFormSchema = z.object({
    email: z.string().email().refine(async (email) => {
        if (await emailExists(email)) {
            return false;
        }
        return true;
    }, 'Email already exists'),
    firstName: z.string().min(1, { message: "First Name is required" }),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    phoneNumber: z.string().regex(
        /^09\d{9}$|^\+639\d{9}$/,
        'Invalid Philippine phone number. Please use the format 09xxxxxxxxx or +639xxxxxxxxx.'
    ).refine(async (phoneNumber) => {
        if (await phoneNumberExist(phoneNumber)) {
            return false;
        }
        return true;
    }, 'Phone Number already exists'),
    password: z
        .string()
        .min(8, { message: "Confirm Password must be at least 8 characters long" })
        .max(10, { message: "Confirm Password must be at most 10 characters long" })
        .refine((password) => /[A-Z]/.test(password), {
            message: "Password must contain at least one uppercase letter.",
        })
        .refine((password) => /[a-z]/.test(password), {
            message: "Password must contain at least one lowercase letter.",
        })
        .refine((password) => /[0-9]/.test(password), {
            message: "Password must contain at least one number.",
        })
        .refine(
            (password) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password),
            {
                message: "Password must contain at least one special character.",
            }
        ),
    confirmPassword: z
        .string()
        .min(8, { message: "Confirm Password is required" })
        .max(20),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const productFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    price: z
        .string()
        .regex(/^\d+$/, { message: "Price must be a positive integer" }),
    quantityAvailable: z
        .string()
        .regex(/^\d+$/, { message: "Quantity must be a positive integer" }),
    image: imageValidator,
});