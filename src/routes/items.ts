import express from 'express'
import { authenticate } from '../middlewares/authenticate'
import { create, remove } from '../controllers/items/items.controller'

const itemsRoute = express.Router()

itemsRoute.post('/',authenticate,create)
itemsRoute.delete('/:id',authenticate,remove)
export {itemsRoute}