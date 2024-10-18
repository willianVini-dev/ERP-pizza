import { Request, Response } from "express"
import { createService, removeService } from "../../services/order/order.service"

const create = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, table } = req.body
    await createService({ name, table })
    return res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}

const remove = async (req: Request, res: Response): Promise<any> => {
  try {
    const idOrder = req.params.id as string
    const order = await removeService(idOrder)
    return res.status(200).json(order)
  } catch (error) {
    res.status(400).json(error)
  }
}



export { create, remove }