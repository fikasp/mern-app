import React, {useState, useEffect} from 'react'

// components
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import List from './components/content/List'

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
    <>
      <Global styles={global} />
      <Container color="#333">
        <Header title="PANTRIEST" />
        {isLoading ? (
            <Typography mt={2}>Ładowanie danych...</Typography>
          ) : error ? (
            <Typography mt={2}>Error... {error.message}</Typography>
          ) : (
            <List data={data} />
          )
        }
        <Button onClick={fetchData}>Aktualizuj</Button>
      </Container>
    </>
  );
}
