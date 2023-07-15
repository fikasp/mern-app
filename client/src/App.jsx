import React, {useState, useEffect} from 'react'
import Context from './context/context'

// components
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

// services
import service from './services/service'

// styles
import { Global } from '@emotion/react'
import global from './styles/global'

export default function App () {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
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

  const handleRemove = (id) => async () => {
    try {
      await service.deleteData(id)
      await fetchData()
    } catch (error) {
      console.error(error);
    }
	}
  const handleAdd = async (name) => {
    try {
      await service.addData(name)
      await fetchData()

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container color="#333">
      <Global styles={global} />
      <Header title="PANTRIEST" />
      <Main 
        isLoading={isLoading}
        error={error}
        data={data}
        remove={handleRemove}
        add={handleAdd}
      />
      <Footer fetchData={fetchData}/>
    </Container>
  );
}
