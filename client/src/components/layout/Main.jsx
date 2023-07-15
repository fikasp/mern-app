/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'

import Typography from '@mui/material/Typography'
import List from '../content/List'

const styles = css`
	height: calc(100% - 100px);
	color: white;
  overflow: auto;
`

const Main = ({isLoading, error, data}) => {

  return (
    <main css={styles}>
      { isLoading ? (
          <Typography mt={2}>Ładowanie danych...</Typography>
        ) : error ? (
          <Typography mt={2}>Error... {error.message}</Typography>
        ) : (
          <List data={data} />
        )
      }
    </main>

  )
}

export default Main
