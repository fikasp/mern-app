/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'

import Typography from '@mui/material/Typography'
import List from '../content/List'
import Form from '../content/Form'

const styles = css`
	height: calc(100% - 100px);
	color: white;
  padding: 10px;
  overflow: auto;
`

const Main = ({isLoading, error, data, remove, add}) => {

  return (
    <main css={styles}>
      { isLoading ? (
          <Typography mt={2}>Ładowanie danych...</Typography>
        ) : error ? (
          <Typography mt={2}>Error... {error.message}</Typography>
        ) : (
          <>
            <Form add={add}/>
            <List data={data} remove={remove}/>
          </>
        )
      }
    </main>

  )
}

export default Main
