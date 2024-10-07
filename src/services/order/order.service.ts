import { Order } from "@prisma/client";
import prisma from "../../DB";

interface OrderRequest {
  name?: string;
  table: number;
}

const createService = async ({ name, table }: OrderRequest):Promise<Order> => {
  try {
    return prisma.order.create({
      data: {
        name, table
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}

export {createService}