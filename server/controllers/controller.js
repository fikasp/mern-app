import * as models from '../models/models.js'
const path = './models/data.json'

export async function createRecord(name) {
  const data = await models.read(path)
  const newID = models.getMaxId(data)+1
  const newData = [...data, {id: newID, name}]
  await models.write(path, newData)
}

export async function readRecords() {
  const data = await models.read(path)
  console.log(data)
  return data
}

export async function readRecord(id) {
  const data = await models.read(path)
  const record = data.find(record => record.id === Number(id))
  console.log(record)
  return record
}

export async function deleteRecord(id) {
  const data = await models.read(path)
  const filteredData = data.filter(record => record.id !== Number(id));
  await models.write(path, filteredData)
}


