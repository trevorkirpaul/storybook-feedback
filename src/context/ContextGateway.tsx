import React, { useState } from 'react'
import * as RealmWeb from 'realm-web'

import ConfigContext, { ConfigContextState } from './config'
import UserProfileContext, { UserProfileState } from './UserProfileContext'

interface Props {
  children: React.ReactNode
}

const ContextGateway = ({ children }: Props) => {
  const [configContextState, setConfigContextState] = useState<
    ConfigContextState
  >({
    databaseType: undefined,
    mongoRealm: undefined,
    updateConfig: (config) => setConfigContextState(config),
  })

  const [userProfileState, setUserProfileState] = useState<UserProfileState>({
    setProfile: (p) =>
      setUserProfileState({
        ...userProfileState,
        profile: p,
      }),
  })

  return (
    <>
      <ConfigContext.Provider value={configContextState}>
        <UserProfileContext.Provider value={userProfileState}>
          {children}
        </UserProfileContext.Provider>
      </ConfigContext.Provider>
    </>
  )
}

export default ContextGateway
