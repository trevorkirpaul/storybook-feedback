import React from 'react'

import { Input } from 'components/Form'
import Button from 'components/Button'

export interface FeedbackProps {
  active: boolean
  key: any
  api: any
  /**
   * Firebase DB instance
   */
  database: any
}

class Feedback extends React.Component<FeedbackProps> {
  state = {
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

  // for testing firebase
  handleTestDB = () => {
    return console.log('NEW')
    // return googleSignIn()

    // this.props.database
    //   .ref('/favorites/')
    //   .once('value')
    //   .then((snapshot) => {
    //     console.log(snapshot.val())
    //   })
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

          <Button onClick={() => this.handleTestDB()}>Submit</Button>
        </React.Fragment>
      )
    }
  }
}

export default Feedback
