import { promises as fs } from 'fs';

export async function read(file) {
  try {
    const string = await fs.readFile(file, 'utf8')
    return (JSON.parse(string))
  } catch (err) {
    console.log(err)
  }
}

export async function write(file, data) {
  try {
    const string = JSON.stringify(data)
    await fs.writeFile(file, string, 'utf8')
  } catch (err) {
    console.log(err)
  }
}