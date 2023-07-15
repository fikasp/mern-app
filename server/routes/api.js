import { Router } from 'express'
import controller from '../controllers/controller.js'

const router = Router()

router.post('/', async (req, res) => {
  const name = req.body.name
  await controller.addRecord(name)
  res.send(`Record ${name} added...`)
})

router.get('/', async (req, res) => {
  try {
    const data = await controller.getRecords()
    res.json(data)
  } catch (err) {
    res.send(`Server error... ${err}`)
    console.log(err);
  }
})

router.get('/:id', async (req, res, next) => {
  const {id} = req.params
  try {
    const data = await controller.getRecord(id)
    res.json(data || `Record ${id} does not exists...`)
  } catch (err) {
    res.send(`Server error... ${err}`)
    console.log(err);
  }
})

router.delete('/:id', async (req, res) => {
  const {id} = req.params
  await controller.deleteRecord(id)
  res.send(`Record ${id} deleted...`)
})

export default router