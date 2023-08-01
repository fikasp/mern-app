/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import Button from '@mui/material/Button'

const styles = css`
  height: 50px;
  background-color: #444;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default function Footer () {

  return (
    <footer css={styles}>
      {/* <Button onClick={handleRead}>Update</Button> */}
    </footer>
  )
}
