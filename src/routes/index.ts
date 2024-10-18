import express from 'express'
import {userRoute} from './user'
import {authRoute} from './auth'
import { categoryRoute } from './category'
import { productRoute } from './product'
import { orderRoute } from './order'
import { itemsRoute } from './items'

const routes = express.Router()

routes.use("/users",userRoute)
routes.use("/auth",authRoute)
routes.use("/category",categoryRoute)
routes.use("/product",productRoute)
routes.use("/order",orderRoute)
routes.use("/items",itemsRoute)


export {routes}