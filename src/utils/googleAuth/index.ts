import * as firebase from 'firebase'

const provider = new firebase.auth.GoogleAuthProvider()

/**
 * invoke when you want to redirect user to the google sign in page
 */
const googleSignIn = () =>
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

/**
 * after user signs in through the google redirect,
 * this method will get that user session, whether it
 * was successful or not
 */
const getUserSession = () =>
  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        return {
          credential: result.credential,
          user: result.user,
        }
      }
    })
    .catch((err) => {
      return {
        errorCode: err.code,
        errorMessage: err.message,
        userEmail: err.email,
      }
    })

export { googleSignIn, provider, getUserSession }
