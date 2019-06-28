import React from 'react'
import { Delete } from 'react-feather'

import { ListItem, List } from 'components/ListItem'
import { deleteCommentById } from 'utils/firebase'
import Text from 'components/Text'

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
}

const Comments = ({ comments, storyId }: CommentsProps) => {
  return (
    <S.Comments>
      <List>
        {comments.map((comment) => {
          if (comment.storyId === storyId) {
            return (
              <ListItem
                key={comment.uuid}
                left={
                  <Text>
                    <S.BoldText>{comment.author}:</S.BoldText> {comment.content}
                  </Text>
                }
                right={
                  <S.Clickable
                    onClick={() => deleteCommentById(comment.firebaseId)}
                  >
                    <Delete color='#383838' size={16} />
                  </S.Clickable>
                }
              />
            )
          }
        })}
      </List>
    </S.Comments>
  )
}

export default Comments
