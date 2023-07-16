import Context from "./context"
import { useState, useEffect } from 'react'
import * as service from '../services/service'

const Provider = ({ children }) => {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleRead = async () => {
    try {
      setError(false)
      const data = await service.readData()
      setData(data)
      console.log(data)

    } catch (error) {
      setError(error)
      console.error(error)

    } finally {
      setIsLoading(false)
    }
  }

  const handleCreate = async (name) => {
    try {
      await service.createData(name)
      await handleRead()

    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdate = async (id, updatedName) => {
    try {
      await service.updateData(id, updatedName)
      await handleRead()
    } catch (error) {
      console.error(error)
    }
  };
  
  const handleDelete = (id) => async () => {
    try {
      await service.deleteData(id)
      await handleRead()
    } catch (error) {
      console.error(error)
    }
	}

  useEffect(() => {
    handleRead()
  }, [])

  return (
    <Context.Provider value={{
      data, 
      error, 
      isLoading, 
      handleCreate, 
      handleRead,
      handleUpdate,
      handleDelete, 
      }}>
      {children}
    </Context.Provider>
)}

export default Provider
