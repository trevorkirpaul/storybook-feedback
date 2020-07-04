import { useMemo, useCallback } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { get } from 'lodash'
import { createCommentMutation } from '@graphql/mutations/comments'
import { getAllCommentsQuery } from '@graphql/queries/comments'

import { CommentInterface } from 'utils/mongo/schemas/comment'
import UserProfileContext from 'context/UserProfileContext'
import ConfigContext from 'context/config'

const useCommentService = () => {
  // const userProfileContext = useContext(UserProfileContext)
  // const configContext = useContext(ConfigContext)
  const [createComment] = useMutation(createCommentMutation)
  const {
    loading: getAllCommentsLoading,
    data,
    error: getAllCommentsError,
  } = useQuery(getAllCommentsQuery)

  const loading = useMemo(() => {
    return getAllCommentsLoading
  }, [getAllCommentsLoading])

  const handleCreateComment = useCallback(
    (newComment: CommentInterface) => {
      return createComment({
        variables: newComment,
      })
    },
    [createComment]
  )

  // const handleFetchAllComments = useCallback(() => {
  //   return getAllComments()
  // }, [getAllComments])

  return {
    handleCreateComment,
    allComments: get(data, 'comments'),
    // handleFetchAllComments,
  }
}

export default useCommentService
