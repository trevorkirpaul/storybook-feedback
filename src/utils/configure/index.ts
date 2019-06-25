import addons from '@storybook/addons'

import { EVENT_ID } from 'utils/helpers'

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
}

const configureDatabase = ({
  databaseType,
  firebaseConfig,
}: configureDatabaseArguments) => {
  const channel = addons.getChannel()

  if (!channel) {
    console.log('Error getting channel')
  }

  if (databaseType === 'firebase' && firebaseConfig) {
    return channel.emit(EVENT_ID, firebaseConfig)
  }

  if (databaseType === 'mongoDB') {
    console.log('Coming soon!')
  }
}

export { configureDatabase }
