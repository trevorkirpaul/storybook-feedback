import React from 'react'
import addons from '@storybook/addons'

import { Input } from './Form'
import Button from './Button'

export interface FeedbackProps {
  active: boolean
  key: any
  api: any
}

class Feedback extends React.Component<FeedbackProps> {
  state = {
    value: 'Trevor',
    name: '',
  }

  handleOnChange = (e) => {
    const {
      target: { name, value },
    } = e
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  render() {
    const { active } = this.props
    const { name } = this.state

    if (!active) {
      return null
    }

    if (active) {
      return (
        <React.Fragment>
          <Input name='name' value={name} onChange={this.handleOnChange} />

          <Button onClick={() => console.log(this.state)}>Submit</Button>
        </React.Fragment>
      )
    }
  }
}

export default Feedback

// Register the addon with a unique name.
addons.register('Feedback', (api) => {
  // Also need to set a unique name to the panel.
  addons.addPanel('Feedback/panel', {
    title: 'Feedback',
    render: ({ active, key }) => (
      <Feedback key={key} api={api} active={active} />
    ),
  })
})
