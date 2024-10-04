import { Category } from '@prisma/client'
import prisma from '../../DB'


const createService = async(name:string):Promise<any>=>{

  try {
    const category = await prisma.category.findFirst({where:{name}})
    if(category)
      throw new Error

    await prisma.category.create({data:{name}})
    return
  } catch (error) {
    throw new Error("category alread exists")
  }

}

const findAllCategoryService = async():Promise<Category[]>=>{
  try {
    return prisma.category.findMany()
  } catch (error) {
    throw new Error
  }
}
export {createService,findAllCategoryService}