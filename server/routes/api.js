import { Router } from 'express'
const router = Router()
export default router

router.get('/', (req, res) => {
  res.send({api: "API works..."})
})

router.get('/:id', (req, res) => {
  const {id} = req.params
  res.send({id})
})
