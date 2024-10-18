import { Order } from "@prisma/client";
import prisma from "../../DB";

interface OrderRequest {
  name?: string;
  table: number;
}

const createService = async ({ name, table }: OrderRequest): Promise<Order> => {
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

const removeService = async (idOrder: string) => {
  try {
    const order = await prisma.order.delete({ where: { id: idOrder } })
    return order
  } catch (error) {
    throw new Error("Error remove order")
  }
}

export { createService, removeService }