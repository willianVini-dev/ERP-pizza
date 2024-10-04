import express from 'express'

import { auth } from '../controllers/user/auth.controller'


const authRoute = express.Router()
authRoute.post('/',auth)

export {authRoute}