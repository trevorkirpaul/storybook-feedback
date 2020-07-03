import React from 'react'

type StoryBookFeedbackDBTypes = 'mongoDB' | 'firebase'

export interface ConfigContextState {
  databaseType?: StoryBookFeedbackDBTypes
  setDatabaseType?: (dbType: StoryBookFeedbackDBTypes) => void
}

const initialState: ConfigContextState = {
  databaseType: undefined,
}

const ConfigContext = React.createContext(initialState)

export default ConfigContext
