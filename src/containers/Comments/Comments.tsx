import React from 'react'

import { List } from 'components/ListItem'

import Comment from './components/Comment'

import * as S from './styles'

export interface CommentsProps {
  comments: Array<{
    author: string
    content: string
    uuid: string
    storyId: string
    firebaseId: string
  }>
  handleGetComments: () => void
  storyId: string
  userEmail?: string
}

const Comments = ({ comments, storyId, userEmail }: CommentsProps) => {
  return (
    <S.Comments>
      <List>
        {comments.map((comment) => {
          if (comment.storyId === storyId) {
            return (
              <Comment
                key={comment.uuid}
                comment={comment}
                userEmail={userEmail}
                storyId={storyId}
              />
            )
          }
        })}
      </List>
    </S.Comments>
  )
}

export default Comments
