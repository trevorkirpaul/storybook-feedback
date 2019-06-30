import styled from 'styled-components'
import TextBase from 'components/Text'
import TextAreaBase from 'components/TextArea'

const Comments = styled.div`
  margin-bottom: 100px;
`

const Comment = styled.div`
  position: relative;

  &:nth-of-type(even) {
    background-color: #fce4ec;
  }

  &:nth-of-type(odd) {
    background-color: #f8bbd0;
  }
`

const Text = styled(TextBase)<{ color?: string }>`
  color: ${({ color }) => (color ? color : '#383838')};
`

const BoldText = styled(Text)`
  font-weight: 700;
`

const Clickable = styled.button`
  background: none;
  border: none;
  padding: 2.5px;

  &:hover {
    cursor: pointer;
  }
`

const EditComment = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* overflow: scroll; */
  background: #383838;
  color: #f8f8f8;

  display: flex;
  justify-content: space-between;
`

const EditCommentLeft = styled.div`
  flex-basis: 90%;
`
const EditCommentRight = styled.div`
  display: flex;
  align-content: center;
`

const TextArea = styled(TextAreaBase)`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: #f8f8f8;
`

export {
  Comments,
  Text,
  BoldText,
  Clickable,
  EditComment,
  Comment,
  TextArea,
  EditCommentLeft,
  EditCommentRight,
}
