import express from 'express'
import {userRoute} from './user'
import {authRoute} from './auth'
import { categoryRoute } from './category'

const routes = express.Router()

routes.use("/users",userRoute)
routes.use("/auth",authRoute)
routes.use("/category",categoryRoute)


export {routes}