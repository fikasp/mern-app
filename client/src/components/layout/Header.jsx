/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';

const styles = (backgroundColor) => css`
	height: 50px;
	color: white;
	background-color: ${backgroundColor};
	display: flex;
	justify-content: center;
	align-items: center;
	text-shadow: 0 0 5px black;
	transition: .5s;
`

const Header = ({title}) => {
	
	const [backgroundColor, setBackgroundColor] = useState('gray');

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
		<div css={styles(backgroundColor)}>{title}</div>
	)
}

export default Header