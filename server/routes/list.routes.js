import { Router } from 'express'
import * as list from '../controllers/list.controller.js'

const router = Router()
router.post('/', list.createListItem)
router.get('/', list.readList)
router.get('/:id', list.readListItem)
router.put('/:id', list.updateListItem)
router.delete('/:id', list.deleteListItem)

export default function useListRouter(app) {
  app.use('/api/list', router)
}
