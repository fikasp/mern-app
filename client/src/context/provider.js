import Context from "./context"
import { useState, useEffect } from 'react'
import * as service from '../services/service'

const Provider = ({ children }) => {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleGet = async () => {
    try {
      setError(false)

      const data = await service.getData()
      setData(data)
      console.log(data)

    } catch (error) {
      setError(error)
      console.error(error)

    } finally {
      setIsLoading(false)
    }
  }

  const handleAdd = async (name) => {
    try {
      await service.addData(name)
      await handleGet()

    } catch (error) {
      console.error(error);
    }
  }

  const handleRemove = (id) => async () => {
    try {
      await service.deleteData(id)
      await handleGet()
    } catch (error) {
      console.error(error);
    }
	}

  useEffect(() => {
    handleGet()
  }, [])

  return (
    <Context.Provider value={{
      data, 
      error, 
      isLoading, 
      handleRemove, 
      handleAdd, 
      handleGet
      }}>
      {children}
    </Context.Provider>
)}

export default Provider
