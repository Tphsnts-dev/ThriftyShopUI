"use client"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { z } from "zod"
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"

import { signInFormSchema } from "@/types/index";
import { signIn } from "@/app/actions/auth.actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export function SignInForm() {
    const router = useRouter();
    const [isloginSubmitted, setIsloginSubmitted] = useState(false);
    const [isAccountExists, setIsAccountExists] = useState(false);
    const [isAdminExists, setIsAdminExists] = useState(false);
    const formResolver_1 = zodResolver(signInFormSchema);
    const signInform = useForm<z.infer<typeof signInFormSchema>>({
        resolver: formResolver_1,
        mode: 'onChange',
        defaultValues: {
            email: '',
            password: '',
        },
    });
    async function onSubmit(values: z.infer<typeof signInFormSchema>) {
        try {
            const response = await signIn(values)
            if (response.success == false && response.error == "Incorrect Email or Password") {
                setIsloginSubmitted(true);
            }
            if (response.success == false && response.error == "User not found") {
                setIsAccountExists(true);
            }
            if (response.success == false && response.error == "Admins cannot log in using this function") {
                setIsAdminExists(true);
            }
            if(response.success == true){
                router.push('/productselection');
            }
        } catch (error) {
            toast.error('An unexpected error occurred:');
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
                        <DialogFooter><DialogClose>
                        <Button onClick={() => { setIsloginSubmitted(false); }}>Close</Button>
                        </DialogClose>
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
                            <DialogClose>
                            <Button onClick={() => { setIsAccountExists(false); }}>Close</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        );

    }
    if (isAdminExists) {

        return (
            <>
                <Dialog open={true}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Invalid Account</DialogTitle>
                            <DialogDescription>Admins cannot log in using this function</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                        <DialogClose>
                        <Button onClick={() => { setIsAdminExists(false); }}>Close</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        );

    }
    return (
        <>
            <Form {...signInform}>
                <form onSubmit={signInform.handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "auto" }}>
                    <FormField control={signInform.control} name="email" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signInform.control} name="password" render={({ field }) => (
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