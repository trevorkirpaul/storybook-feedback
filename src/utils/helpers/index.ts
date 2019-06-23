import * as R from 'ramda'

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

export { sanitizeCommentsFromFirebase }
