import { Router } from 'express'
import * as controller from '../controllers/controller.js'

const router = Router()

router.post('/', async (req, res) => {
  const value = req.body.value
  await controller.createRecord(value)
  res.send(`Record ${value} added...`)
})

router.get('/', async (req, res) => {
  try {
    const data = await controller.readRecords()
    res.json(data)
  } catch (err) {
    res.status(500).send(`Server error... ${err}`)
    console.log(err);
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const data = await controller.readRecord(id)
    res.json(data || `Record ${id} does not exists...`)
  } catch (err) {
    res.status(500).send(`Server error... ${err}`)
    console.log(err);
  }
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const updatedValue = req.body.value
  try {
    await controller.updateRecord(id, updatedValue)
    res.send(`Record ${id} updated...`)
  } catch (err) {
    res.status(500).send(`Server error... ${err}`)
    console.log(err)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await controller.deleteRecord(id)
  res.send(`Record ${id} deleted...`)
})

function useRouter(app) {
  app.use('/api', router)
}

export default useRouter