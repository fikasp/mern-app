const active = true

export default function logger (callback, value) {
  const functionName = callback.name

  let functionValue = ""
  if (value) {
    if (value instanceof Object) {
      functionValue = `${Object.keys(value)}: ${Object.values(value)}`
    } else {
      functionValue = value
    }
  } 
  if (active) {
    console.log(`${functionName}(${functionValue})`)
  }
}
