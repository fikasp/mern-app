import { Router } from 'express'
import { readUsers, signin, signup } from '../controllers/auth.controller.js'

const router = Router()
router.get('/all', readUsers)
router.post('/signin', signin)
router.post('/signup', signup)

export default router
