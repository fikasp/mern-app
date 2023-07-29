import { useState, useEffect } from "react"
import * as service from '../services/service'

export const useCrud = () => {
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

  const handleCreate = async (value) => {
    try {
      await service.createData(value)
      await handleRead()
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdate = async (id, value) => {
    try {
      await service.updateData(id, { value })
      await handleRead()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDone = async (id, done) => {
    try {
      await service.updateData(id, { done })
      await handleRead()
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = (id) => async() => {
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

  return ({
    data,
    error,
    isLoading,
    handleCreate,
    handleRead,
    handleUpdate,
    handleDone,
    handleDelete,
  })
}
