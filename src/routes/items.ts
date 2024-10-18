import express from 'express'
import { authenticate } from '../middlewares/authenticate'
import { create } from '../controllers/items/items.controller'

const itemsRoute = express.Router()

itemsRoute.post('/',authenticate,create)
export {itemsRoute}