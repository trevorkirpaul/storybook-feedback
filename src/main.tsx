import React from 'react'
import { addons } from '@storybook/addons'

import Feedback from './containers/Feedback'
import { ADDON_ID } from 'utils/helpers'
import { configureDatabase } from 'utils/configure'
import ContextGateway from 'context/ContextGateway'

// Register the addon with a unique name.
addons.register(ADDON_ID, (api) => {
  addons.addPanel(ADDON_ID, {
    title: 'Feedback',
    render: ({ active, key }) => (
      <ContextGateway>
        <Feedback key={key} api={api} active={active} />
      </ContextGateway>
    ),
  })
})

export { configureDatabase }
