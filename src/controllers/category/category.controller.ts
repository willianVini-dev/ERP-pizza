import { Request,Response } from 'express';
import {createService,findAllCategoryService} from "../../services/category/category.service"


const create = async(req:Request, res:Response)=>{
  try{
    const {name} = req.body
    await createService(name)
    res.status(201).send()
  }catch(err){
    res.status(500).send("Error create category")
  }
}

const findAll = async(req:Request, res:Response)=>{
  try {
    const categories = await findAllCategoryService()
    res.status(200).json({category:categories})
  } catch (error) {
    res.status(500).send("Error find categories")
  }
}

export {create,findAll}