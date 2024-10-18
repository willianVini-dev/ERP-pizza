import { Request, Response } from "express"
import { createService } from "../../services/items/items.service"

const create = async (req: Request, res: Response): Promise<any> => {
  try {
    const { order_id, product_id, amount } = req.body
    await createService({ order_id, product_id, amount })
    return res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}


export { create }