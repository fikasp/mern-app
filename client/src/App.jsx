import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { readList } from './redux/actions/list.action'

import { ContextProvider } from './context/context'
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

import { Global } from '@emotion/react'
import global from './styles/global'


export default function App () {

  const dispatch = useDispatch()

	useEffect( () => {
		dispatch(readList())

	},[dispatch])

  return (
    <ContextProvider>
      <Global styles={global} />
      <Container color="#333">
        <Header title="MERN APP"/>
        <Main/>
        <Footer/>
      </Container>
    </ContextProvider>
  )
}
