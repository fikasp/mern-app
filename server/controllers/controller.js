import data from "../models/data.js";

export function getById(id) {
  return data.find(obj => obj.id === Number(id))
}

export function getByName(name) {
  return data.find(obj => obj.name.toLowerCase() === name)
}

export function getAll() {
	return data
}


