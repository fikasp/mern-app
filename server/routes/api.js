import { Router } from 'express'
import * as controller from '../controllers/controller.js'

const router = Router()

router.post('/', controller.createRecord)
router.get('/', controller.readRecords)
router.get('/:id', controller.readRecord)
router.put('/:id', controller.updateRecord)
router.delete('/:id', controller.deleteRecord)

export default function useRouter(app) {
  app.use('/api', router)
}
