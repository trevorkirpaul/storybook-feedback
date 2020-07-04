import * as RealmWeb from 'realm-web'
import { isNil, get } from 'lodash'
import { setContext } from 'apollo-link-context'
import { ApolloClient, HttpLink, InMemoryCache, ApolloLink } from 'apollo-boost'

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

interface AuthorizationHeaderLink {
  app: RealmWeb.App
}

// Add an Authorization header with a valid user access token to all GraphQL requests
export const createAuthorizationHeaderLink = ({
  app,
}: AuthorizationHeaderLink) =>
  setContext(async (_, { headers }) => {
    if (app.currentUser) {
      // Refreshing custom data also refreshes the access token
      await app.currentUser.refreshCustomData()
    } else {
      // If no user is logged in, log in an anonymous user
      await app.logIn(RealmWeb.Credentials.anonymous())
    }
    // Get a valid access token for the current user
    const accessToken = get(app, 'currentUser.accessToken')

    // Set the Authorization header, preserving any other headers
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${accessToken}`,
      },
    }
  })

// Construct a new Apollo HttpLink that connects to your app's GraphQL endpoint
const createGraphqlUrl = (appId: string) =>
  `https://realm.mongodb.com/api/client/v2.0/app/${appId}/graphql`
export const createHttpLink = (appId: string) =>
  new HttpLink({ uri: createGraphqlUrl(appId) })

interface CreateApolloClient {
  appId: string
  app: RealmWeb.App
}

export const createApolloClient = ({ appId, app }: CreateApolloClient) => {
  const httpLink = createHttpLink(appId)
  const authorizationHeaderLink = createAuthorizationHeaderLink({ app })

  const client = new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return client
}
