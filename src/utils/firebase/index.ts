import * as firebase from 'firebase'
const uuidv4 = require('uuid/v4')

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
      uuid: uuidv4(),
    })
}

const readComments = () => {
  firebase
    .database()
    .ref('comments/')
    .once('value')
    .then((snapshot) => {
      console.log(snapshot.val())
    })
    .catch((err) => console.log('ERROR', err))
}

export { sendComment, readComments }
