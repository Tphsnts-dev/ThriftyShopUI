"use client"
import { Input } from "@/components/ui/input"
import crypto, { createHash } from 'crypto';
import { userTable } from "../lib/db/schema";
import db from "../lib/db/index"
import { v4 as uuidv4 } from 'uuid';
import { sql } from "drizzle-orm/sql"
import { encryptPassword, generateIV } from "../lib/password-encryption"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm} from "react-hook-form";
import { z } from "zod"
import { useState } from 'react';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { eq } from "drizzle-orm";

export function SignUpForm() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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
    const userNameExist = async (value: string) => {
        try {
            const user1 = (await db.select().from(userTable).where(eq(userTable.username, value)));
            return user1.find((user) => user !== undefined) !== undefined;
        } catch (error) {
            console.error(error);
            return false;
        }
    };
    const formSchema = z.object({
        firstName: z.string().max(50),
        lastName: z.string().max(50),
        phoneNumber: z.string().regex(
            /^09\d{9}$|^\+639\d{9}$/,
            'Invalid Philippine phone number. Please use the format 09xxxxxxxxx or +639xxxxxxxxx.'
        ).refine(async (phoneNumber) => {
            if (await phoneNumberExist(phoneNumber)) {
                return false;
            }
            return true;
        }, 'Phone Number already exists'),
        email: z.string().email().refine(async (email) => {
            if (await emailExists(email)) {
                return false;
            }
            return true;
        }, 'Email already exists'),

        username: z.string().min(10, { message: 'Must have 10 or More Characters' }).refine(async (username) => {
            if (await userNameExist(username)) {
                return false;
            }
            return true;
        }, 'Username already exists'),
        password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, {
            message: 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@, $, !, %, *, ?, &) and must have 9 Characters',
        }).min(9, { message: 'Must have 9 or More Characters' })
    });

    const formResolver = zodResolver(formSchema);

    const signUpform = useForm<z.infer<typeof formSchema>>({ 
    resolver: formResolver,
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      username: '',
      password: '',
      
    }, });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const currentTime = new Date();
            const key = crypto.randomBytes(32);
            const iv = generateIV();
            const id = sql`${uuidv4()}`;
            const passwordHash = encryptPassword(values.password, key, iv);
            const usernameHash = createHash('sha256');
            usernameHash.update(values.username);
            const hashedUsername = usernameHash.digest('hex');
            const result = await db.insert(userTable).values({
                id,
                email: values.email,
                passwordHash,
                firstName: values.firstName,
                lastName: values.lastName,
                username: hashedUsername,
                phoneNumber: values.phoneNumber,
                createdAt: currentTime,
                isAdmin: "FALSE",
                password_key: key.toString('hex'),
                vector: iv.toString('hex'),
            });
            await result;
            console.log('Data inserted successfully:', result);
            setIsFormSubmitted(true);
            signUpform.reset();
        } catch (error) {
            console.error('Error inserting data:', error);
        }
    }





    if (isFormSubmitted) {
        return (
            <>
                <Dialog open={true}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Sign-up</DialogTitle>
                            <DialogDescription> Your account has been created successfully. You can now log in to your account.</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button onClick={() => { setIsFormSubmitted(false); }}>Close</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        );
    }


    return (
        <>
            <Form {...signUpform}>
                <form onSubmit={signUpform.handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "auto" }}>
                    <FormField control={signUpform.control} name="firstName" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signUpform.control} name="lastName" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signUpform.control} name="phoneNumber" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Phone Number"  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signUpform.control} name="email" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signUpform.control} name="username" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signUpform.control} name="password" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Button type="submit" style={{ marginTop: "20px", position: "relative", left: "178px" }}>Create an Account</Button>
                </form>
            </Form>
        </>


    )
}