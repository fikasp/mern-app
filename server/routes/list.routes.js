import { Router } from 'express'
import * as list from '../controllers/list.controller.js'
import auth from '../middlewares/auth.js'

const router = Router()
router.get('/', list.readList)
router.get('/:id', list.readListItem)
router.post('/', auth, list.createListItem)
router.patch('/:id', auth, list.updateListItem)
router.delete('/:id', auth, list.deleteListItem)
router.delete('/', auth, list.deleteList)

export default router
