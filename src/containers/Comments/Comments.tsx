import React, { useContext } from 'react'
import { useStorybookApi } from '@storybook/api'
import { get } from 'lodash'

import { List } from 'components/ListItem'
import UserProfileContext from 'context/UserProfileContext'
import Loader from 'components/Loader'
import useCommentService from 'hooks/useCommentService'
import { CommentInterface } from 'utils/mongo/schemas/comment'

import Comment from './components/Comment'

import * as S from './styles'

const Comments = () => {
  const storybookApi = useStorybookApi()
  const userProfile = useContext(UserProfileContext)
  const commentService = useCommentService()

  const userEmail = get(userProfile, 'profile.email')
  const comments: Array<CommentInterface> | null | undefined = get(
    commentService,
    'allComments'
  )
  /**
   * storyId of the currently selected/rendering story
   * from the user's storybook instance.
   *
   * This value can change so it's not a 100% reliable
   * ID. If the dev changes the story's name/location
   * then the ID will change.
   *
   * I'm not sure if there's a better identifier which
   * would never change. - Trevor Kirpaul
   */
  const currentStoryId: string = get(storybookApi.getUrlState(), 'storyId', '')

  if (!userEmail || !comments) {
    return <Loader />
  }

  return (
    <S.Comments>
      <List>
        {comments.map((comment) => {
          if (comment.storyId === currentStoryId) {
            return (
              <Comment
                key={comment._id}
                comment={comment}
                userEmail={userEmail}
                storyId={comment.storyId}
              />
            )
          }
        })}
      </List>
    </S.Comments>
  )
}

export default Comments
