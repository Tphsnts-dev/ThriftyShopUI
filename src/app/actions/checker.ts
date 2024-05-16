"use server"
import { eq, sql } from "drizzle-orm";
import db from "@/database/index"
import { userTable, productTable, userCart, userTransaction } from "@/database/schema"
import { add, format } from "date-fns";
export async function emailExists(value: string) {
  try {
    const user1 = await db.select().from(userTable).where(eq(userTable.email, value));
    return user1.find((user) => user !== undefined) !== undefined;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function phoneNumberExist(value: string) {
  try {
    const user1 = await db.select().from(userTable).where(eq(userTable.phoneNumber, value));
    return user1.find((user) => user !== undefined) !== undefined;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function productsAvailable() {
  try {
    const products = await db.select().from(productTable).where(sql`${productTable.quantityAvailable} > 0 and ${productTable.isActive} = true`);
    return products;
  } catch (error) {
    console.error(error);
    return [];
  }

}
function generateRandomString(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
function generateTransactionID(length: number): string {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return "TH-" + result;
}

export async function addtocart(key: string, userId: string, product_name: string, prices: number) {
  try {
    await db.insert(userCart)
      .values({
        productID: generateRandomString(8),
        userId: userId,
        product_name: product_name,
        prices: prices
      }
      )

  }
  catch (error) {
    console.error(error);
    return false;
  }
}


export async function checkCart(userid: string) {
  try {
    const cart = await db.select().from(userCart).where(eq(userCart.userId, userid));
    return cart;
  } catch (error) {
    console.error(error);
    return [];
  }

}
export async function viewOrder(userid: string) {
  try {
    const cart = await db.select().from(userTransaction).where(eq(userTransaction.userId, userid));
    return cart;
  } catch (error) {
    console.error(error);
    return [];
  }

}

export async function deleteProduct(productID: string) {
  try {
    const cart = await db.delete(userCart).where(eq(userCart.productID, productID));
    return true;
  } catch (error) {
    console.error(error);
    return [];
  }

}

function getDateThreeDaysAhead() {
  const threeDaysAhead = add(new Date(), { days: 3 });
  return threeDaysAhead;
}

export async function addtoTransaction(userId: string, purchase_info: string, total_price: number) {
  try {
    const threeDaysAhead = getDateThreeDaysAhead();
    const today = new Date();
    const transactionID: string = generateTransactionID(8)
    const success = await db.insert(userTransaction)
      .values({
        transactionID: transactionID,
        userId: userId,
        date: today,
        purchase_info: JSON.parse(purchase_info),
        total_price: total_price,
        status: "In Progress",
        expected_date: threeDaysAhead,

      })
    if (success) {
      return true
    }


  }
  catch (error) {
    console.error(error);
    return false;
  }
}


