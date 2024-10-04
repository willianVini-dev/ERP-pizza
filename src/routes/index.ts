import express from 'express'
import {userRoute} from './user'
import {authRoute} from './auth'

const routes = express.Router()

routes.use("/users",userRoute)
routes.use("/auth",authRoute)


export {routes}