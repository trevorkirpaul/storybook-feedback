import styled from 'styled-components'

import HeadingBase from 'components/Heading'
import TextBase from 'components/Text'

const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;

  max-width: 300px;
  margin: 0 auto;
`

const Heading = styled(HeadingBase)`
  margin-bottom: 15px;
`

const Text = styled(TextBase)`
  margin-bottom: 15px;
`

export { Login, Heading, Text }
