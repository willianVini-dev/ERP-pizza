import { Request, Response } from "express"
import { createService } from "../../services/order/order.service"

const create = async (req: Request, res: Response):Promise<any> => {
  try {
    const { name, table } = req.body
    await createService({ name, table })
    return res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

export {create}