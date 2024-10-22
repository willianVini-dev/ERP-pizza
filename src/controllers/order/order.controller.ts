import { Request, Response } from "express"
import { createService, findAllService, findDetailsService, finishService, removeService, updateDraftService } from "../../services/order/order.service"

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

const updateDraft = async (req: Request, res: Response): Promise<any> => {
  try {
    const idOrder = req.params.id as string
    const order = await updateDraftService(idOrder)
    return res.status(200).json(order)
  } catch (error) {
    res.status(400).json(error)
  }
}

const findAll = async (req: Request, res: Response): Promise<any> => {
  try {
    const order = await findAllService()
    return res.status(200).json(order)
  } catch (error) {
    res.status(400).json(error)
  }
}
const findDetails = async (req: Request, res: Response): Promise<any> => {
  try {
    const idOrder = req.params.id as string
    const order = await findDetailsService(idOrder)
    return res.status(200).json(order)
  } catch (error) {
    res.status(400).json(error)
  }
}
const finish = async (req: Request, res: Response): Promise<any> => {
  try {
    const idOrder = req.params.id as string
    await finishService(idOrder)
    return res.status(201).send()
  } catch (error) {
    res.status(400).json(error)
  }
}



export { create, remove, updateDraft, findAll,findDetails,finish }