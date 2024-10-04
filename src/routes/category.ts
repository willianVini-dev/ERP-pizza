import express from 'express'
import { authenticate } from '../middlewares/authenticate'
import { create,findAll } from '../controllers/category/category.controller'

const categoryRoute = express.Router()

categoryRoute.post('/',authenticate,create)
categoryRoute.get('/',authenticate,findAll)


export {categoryRoute}