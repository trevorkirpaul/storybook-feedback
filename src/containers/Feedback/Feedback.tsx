import React from 'react'
import * as firebase from 'firebase'

import Login from 'containers/Login'
import Chat from 'containers/Chat'
import ActionBar from 'containers/ActionBar'
import { getUserSession } from 'utils/googleAuth'
import Comments from 'containers/Comments'
import { readComments } from 'utils/firebase'
import { sanitizeCommentsFromFirebase, EVENT_ID } from 'utils/helpers'
import Loader from 'components/Loader'

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
    loading: false,
    noUserFound: false,
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

    // firebaseInitialized && this.handleGetUserSession()

    // run method to check for signed user
    // this will get the user data after a
    // successful Google sign in from the re-direct
    // and set the data in component state
    // if it fails, we'll trigger an error message
    // firebaseInitialized && this.handleGetFirebaseUser()

    // firebaseInitialized && this.handleGetComments()
  }

  componentDidUpdate() {
    const { displayName, comments, loading, noUserFound } = this.state

    const firebaseInitialized = firebase.apps.length > 0

    if (firebaseInitialized) {
      if (!displayName && !noUserFound && !loading) {
        return this.handleGetFirebaseUser()
      }
    }

    // subscribe to get comments
    if (displayName) {
      const commentsRef = firebase.database().ref('comments/')

      commentsRef.on('value', (snapshot) => {
        const commentsFromFB = sanitizeCommentsFromFirebase(snapshot.val())

        if (comments.length !== commentsFromFB.length) {
          this.setState(() => ({ comments: commentsFromFB }))
        }
      })
    }
  }

  handleGetFirebaseUser = () => {
    const { active } = this.props
    const { displayName } = this.state

    if (displayName && !active) {
      return null
    }

    this.setState(() => ({ loading: true, noUserFound: true }))

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL, refreshToken } = user

        this.setState(() => ({
          displayName,
          email,
          refreshToken,
          avatar: photoURL,
          loading: false,
          noUserFound: false,
        }))
      }

      if (!user) {
        this.setState(() => ({ loading: false, noUserFound: true }))
      }
    })
  }

  handleGetUserSession = () => {
    const { loading, displayName } = this.state

    if (displayName) {
      return null
    }

    !loading && this.setState(() => ({ loading: true }))

    getUserSession()
      .then((response) => {
        if (!response.error) {
          const { credential, displayName, email, avatar } = response

          return this.setState({
            credential,
            displayName,
            email,
            avatar,
            loading: false,
          })
        }
      })
      .catch((err) => {
        return this.setState({ signInError: true, loading: false })
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
    const { email, avatar, comments, loading } = this.state

    // addon not focused
    if (!active) {
      return null
    }

    if (active) {
      if (loading) {
        return <Loader />
      }

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
