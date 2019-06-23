import * as firebase from 'firebase'

const sendComment = ({
  content,
  author,
}: {
  content: string
  author: string
}) => {
  return firebase
    .database()
    .ref('comments/')
    .push({
      content,
      author,
    })
}

export { sendComment }
