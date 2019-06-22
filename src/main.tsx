import React from 'react'
import addons from '@storybook/addons'
import * as firebase from 'firebase'

import Feedback from './containers/Feedback'

import {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DB_URL,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
} from './config'

const app = firebase.initializeApp({
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DB_URL,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
})

const database = firebase.database()

// Register the addon with a unique name.
addons.register('Feedback', (api) => {
  // Also need to set a unique name to the panel.
  addons.addPanel('Feedback/panel', {
    title: 'Feedback',
    render: ({ active, key }) => (
      <Feedback key={key} api={api} active={active} database={database} />
    ),
  })
})
