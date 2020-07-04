import * as firebase from 'firebase'

/**
 * invoke when you want to redirect user to the google sign in page
 */
const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebase
    .auth()
    .signInWithRedirect(provider)
    .then((result) => {
      // @TODO: complete google connection
      // console.log(result)
    })
    .catch((error) => {
      throw new Error('Storybook-Feedback: Failed to google auth')
      // console.log(error)
    })
}

const getUserSession = () => {
  return firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential && result.user) {
        return {
          error: false,
          credential: result.credential,
          displayName: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
        }
      }

      return {
        error: true,
        credential: null,
        displayName: null,
        email: null,
        avatar: null,
      }
    })
    .catch(() => {
      return {
        error: true,
        credential: null,
        displayName: null,
        email: null,
        avatar: null,
      }
    })
}

const clientID =
  '514439096132-g85n6sfj4dc3prb7bifp2gsfc72c5ejr.apps.googleusercontent.com'

export { googleSignIn, getUserSession, clientID }
