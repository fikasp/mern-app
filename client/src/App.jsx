import React from 'react';
import { Global } from '@emotion/react';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import global from './styles/global';

export default function App () {
  return (
    <>
      <Global styles={global} />
			<Container color="#333">
				<Header title="PANTRIEST"/>
			</Container>
    </>
  )
}
