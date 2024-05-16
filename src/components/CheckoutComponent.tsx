"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import 'flowbite';
import { Button } from "@/components/ui/button"
import { Table, TableBody,TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { useEffect, useState } from "react";
import { deleteProduct,addtoTransaction} from "@/app/actions/checker";
import { useRouter } from 'next/navigation';
import { DialogClose } from "@radix-ui/react-dialog";
export function CheckoutComponent({ userID, items }: { items: { productID: string | null, userId: string | null, product_name: string | null, prices: number | null; }[], userID: string }) {
  const router = useRouter()
  const [isOrderProcessed, setIsOrderProcessed] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  useEffect(() => {
    setTotal(
      items.reduce((acc, item) => {
        return acc + (item.prices! * (quantities[item.productID as string] || 1));
      }, 0)
    );
  }, [items, quantities]);
const handleIncrement = (itemID: string) => {
  setQuantities((prevQuantities) => ({
    ...prevQuantities,
    [itemID]: (prevQuantities[itemID] || 1) + 1,
  }));
};

const handleDecrement = (itemID: string) => {
  setQuantities((prevQuantities) => {
    const currentQuantity = prevQuantities[itemID] || 1;
    if (currentQuantity > 1) {
      return { ...prevQuantities, [itemID]: currentQuantity - 1 };
    }
    return prevQuantities;
  });
};
  const handleDelete = async (productID: string) => {
    const success = await deleteProduct(productID);
    if (success) {
      setIsDialogOpen(true);
      router.refresh()
    }
  }
  const handleAddToOrder = async () => {
    
    const jsonQuantities = JSON.stringify(
      items.filter((item) => item.productID !== null)
        .map((item) => ({
          productName: item.product_name!,
          quantity: quantities[item.productID as string] || 1,
        }))
    );
    const success = await addtoTransaction(userID, jsonQuantities, total)
    if (success) {
      router.refresh()
      setIsOrderProcessed(true)
    }
  
  }
  
  if (isDialogOpen) {
    return (
      <>
        <Dialog open={true}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Product Deleted</DialogTitle>
              <DialogDescription>Product has been Deleted</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => { setIsDialogOpen(false); }}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }
  if (isOrderProcessed) {
    return (
      <>
        <Dialog open={true}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Order Processed</DialogTitle>
              <DialogDescription>Order has been processsed</DialogDescription>
            </DialogHeader>
            <DialogFooter>
            <DialogClose>
              <Button onClick={() => { setIsOrderProcessed(false); }}>Close</Button>
            </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  }
  return (
    <>
      <Dialog>
        <DialogTrigger className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ position: 'fixed', left: '120em', bottom: '8em', zIndex: 1, padding: '20px' }}>
          <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21" style={{ height: '30px', width: '30px' }}>
            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
          </svg>
          <p style={{ fontSize: '17px' }}>Checkout</p>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cart</DialogTitle>
            <DialogDescription>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>

                  {items.map((item) =>
                    item.productID && (
                      <TableRow key={item.productID}>
                        <TableHead>{item.product_name}</TableHead>
                        <TableHead><form className="max-w-xs mx-auto">
                          <div className="relative flex items-center">
                            <button
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                              onClick={() => handleDecrement(item.productID as string)}
                            >
                              <svg
                                className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                              </svg>
                            </button>
                            <input
                              type="text"
                              id="counter-input"
                              data-input-counter
                              className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                              placeholder=""
                              value={quantities[item.productID as string] || 1}
                              required
                              readOnly
                            />
                            <button
                              type="button"
                              id="increment-button"
                              data-input-counter-increment="counter-input"
                              className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                              onClick={() => handleIncrement(item.productID as string)}
                            >
                              <svg
                                className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                              </svg>
                            </button>
                          </div>
                        </form></TableHead>
                        <TableHead>{item.prices! * (quantities[item.productID as string] || 1)}</TableHead>
                        <TableHead>
                          <Button variant='destructive' onClick={() => handleDelete(item.productID as string)}>Delete</Button>
                        </TableHead>

                      </TableRow>
                    )
                  )}           
                </TableBody>
              </Table>
              <p className="text-base  text-gray-900 dark:text-white" style={{ marginLeft: '220px' }}>Grand Total : {total} </p>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>
              <Button type="submit" variant="destructive">
                Close
              </Button>
            </DialogClose>
            <Button type="button" variant="default" onClick={() => handleAddToOrder()}>
              Checkout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </>
  )
}