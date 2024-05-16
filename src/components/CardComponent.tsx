"use client"
import "../../public/styles.css"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import 'flowbite';
import { Button } from "@/components/ui/button"
import React, { useState } from "react";
import { addtocart } from "@/app/actions/checker";
import { useRouter } from 'next/navigation';
export function CardComponent({ products, userSessionId }: { products: { image: string | null; name: string; id: string; isActive: boolean; createdAt: Date; description: string | null; price: number; quantityAvailable: number; updatedAt: Date; }[], userSessionId: string }) {
    const [isItemAddedtoCart, setIsItemAdded] = useState(false);
    const router = useRouter()
    const handleAddToCart = (product: { image: string | null; name: string; id: string; isActive: boolean; createdAt: Date; description: string | null; price: number; quantityAvailable: number; updatedAt: Date; }) => {
        addtocart(product.id,userSessionId, product.name, product.price);
        setIsItemAdded(true)   
        router.refresh()

    }
    if (isItemAddedtoCart) {
        return (
            <>
                <Dialog open={true}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Product Added</DialogTitle>
                            <DialogDescription>Product has been added to Account</DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button onClick={() => { setIsItemAdded(false); }}>Close</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </>
        );

    }
    return (
        <>
            <div className="flex justify-center animate-slide-fade">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-36">
                    {products.map((product) => (
                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={product.id} >
                            <img className="rounded-t-lg" src={product.image!} alt="" />

                            <div className="p-5">

                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                                <Dialog>
                                    <DialogTrigger className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ position: 'relative', left: '17em' }} >Add to Cart</DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">Product: </DialogTitle>
                                            <DialogDescription>
                                                <br></br>
                                                <p className="leading-7 [&:not(:first-child)]:mt-5" style={{ color: 'black', fontSize: '20px', position: 'relative', left: '12em' }}>Name : {product.name}</p>
                                                <p className="leading-7 [&:not(:first-child)]:mt-5" style={{ color: 'black', fontSize: '20px', position: 'relative', left: '12em' }}>Quantity : {product.quantityAvailable}</p>
                                                <img className="rounded-t-lg" src={product.image!} style={{ width: '220px', position: 'relative', bottom: '5em' }} alt="" />
                                                <hr></hr>
                                                <br></br>
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Price : {product.price}</h5>
                                                <Button style={{ position: 'relative', left: '24em' }} onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                                <br></br>
                                                <br></br>
                                            </DialogDescription>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>



                    ))}

                </div>
            </div>
        </>
    )
}


