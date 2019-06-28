import * as firebase from 'firebase'
const uuidv4 = require('uuid/v4')

const sendComment = ({
  content,
  author,
  storyId,
}: {
  content: string
  author: string
  storyId: string
}) => {
  return firebase
    .database()
    .ref('comments/')
    .push({
      content,
      author,
      uuid: uuidv4(),
      storyId,
    })
}

const readComments = () => {
  return new Promise((res, rej) => {
    firebase
      .database()
      .ref('comments/')
      .once('value')
      .then((snapshot) => {
        res({
          error: false,
          values: snapshot.val(),
        })
      })
      .catch((err) => {
        rej({
          error: true,
          values: null,
        })
      })
  })
}

const deleteCommentById = (id: string) => {
  firebase
    .database()
    .ref(`comments/${id}`)
    .remove()
    .then(() => {})
}

export { sendComment, readComments, deleteCommentById }
