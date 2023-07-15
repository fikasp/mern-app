import React, {useState, useEffect} from 'react'

// components
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

// context
import Context from './context/context'

// services
import service from './services/service'

// styles
import { Global } from '@emotion/react'
import global from './styles/global'

export default function App () {

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
      <Global styles={global} />
      <Container color="#333">
        <Header title="PANTRIEST" />
        <Main/>
        <Footer/>
      </Container>
    </Context.Provider>
  );
}
