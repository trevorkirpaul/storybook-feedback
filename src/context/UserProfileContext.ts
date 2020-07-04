import React from 'react'
import { GoogleLoginResponse } from 'react-google-login'

export interface UserProfileState {
  profile?: GoogleLoginResponse['profileObj']
  setProfile: (profile: GoogleLoginResponse['profileObj']) => void
}

const initialState: UserProfileState = {
  setProfile: () => {},
}

const UserProfileContext = React.createContext(initialState)

export default UserProfileContext
