import { Item, Order } from "@prisma/client";
import prisma from "../../DB";

interface ItemRequest {
  order_id: string;
  product_id: string;
  amount: number
}
interface ItemDeleteRequest {
  id: string;

}

const createService = async ({ order_id, product_id, amount }: ItemRequest): Promise<Item> => {
  try {
    return prisma.item.create({
      data: {
        order_id,
        product_id,
        amount
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}
const removeService = async ({ id }: ItemDeleteRequest): Promise<Item> => {
  try {
    return prisma.item.delete({
      where: {
        id
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}



export { createService, removeService }