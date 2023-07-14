import { Router } from 'express'
import data from '../models/data.js'

const router = Router()

router.get('/', (req, res) => {
  res.send(data)
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  res.send(data[id])
})

export default router