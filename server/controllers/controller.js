import * as models from '../models/models.js'
const path = './models/data.json'

export async function createRecord(value) {
  const data = await models.read(path)
  const newID = models.getMaxId(data)+1
  const newData = [...data, {id: newID, value}]
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

export async function updateRecord(id, value) {
  const data = await models.read(path)
  const recordIndex = data.findIndex(record => record.id === Number(id))
  const updatedData = [...data];
  updatedData[recordIndex].value = value
  await models.write(path, updatedData)
}

export async function deleteRecord(id) {
  const data = await models.read(path)
  const filteredData = data.filter(record => record.id !== Number(id));
  await models.write(path, filteredData)
}


