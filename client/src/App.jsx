import React, {useState, useEffect} from 'react'

// components
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

// services
import { getData } from './services/service'

// styles
import { Global } from '@emotion/react'
import global from './styles/global'


export default function App () {

  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError(false)

      const data = await getData()
      setData(data)
      console.log(data)

    } catch (error) {
      setError(error)
      console.error(error)

    } finally {
      setIsLoading(false)
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
      />
      <Footer fetchData={fetchData}/>
    </Container>
  );
}
