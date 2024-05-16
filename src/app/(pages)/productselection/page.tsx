import "../../../../public/styles.css"
import 'flowbite';
import { validateRequest } from "@/database/auth";
import { redirect } from "next/navigation";
import { NavBar } from "@/components/NavBar";
import { productsAvailable,checkCart } from "../../actions/checker"
import React from "react";
import { CardComponent } from "@/components/CardComponent";
import { CheckoutComponent } from "@/components/CheckoutComponent";
export default async function Page() {
  const { user } = await validateRequest()
  if (!user) {
    return redirect("/home")
  }
  const products = await productsAvailable()
  const user_session_id = user.id
  const items = await checkCart(user_session_id)


  return (
    <>
      <NavBar></NavBar>
      <br></br>
      <br></br>
      <br></br>
      
      <CheckoutComponent userID={user_session_id} items={items} ></CheckoutComponent>
      <CardComponent products={products} userSessionId ={user_session_id}></CardComponent>
      
      <br></br>
      <br></br>

    </>


  )


}