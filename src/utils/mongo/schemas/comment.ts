export interface CommentInterface {
  authorId: string
  storyId: string
  _id: string
  content: string
}

export const CommentSchema = {
  name: 'Comment',
  properties: {
    authorId: 'string',
    storyId: 'string',
    _id: 'string',
    content: 'string',
  },
}
