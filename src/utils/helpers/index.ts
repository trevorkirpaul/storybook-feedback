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
  return R.valuesIn(comments)
}

export { sanitizeCommentsFromFirebase, ADDON_ID, EVENT_ID }
