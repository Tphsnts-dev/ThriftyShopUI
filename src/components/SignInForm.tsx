"use client"
import { createHash } from 'crypto';
import { userTable } from "../lib/db/schema";
import db from "../lib/db/index"
import { Buffer } from 'buffer';
import { decryptPassword } from "../lib/password-encryption"
import { Button } from "@/components/ui/button";
import {auth} from "../lib/auth"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { z } from "zod"
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { eq } from "drizzle-orm";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation';


export function SignInForm() {
    const router = useRouter();
    const [isloginSubmitted, setIsloginSubmitted] = useState(false);
    const [isAccountExists, setIsAccountExists] = useState(false);
    const signInFormSchema = z.object({
        username_1: z.string().min(10).max(20),
        password_1: z.string().min(9),
    });
    const formResolver_1 = zodResolver(signInFormSchema);
    const signInform = useForm<z.infer<typeof signInFormSchema>>({
        resolver: formResolver_1,
        mode: 'onChange',
        defaultValues: {
          username_1: '',
          password_1: '',
        },
      });
      async function signInSubmit(values: z.infer<typeof signInFormSchema>) {
        const usernameHash = createHash('sha256');
        usernameHash.update(values.username_1);
        const hashedUsername = usernameHash.digest('hex');
        const user = await db.select({
            passwordHash: userTable.passwordHash,
            passwordKey: userTable.password_key,
            vector: userTable.vector,
            id: userTable.id,
            firstName:userTable.firstName,
            lastName:userTable.lastName,
        }).from(userTable).where(eq(userTable.username, hashedUsername));
        await user
        if (user.length === 0) {
            setIsAccountExists(true);
            signInform.reset();
        } else {
            const bufferKey = Buffer.from(user[0].passwordKey, 'hex');
            const bufferiv = Buffer.from(user[0].vector, 'hex');
            const decryptedPassword = decryptPassword(user[0].passwordHash, bufferKey, bufferiv)
            if (decryptedPassword === values.password_1) {
                const { success} = await auth(user[0].id, user[0].firstName, user[0].lastName);
                if (success) {
                    router.push('/productselection');
                }
                signInform.reset();
            } else {
                setIsloginSubmitted(true);
                signInform.reset();
            }
        }
    }

    if (isloginSubmitted) {

        return (
            <>
                <Dialog open={true}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Invalid Account</DialogTitle>
                            <DialogDescription> Invalid Username and Password, Please Try Again.</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button onClick={() => { setIsloginSubmitted(false); }}>Close</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        );

    }
    if (isAccountExists) {

        return (
            <>
                <Dialog open={true}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Invalid Account</DialogTitle>
                            <DialogDescription>Account does not Exist, Please Create an Account</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button onClick={() => { setIsAccountExists(false); }}>Close</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        );

    }
    return (
        <>
            <Form {...signInform}>
                <form onSubmit={signInform.handleSubmit(signInSubmit)} style={{ maxWidth: "400px", margin: "auto" }}>
                    <FormField control={signInform.control} name="username_1" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signInform.control} name="password_1" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <Button type="submit" style={{ marginTop: "20px", marginLeft: "320px" }}>Submit</Button>
                </form>
            </Form>

        </>
    )



}