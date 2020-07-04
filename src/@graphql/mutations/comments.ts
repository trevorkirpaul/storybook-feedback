import gql from 'graphql-tag'

export const createCommentMutation = gql`
  mutation CreateComment(
    $authorId: String!
    $content: String!
    $id: String!
    $storyId: String!
  ) {
    insertOneComment(
      data: { authorId: $authorId, storyId: $storyId, content: $content }
    ) {
      authorId
      storyId
      content
      _id
    }
  }
`
