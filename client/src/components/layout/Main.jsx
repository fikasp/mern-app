/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSelector } from 'react-redux'

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

export default function Main () {
  const { isLoading, error } = useSelector(state => state.loading)

  return (
    <main css={styles}>
      <section>
      { 
        isLoading ? 
      (
        <Typography>Ładowanie danych...</Typography>
      ) 
      : error ? 
      (
        <Typography>Error... {error.message}</Typography>
      ) 
      : 
      (
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

