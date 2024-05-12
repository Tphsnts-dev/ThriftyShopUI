"use client"
import { Input } from "@/components/ui/input"
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
import { useForm } from "react-hook-form";
import { z } from "zod"
import { useState } from 'react';
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema } from "@/types";
import { signUp } from "@/app/actions/auth.actions";
import { toast } from "react-toastify";

export function SignUpForm() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const formResolver = zodResolver(signUpFormSchema);
    const signUpform = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: formResolver,
        mode: 'onChange',
        defaultValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            confirmPassword: ''
    
        },
    })
    async function onSubmit(values: z.infer<typeof signUpFormSchema>) {
        try {
            const response = await signUp(values)
            if (await response.success) {
                setIsFormSubmitted(true);
            }
        } catch (error) {
            toast.error('An unexpected error occurred:');
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

                    <FormField control={signUpform.control} name="password" render={({ field }) => (
                        <FormItem style={{ marginTop: "20px" }}>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={signUpform.control} name="confirmPassword" render={({ field }) => (
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