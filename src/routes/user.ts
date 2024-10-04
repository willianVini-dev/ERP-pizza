import express from 'express'
import { create,detailsUser} from '../controllers/user/user.controller'
import { authenticate } from '../middlewares/authenticate'

const userRoute = express.Router()

userRoute.post('/',create)
userRoute.get('/',authenticate,detailsUser)


export {userRoute}