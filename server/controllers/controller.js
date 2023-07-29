import * as models from '../models/models.js'
const path = './models/data.json'


export async function createRecord(req, res) {
  try {
    const value = req.body.value
    const data = await models.read(path)
    const newID = models.getMaxId(data) + 1
    const newData = [...data, { id: newID, value, done: false }]
    await models.write(path, newData)
    res.send(`Record ${value} added...`)
  } catch (err) {
    next(err)
  }
}

export async function readRecords(req, res, next) {
  try {
    const data = await models.read(path)
    console.log(data)
    res.json(data)
  } catch (err) {
    next(err)
  }
}

export async function readRecord(req, res, next) {
  const { id } = req.params
  try {
    const data = await models.read(path)
    const record = data.find(record => record.id === Number(id))
    if (!record) {
      const error = new Error(`Record ${id} does not exist...`)
      error.status = 404
      throw error
    }
    console.log(record)
    res.status(200).json(record)
  } catch (err) {
    next(err)
  }
}

export async function updateRecord(req, res, next) {
  const { id } = req.params
  const updatedObj = req.body
  console.log(updatedObj);
  try {
    const data = await models.read(path)
    const updatedData = [...data];
    const recordIndex = updatedData.findIndex(record => record.id === Number(id))
    updatedData[recordIndex] = { ...updatedData[recordIndex], ...updatedObj }
    await models.write(path, updatedData)
    res.send(`Record ${id} updated...`)
  } catch (err) {
    next(err)
  }
}

export async function deleteRecord(req, res) {
  const { id } = req.params
  try {
    const data = await models.read(path)
    const filteredData = data.filter(record => record.id !== Number(id));
    await models.write(path, filteredData)
    res.send(`Record ${id} deleted...`)
  } catch (err) {
    next(err)
  }
}


