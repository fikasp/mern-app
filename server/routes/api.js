import { Router } from 'express'
import * as controller from '../controllers/controller.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const value = req.body.value
    await controller.createRecord(value)
    res.send(`Record ${value} added...`)
  } catch (err) {
    next(err)
  } 
})

router.get('/', async (req, res, next) => {
  try {
    const data = await controller.readRecords()
    console.log(data)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const data = await controller.readRecord(id)
    if (!data) {
      const error = new Error(`Record ${id} does not exist...`)
      error.status = 404
      throw error
    }
    console.log(data)
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const { id } = req.params
  const updatedValue = req.body.value
  try {
    await controller.updateRecord(id, updatedValue)
    res.send(`Record ${id} updated...`)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await controller.deleteRecord(id)
    res.send(`Record ${id} deleted...`)
  } catch (err) {
    next(err)
  }
})

function useRouter(app) {
  app.use('/api', router)
}

export default useRouter