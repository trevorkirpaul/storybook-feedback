import gql from 'graphql-tag'

export const getAllCommentsQuery = gql`
  query AllComments {
    comments {
      _id
      content
      storyId
      authorId
    }
  }
`

// const allMoviesFrom200Query = gql`
//   query AllMoviesFrom2000 {
//     movies(query: { year: 2000 }) {
//       title
//       year
//       runtime
//     }
//   }
// `
