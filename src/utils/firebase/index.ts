import * as firebase from 'firebase'
import { v4 as uuidv4 } from 'uuid'

const signOut = () => {
  firebase.auth().signOut().then()
}

const sendComment = ({
  content,
  author,
  storyId,
}: {
  content: string
  author: string
  storyId: string
}) => {
  return firebase.database().ref('comments/').push({
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

/**
 * **updateComment** is a method used to update the value
 * of a comment. Keep in mind that the `id` value we are
 * using is not the `comment.UUID` but the object key
 * within the FB database.
 *
 * Since FB stores everything as an object, the way we
 * identify the comment is through the comment's object key
 * which is a unique ID. Our front end never uses that key
 * except for when we interact with firebase through
 * a couple methods
 *
 * @TODO add link to github for more information
 *
 * @param id obj key in FB DB, not the comment.UUID
 * @param content new value of comment
 */
const updateComment = (id: string, content: string) => {
  firebase
    .database()
    .ref()
    .update({
      [`comments/${id}/content`]: content,
    })
    .then(() => {})
}

export { sendComment, readComments, deleteCommentById, updateComment, signOut }
