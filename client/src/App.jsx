import Provider from './context/provider'
import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

import { Global } from '@emotion/react'
import global from './styles/global'

export default function App () {
  return (
    <Provider>
      <Global styles={global} />
      <Container color="#333">
        <Header title="PANTRIST"/>
        <Main/>
        <Footer/>
      </Container>
    </Provider>
  )
}
