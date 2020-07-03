import React from 'react'
import addons from '@storybook/addons'

import Feedback from './containers/Feedback'
import { ADDON_ID } from 'utils/helpers'
import { configureDatabase } from 'utils/configure'
import ContextGateway from 'context/ContextGateway'

// Register the addon with a unique name.
addons.register(ADDON_ID, (api) => {
  // used to get config options
  // from storybook config
  const channel = addons.getChannel()

  // Also need to set a unique name to the panel.
  addons.addPanel(ADDON_ID, {
    title: 'Feedback',
    render: ({ active, key }) => (
      <ContextGateway>
        <Feedback key={key} api={api} active={active} channel={channel} />
      </ContextGateway>
    ),
  })
})

export { configureDatabase }
