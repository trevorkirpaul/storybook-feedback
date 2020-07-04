import React from 'react'
import * as RealmWeb from 'realm-web'

type StoryBookFeedbackDBTypes = 'mongoDB' | 'firebase'

export interface ConfigContextState {
  databaseType?: StoryBookFeedbackDBTypes
  mongoRealm?: RealmWeb.App
  realmAppId?: string
  updateConfig: (config: ConfigContextState) => void
}

const initialState: ConfigContextState = {
  databaseType: undefined,
  updateConfig: () => {},
}

const ConfigContext = React.createContext(initialState)

export default ConfigContext
