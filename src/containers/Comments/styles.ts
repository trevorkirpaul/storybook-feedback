import styled from 'styled-components'
import TextBase from 'components/Text'

const Comments = styled.div`
  margin-bottom: 100px;
`

const Text = styled(TextBase)``

const BoldText = styled(Text)`
  font-weight: 700;
`

export { Comments, Text, BoldText }
