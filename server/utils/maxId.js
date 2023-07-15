export function getMaxId(records) {
  return records.reduce((maxId, record) => {
    return Math.max(maxId, record.id)
  }, 0)
}