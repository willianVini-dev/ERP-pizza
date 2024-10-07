import express from 'express'
import { authenticate } from '../middlewares/authenticate'
import { create } from '../controllers/order/order.controller'

const orderRoute = express.Router()

orderRoute.post('/',authenticate,create)


export {orderRoute}