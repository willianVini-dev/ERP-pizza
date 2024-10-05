import { Product } from "@prisma/client";
import prisma from "../../DB"
interface CreateProduct {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string
}

const createService = async ({ ...data }: CreateProduct):Promise<Product> => {

  try {
    const category = prisma.category.findUnique({ where: { id: data.category_id } })
    if (!category)
      throw new Error
  
    return prisma.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
        banner: data.banner,
        category_id: data.category_id
      }
    })
  } catch (error) {
    throw new Error(error.message)
  }
}
export { createService }