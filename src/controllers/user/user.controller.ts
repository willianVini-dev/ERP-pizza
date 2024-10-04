import { Request, Response } from "express";
import {createService} from "../../services/user/user.service"


const create = async (req: Request, res: Response): Promise<any> => {
	try {
		const {name, email, password} = req.body
		const user = await createService({name, email,password})
		res.status(201).json({user})
		
	} catch (error) {
		res.status(400).send("Error when registering user")
	}
}

const detailsUser = async(req:Request,res:Response)=>{

	res.status(200).json({message:'aquii'})
}

export { create,detailsUser }