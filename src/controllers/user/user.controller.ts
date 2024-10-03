import { Request, Response } from "express";
import {createService} from "../../services/user/user.service"


const create = async (req: Request, res: Response): Promise<any> => {
	try {
		const {name, email, password} = req.body
		await createService({name, email,password})
		res.status(201).send()
		
	} catch (error) {
		res.status(400).send("Error when registering user")
	}
}

export { create }