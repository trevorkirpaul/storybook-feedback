import React, { useContext, useCallback, useState } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { get } from 'lodash'
import ConfigContext from 'context/config'
import UserProfileContext from 'context/UserProfileContext'
import Button from 'components/Button'
import { clientID } from 'utils/googleAuth'

import * as S from './styles'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const configContext = useContext(ConfigContext)
  const userProfileContext = useContext(UserProfileContext)

  const { signIn } = useGoogleLogin({
    clientId: clientID,
    onSuccess: (gResponse) => {
      setLoading(false)
      const profile = get(gResponse, 'profileObj')
      localStorage.setItem('googleAccount', JSON.stringify(profile))
      userProfileContext.setProfile(profile)
    },
    onFailure: (gFail) => console.log('gFail', gFail),
    cookiePolicy: 'single_host_origin',
  })

  const handleMongoSignIn = useCallback(() => {
    if (configContext.mongoRealm) {
      setLoading(true)
      signIn()
    }
  }, [configContext.mongoRealm])

  return (
    <S.Login>
      <S.Heading as='h3'>Please Sign In</S.Heading>

      <S.Text>
        In order to contribute/leave comments, you must be signed in. Click on
        the button to sign in through Google.
      </S.Text>

      <Button loading={loading} onClick={handleMongoSignIn}>
        Sign In
      </Button>
    </S.Login>
  )
}

export default Login
