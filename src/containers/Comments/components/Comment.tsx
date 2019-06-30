import React from 'react'
import { Delete, Edit, CheckSquare, XCircle } from 'react-feather'

import { ListItem } from 'components/ListItem'
import { deleteCommentById, updateComment } from 'utils/firebase'
import Text from 'components/Text'

import * as S from '../styles'

export interface CommentProps {
  comment: {
    author: string
    content: string
    uuid: string
    storyId: string
    firebaseId: string
  }
  userEmail?: string
  storyId: string
}

const Comment = ({ comment, userEmail }: CommentProps) => {
  const [editing, toggleEditing] = React.useState(false)
  const [values, setValues] = React.useState({
    commentSnapshot: '',
    newCommentValue: '',
  })

  const editComment = () => {
    toggleEditing(!editing)
    setValues({
      ...values,
      commentSnapshot: comment.content,
      newCommentValue: comment.content,
    })
  }

  const cancelEdit = () => {
    toggleEditing(!editing)

    setValues({
      commentSnapshot: '',
      newCommentValue: '',
    })
  }

  const confirmEdit = () => {
    updateComment(comment.firebaseId, values.newCommentValue)

    setValues({
      commentSnapshot: '',
      newCommentValue: '',
    })

    toggleEditing(!editing)
  }

  return (
    <S.Comment>
      {editing && (
        <S.EditComment>
          <S.EditCommentLeft>
            <S.TextArea
              name='newComment'
              onChange={({ currentTarget: { value } }) => {
                return setValues({ ...values, newCommentValue: value })
              }}
              value={values.newCommentValue}
              placeholder='enter comment or press *ESC* to cancel'
            />
          </S.EditCommentLeft>

          <S.EditCommentRight>
            <S.Clickable onClick={() => cancelEdit()}>
              <XCircle color='#f44336' size={16} />
            </S.Clickable>

            <S.Clickable onClick={() => confirmEdit()}>
              <CheckSquare color='#cddc39' size={16} />
            </S.Clickable>
          </S.EditCommentRight>
        </S.EditComment>
      )}

      <ListItem
        key={comment.uuid}
        left={
          <Text>
            <S.BoldText>{comment.author}:</S.BoldText> {comment.content}
          </Text>
        }
        right={
          userEmail === comment.author ? (
            <React.Fragment>
              <S.Clickable onClick={() => editComment()}>
                <Edit color='#383838' size={16} />
              </S.Clickable>
              <S.Clickable
                onClick={() => deleteCommentById(comment.firebaseId)}
              >
                <Delete color='#383838' size={16} />
              </S.Clickable>
            </React.Fragment>
          ) : null
        }
      />
    </S.Comment>
  )
}

export default Comment
