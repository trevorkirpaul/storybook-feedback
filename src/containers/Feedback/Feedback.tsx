import React from 'react'
import * as firebase from 'firebase'

import Login from 'containers/Login'
import Chat from 'containers/Chat'
import ActionBar from 'containers/ActionBar'
import { getUserSession } from 'utils/googleAuth'
import Comments from 'containers/Comments'
import { readComments } from 'utils/firebase'
import { sanitizeCommentsFromFirebase, EVENT_ID } from 'utils/helpers'

export interface FeedbackProps {
  active: boolean
  key: any
  api: any
  /**
   * Firebase DB instance
   */
  database?: any
  // @TODO get correct type
  /**
   * used to transport config from storybook config
   */
  channel: any
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
    const { channel } = this.props

    // used to determine if we have a legit
    // firebase connection
    const firebaseInitialized = firebase.apps.length > 0

    channel.on(EVENT_ID, (config) => {
      firebase.initializeApp(config)
    })

    // we are persisting user sessions
    // so let's first check if there is
    // an active user session avail

    firebaseInitialized && this.handleGetFirebaseUser()

    // run method to check for signed user
    // this will get the user data after a
    // successful Google sign in from the re-direct
    // and set the data in component state
    // if it fails, we'll trigger an error message
    firebaseInitialized && this.handleGetFirebaseUser()

    firebaseInitialized && this.handleGetComments()
  }

  componentDidUpdate() {
    const { displayName } = this.state
    const firebaseInitialized = firebase.apps.length > 0

    if (!displayName && firebaseInitialized) {
      this.handleGetFirebaseUser()
    }
  }

  handleGetFirebaseUser = () => {
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
  }

  handleGetUserSession = () => {
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
  }

  handleGetComments = () => {
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
