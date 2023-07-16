/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import Context from '../../context/context';

// components
import Button from '@mui/material/Button'

const styles = css`
  height: 50px;
  background-color: #444;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Footer = () => {
  const {handleRead} = useContext(Context)

  return (
    <footer css={styles}>
      <Button onClick={handleRead}>Update</Button>
    </footer>
  )
}

export default Footer
