import React, { useState, useEffect, useContext, useMemo } from 'react'
import * as RealmWeb from 'realm-web'
import * as firebase from 'firebase'
import { ApolloProvider } from '@apollo/react-hooks'
import { get, isNil } from 'lodash'
import { useStorybookApi } from '@storybook/api'

import ActionBar from 'containers/ActionBar'
import Chat from 'containers/Chat'
import Comments from 'containers/Comments'
import ConfigContext from 'context/config'
import Loader from 'components/Loader'
import Login from 'containers/Login'
import SettingsMenu from 'containers/SettingsMenu'
import UserProfileContext from 'context/UserProfileContext'
import { EVENT_ID } from 'utils/helpers'
import { configureDatabaseArguments } from 'utils/configure'
import { configureRealmWebApp } from 'utils/mongo'
import { createApolloClient } from 'utils/mongo'

export interface FeedbackProps {
  active: boolean
  key: any
  api: any
  /**
   * Firebase DB instance
   */
  database?: any
}

const StorybookFeedback = ({ active, key }: FeedbackProps) => {
  const configContext = useContext(ConfigContext)
  const userProfileContext = useContext(UserProfileContext)
  const storybookAPI = useStorybookApi()

  const [settingsIsOpen, setSettingsIsOpen] = useState(false)
  const [realmWeb, setRealmWeb] = useState<RealmWeb.App | null>(null)

  const isAuth = useMemo(() => {
    const googleId = get(userProfileContext.profile, 'googleId')
    return !isNil(googleId)
  }, [userProfileContext.profile])

  /**
   * Check if we have a cached Google Profile
   * and store in Context
   */
  useEffect(() => {
    const cachedGoogleProfile = localStorage.getItem('googleAccount')

    if (cachedGoogleProfile) {
      userProfileContext.setProfile(JSON.parse(cachedGoogleProfile))
    }
  }, [])

  /**
   * Connect to correct DB type
   */
  const handleConfigureDatabase = ({
    databaseType,
    firebaseConfig,
    mongoConfig,
  }: configureDatabaseArguments) => {
    if (databaseType === 'firebase' && firebaseConfig) {
      firebase.initializeApp(firebaseConfig)
    }

    if (databaseType === 'mongoDB' && mongoConfig) {
      const configuredMongoRealm = configureRealmWebApp({
        realmConfig: mongoConfig,
      })

      configContext.updateConfig({
        ...configContext,
        databaseType: 'mongoDB',
        mongoRealm: configuredMongoRealm,
        realmAppId: mongoConfig.id,
      })
    }
  }

  /**
   * on mount and when we receive the storybook config,
   * invoke function to connect to DB
   */
  useEffect(() => {
    if (!realmWeb) {
      storybookAPI.on(EVENT_ID, handleConfigureDatabase)
    }
  }, [realmWeb])

  const handleToggleSettings = () => {
    return setSettingsIsOpen(!settingsIsOpen)
  }

  if (!isAuth) {
    return <Login />
  }

  // render loading until we get the data for mongo realms
  if (!configContext.realmAppId || !configContext.mongoRealm) {
    return <Loader />
  }

  const apolloClient = createApolloClient({
    appId: configContext.realmAppId,
    app: configContext.mongoRealm,
  })

  return (
    <ApolloProvider client={apolloClient}>
      <Chat>
        <Comments />
        <SettingsMenu
          visible={settingsIsOpen}
          handleToggleSettings={handleToggleSettings}
        />
        <ActionBar handleToggleSettings={handleToggleSettings} />
      </Chat>
    </ApolloProvider>
  )
}

export default StorybookFeedback
