import express from 'express'
import { create } from './controllers/user/user.controller'


const router = express.Router()
router.post('/users',create)

export {router}