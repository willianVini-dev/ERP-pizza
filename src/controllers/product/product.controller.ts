
import { createService, findProductByCategoryService } from "../../services/product/product.service"
import { Request, Response } from "express"

const create = async (req: Request, res: Response): Promise<any> => {
  try {

    const { name, price, description, category_id } = req.body
    if (!req.file)
      throw new Error('Error upload file')

    const { filename: banner } = req.file
    const product = await createService({ name, price, description, category_id, banner })
    return res.status(201).json(product)
  } catch (error) {
    console.log(error)
  }
}

const findProductByCategory = async (req: Request, res: Response): Promise<any> => {
  try {
    const category_id = req.query.category_id
    const products = await findProductByCategoryService(String(category_id))
    return res.status(200).json(products)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

export { create, findProductByCategory }