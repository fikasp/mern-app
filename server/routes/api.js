import { Router } from 'express'
import { getAll, getById, getByName } from '../controllers/controller.js'

const router = Router()

router.get('/', (req, res) => {
  res.send(getAll())
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  if (!isNaN(id)) {
    res.send(getById(id))
  } else {
    res.send(getByName(id))
  }
})

export default router