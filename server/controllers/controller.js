import { getMaxId } from '../utils/maxId.js'
import { read, write } from '../utils/files.js'

const path = './models/data.json'

async function getRecords() {
  const data = await read(path)
  console.log(data)
  return data
}

async function getRecord(id) {
  const data = await read(path)
  const record = data.find(record => record.id === Number(id))
  console.log(record)
  return record
}

async function deleteRecord(id) {
  const data = await read(path)
  const filteredData = data.filter(record => record.id !== Number(id));
  await write(path, filteredData)
}

async function addRecord(name) {
  const data = await read(path)
  const newID = getMaxId(data)+1
  const newData = [...data, {id: newID, name}]
  await write(path, newData)
}

export default {
  addRecord,
  getRecords,
  getRecord,
  deleteRecord
}
