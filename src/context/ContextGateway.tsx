import React, { useState } from 'react'

import ConfigContext, { ConfigContextState } from './config'

interface Props {
  children: React.ReactNode
}

const ContextGateway = ({ children }: Props) => {
  const [configContextState, setConfigContextState] = useState<
    ConfigContextState
  >({
    databaseType: undefined,
    setDatabaseType: (databaseType) =>
      setConfigContextState({
        ...configContextState,
        databaseType,
      }),
  })

  return (
    <>
      <ConfigContext.Provider value={configContextState}>
        {children}
      </ConfigContext.Provider>
    </>
  )
}

export default ContextGateway
