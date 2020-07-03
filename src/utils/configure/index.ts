import addons from '@storybook/addons'

import { EVENT_ID } from 'utils/helpers'

import { RealmConfig } from '../mongo'

export interface configureDatabaseArguments {
  databaseType: 'firebase' | 'mongoDB'
  firebaseConfig?: {
    apiKey: string
    authDomain: string
    databaseURL: string
    projectId: string
    storageBucket: string
    messagingSenderId: string
  }
  mongoConfig?: RealmConfig
}

const configureDatabase = ({
  databaseType,
  firebaseConfig,
  mongoConfig,
}: configureDatabaseArguments) => {
  const channel = addons.getChannel()

  if (!channel) {
    console.log('Error getting channel')
  }

  if (databaseType === 'firebase' && firebaseConfig) {
    return channel.emit(EVENT_ID, { databaseType, firebaseConfig, mongoConfig })
  }

  if (databaseType === 'mongoDB') {
    return channel.emit(EVENT_ID, { databaseType, firebaseConfig, mongoConfig })
  }
}

export { configureDatabase }
