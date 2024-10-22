import { Item, Order } from "@prisma/client";
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

const updateDraftService = async (idOrder: string) => {
  try {
    const order = await prisma.order.update({ where: { id: idOrder }, data: { draft: false } })
    return order
  } catch (error) {
    throw new Error("Error update draft order")
  }
}

const findAllService = async (): Promise<Order[]> => {
  try {
    const order = await prisma.order.findMany({
      where: {
        status: false,
        draft: false
      }, orderBy: {
        created_at: 'desc'
      }
    })
    return order
  } catch (error) {
    throw new Error("Error find all order")
  }
}

const findDetailsService = async (idOrder: string): Promise<Item[]> => {
  try {
    const itemOrder = await prisma.item.findMany({
      where: {
        order_id: idOrder
      }, include: {
        Product: true,
        Order: true
      }
    })
    return itemOrder
  } catch (error) {
    throw new Error("Error find all order")
  }
}
const finishService = async (idOrder: string): Promise<any> => {
  try {
    await prisma.order.update({
      where: {
        id: idOrder
      },data:{
        status: true
      }
    })
    return
  } catch (error) {
    throw new Error("Error finish order")
  }
}

export { createService, removeService, updateDraftService, findAllService, findDetailsService,finishService }