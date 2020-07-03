import * as RealmWeb from 'realm-web'
import { isNil, get } from 'lodash'

export interface RealmConfig {
  id: string
}

export interface ConfigureRealmWebApp {
  realmConfig: RealmConfig
}

const isValidRealmConfig = (x: unknown) =>
  !isNil(x) && typeof x === 'object' && !isNil(get(x, 'id'))

/**
 * Returns a connected RealmWeb App instance.
 */
export const configureRealmWebApp = ({ realmConfig }: ConfigureRealmWebApp) => {
  if (!isValidRealmConfig(realmConfig)) {
    throw new Error(
      'Storybook-Feedback Error: you have an invalid mongo RealmWeb config. Please ensure you have configured storybook-feedback correctly.'
    )
  }

  const app: RealmWeb.App = new RealmWeb.App({
    id: realmConfig.id,
  })

  return app
}

export interface AuthenticateMongoUser {
  anon?: boolean
  app: RealmWeb.App
  // @TODO: Figure out this shape
  credentials: RealmWeb.Credentials<any>
}
export const authenticateMongoUser = ({
  app,
  anon,
  credentials,
}: AuthenticateMongoUser) => {
  return new Promise(async (resolve, reject) => {
    if (anon) {
      // Create an anonymous credential
      const credentials = RealmWeb.Credentials.anonymous()
      resolve(credentials)
    }

    try {
      // Authenticate the user
      const user: RealmWeb.User = await app.logIn(credentials)

      // when true, user has successfully auth'd
      if (user.id === app.currentUser?.id) {
        resolve(user)
      }
      reject(
        "Storybook-Feedback Error: Failed to authenticate mongo user. User ID did not match the RealmWeb App instance's currentUser.id."
      )
    } catch (err) {
      reject(err)
    }
  })
}
