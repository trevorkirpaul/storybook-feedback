import * as R from 'ramda'

const ADDON_ID = 'Feedback/panel'
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
  const firebaseId = R.keysIn(comments)
  return R.valuesIn(comments).map((comment, i) => ({
    ...comment,
    firebaseId: firebaseId[i],
  }))
}

export { sanitizeCommentsFromFirebase, ADDON_ID, EVENT_ID }
