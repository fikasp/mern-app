/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// components
import Button from '@mui/material/Button'

const styles = css`
  height: 50px;
  background-color: #444;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Footer = ({fetchData}) => {

  return (
    <footer css={styles}>
      <Button onClick={fetchData}>Update</Button>
    </footer>
  )
}

export default Footer
