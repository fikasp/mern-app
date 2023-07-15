import { read, write } from '../utils/files.js'
import { getMaxId } from '../utils/maxId.js'

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




// // Funkcja do dodawania rekordów
// async function addRecord(req, res) {
//   try {
//     // Odczytaj istniejące dane z pliku
//     const data = await fs.readFile('dane.json', 'utf8');
//     const existingData = JSON.parse(data);

//     // Dodaj nowy rekord do danych
//     const newRecord = { id: 1, name: 'Nowy rekord' }; // Przykładowy nowy rekord
//     existingData.push(newRecord);

//     // Zapisz zaktualizowane dane do pliku
//     await fs.writeFile('dane.json', JSON.stringify(existingData), 'utf8');

//     res.json({ message: 'Rekord dodany pomyślnie' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Wystąpił błąd serwera');
//   }
// }

export default {
  addRecord,
  getRecords,
  getRecord,
  deleteRecord
}
