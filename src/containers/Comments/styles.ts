import styled from 'styled-components'
import TextBase from 'components/Text'

const Comments = styled.div`
  margin-bottom: 100px;
`

const Text = styled(TextBase)``

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

export { Comments, Text, BoldText, Clickable }
