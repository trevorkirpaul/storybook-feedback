import React from 'react'

import { ListItem, List } from 'components/ListItem'
import Text from 'components/Text'
import Button from 'components/Button'

import * as S from './styles'

export interface CommentsProps {
  comments: Array<{
    author: string
    content: string
    uuid: string
    storyId: string
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
              <ListItem key={comment.uuid}>
                <Text>
                  <S.BoldText>{comment.author}:</S.BoldText> {comment.content}
                </Text>
              </ListItem>
            )
          }
        })}
      </List>
    </S.Comments>
  )
}

export default Comments
