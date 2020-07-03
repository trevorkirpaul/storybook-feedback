import { valuesIn, keysIn } from 'lodash'

const ADDON_ID = 'Feedback/panel'
/**
 * Message ID for Storybook-Feedback Addon
 */
const EVENT_ID = `${ADDON_ID}/event`

const sanitizeCommentsFromFirebase = (
  comments: Array<{
    [id: string]: {
      author: string
      content: string
      uuid: string
      storyId: string
    }
  }>
) => {
  const firebaseId = keysIn(comments)
  return valuesIn(comments).map((comment, i) => ({
    ...comment,
    firebaseId: firebaseId[i],
  }))
}

export { sanitizeCommentsFromFirebase, ADDON_ID, EVENT_ID }
