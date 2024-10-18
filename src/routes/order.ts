import express from 'express'
import { authenticate } from '../middlewares/authenticate'
import { create, remove } from '../controllers/order/order.controller'

const orderRoute = express.Router()

orderRoute.post('/',authenticate,create)
orderRoute.delete('/:id',authenticate,remove)


export {orderRoute}