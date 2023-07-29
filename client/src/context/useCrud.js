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
    } catch (error) {
      setError(error)
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreate = async (value) => {
    try {
      const data = await service.createData(value)
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdate = async (id, value) => {
    try {
      const data = await service.updateData(id, { value })
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDone = async (id, done) => {
    try {
      const data = await service.updateData(id, { done })
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = (id) => async() => {
    try {
      const data = await service.deleteData(id)
      setData(data)
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
