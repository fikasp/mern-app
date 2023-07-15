import { promises as fs } from 'fs';

export async function read(file) {
  const string = await fs.readFile(file, 'utf8')
  return (JSON.parse(string))
}

export async function write(file, data) {
  const string = JSON.stringify(data)
  await fs.writeFile(file, string, 'utf8')
}