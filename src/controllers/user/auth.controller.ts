import { Request, Response } from "express";
import { authService } from "../../services/user/auth.service";

const auth = async(req:Request, res:Response):Promise<any>=>{
  try {
    const {email, password} = req.body
    const auth = await authService({email, password})
    if(auth)
      return res.status(200).json(auth)
  
    return res.status(400).json()

    
  } catch (error) {
    res.status(400).send("Error authenticate user")
  }
}

export {auth}