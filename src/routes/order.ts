import express from 'express'
import { authenticate } from '../middlewares/authenticate'
import { create, remove, updateDraft, findAll, findDetails, finish } from '../controllers/order/order.controller'

const orderRoute = express.Router()

orderRoute.get('/', authenticate, findAll)
orderRoute.get('/details/:id', authenticate, findDetails)
orderRoute.post('/', authenticate, create)
orderRoute.delete('/:id', authenticate, remove)
orderRoute.patch('/:id', authenticate, updateDraft)
orderRoute.patch('/finish/:id', authenticate, finish)


export { orderRoute }