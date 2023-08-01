/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

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

  return (
    <main css={styles}>
      <section>
        <Form/>
        <List/>
      </section>
    </main>
  )
}

