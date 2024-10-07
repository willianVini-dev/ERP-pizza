import { Product } from "@prisma/client";
import prisma from "../../DB"
interface CreateProduct {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string
}

const createService = async ({ ...data }: CreateProduct): Promise<Product> => {

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
const findProductByCategoryService = async (category_id: string): Promise<Product[]> => {

  try {
    const category = await prisma.category.findUnique({ where: { id: category_id } })
    if (!category)
      throw new Error('Category not found');

    return prisma.product.findMany({
      where: {
        category_id
      }
    })
  } catch (error) {
    throw new Error(error.message);
  }
}
export { createService,findProductByCategoryService }