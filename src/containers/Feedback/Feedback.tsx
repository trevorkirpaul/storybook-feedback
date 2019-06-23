import React from 'react'
import * as firebase from 'firebase'

import Login from 'containers/Login'
import Chat from 'containers/Chat'
import ActionBar from 'containers/ActionBar'
import { getUserSession } from 'utils/googleAuth'
import Comments from 'containers/Comments'
import { readComments } from 'utils/firebase'
import { sanitizeCommentsFromFirebase } from 'utils/helpers'

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
    displayName: '',
    email: '',
    avatar: '',
    credential: '',
    refreshToken: '',
    signInError: false,
    commentsError: false,
    comments: [],
  }

  componentDidMount() {
    // we are persisting user sessions
    // so let's first check if there is
    // an active user session avail
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, refreshToken } = user

        this.setState(() => ({
          displayName,
          email,
          refreshToken,
          avatar: photoURL,
        }))
      }
    })

    // run method to check for signed user
    // this will get the user data after a
    // successful Google sign in from the re-direct
    // and set the data in component state
    // if it fails, we'll trigger an error message
    getUserSession()
      .then((response) => {
        if (!response.error) {
          const { credential, displayName, email, avatar } = response
          console.log({
            credential,
            displayName,
            email,
            avatar,
          })
          return this.setState({
            credential,
            displayName,
            email,
            avatar,
          })
        }
      })
      .catch((err) => {
        return this.setState({ signInError: true })
      })

    this.handleGetComments()
  }

  handleGetComments = () => {
    console.log()

    readComments()
      .then((response) => {
        return this.setState({
          comments: sanitizeCommentsFromFirebase(response.values),
        })
      })
      .catch(() => {
        return this.setState({
          commentsError: true,
        })
      })
  }

  render() {
    const { active } = this.props
    const { email, avatar, comments } = this.state

    // addon not focused
    if (!active) {
      return null
    }

    if (active) {
      // if user not signed in
      if (!email) {
        return <Login />
      }

      return (
        <Chat>
          <Comments
            comments={comments}
            handleGetComments={this.handleGetComments}
            storyId={this.props.api.getUrlState().storyId}
          />

          <ActionBar
            avatar={avatar}
            userEmail={email}
            handleGetComments={this.handleGetComments}
            storyId={this.props.api.getUrlState().storyId}
          />
        </Chat>
      )
    }
  }
}

export default Feedback
