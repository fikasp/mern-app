/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react'
import Context from '../../context/context';

import Typography from '@mui/material/Typography'
import List from '../content/List'
import Form from '../content/Form'

const styles = css`
	height: calc(100% - 100px);
  overflow-x: hidden;
  overflow-y: auto;

  &>section {
    width: 50vw;
    min-width: 300px;
    padding: 10px;
  }
`

const Main = () => {

  const{ isLoading, error } = useContext(Context)

  return (
    <main css={styles}>
      <section>
      { isLoading ? (
        <Typography>Ładowanie danych...</Typography>
        ) : error ? (
          <Typography>Error... {error.message}</Typography>
        ) : (
          <>
            <Form/>
            <List/>
          </>
        )
      }
      </section>
    </main>
  )
}

export default Main
