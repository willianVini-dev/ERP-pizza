import { Request, Response } from "express"
import { createService,removeService } from "../../services/items/items.service"

const create = async (req: Request, res: Response): Promise<any> => {
  try {
    const { order_id, product_id, amount } = req.body
    await createService({ order_id, product_id, amount })
    return res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}
const remove = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params
    const item = await removeService({ id })
    return res.status(200).json(item)
  } catch (error) {
    res.status(400).json(error)
  }
}


export { create,remove }