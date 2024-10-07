import { Product } from "@prisma/client"
import { createService } from "../../services/product/product.service"
import { Request, Response } from "express"

const create = async(req:Request, res:Response):Promise<any>=>{
  try {
    
    const {name, price,description, category_id } = req.body
    if(!req.file)
      throw new Error('Error upload file')

    const {filename} = req.file
    const product = await createService({name, price,description, category_id,banner:filename})
    return res.status(201).json(product)
  } catch (error) {
    console.log(error)
  }
}

export {create}