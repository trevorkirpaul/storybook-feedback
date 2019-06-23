import React from 'react'

import Button from 'components/Button'
import { googleSignIn } from 'utils/googleAuth'

import * as S from './styles'

const Login = () => {
  return (
    <S.Login>
      <S.Heading as='h3'>Please Sign In</S.Heading>

      <S.Text>
        In order to contribute/leave comments, you must be signed in. Click on
        the button to sign in through Google.
      </S.Text>

      <Button onClick={() => googleSignIn()}>Sign In</Button>
    </S.Login>
  )
}

export default Login
