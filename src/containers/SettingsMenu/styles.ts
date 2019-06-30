import styled from 'styled-components'
import HeadingBase from 'components/Heading'
import TextBase from 'components/Text'

const SettingsMenu = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #383838;
  color: #f8f8f8;

  padding: 15px;
`

const Heading = styled(HeadingBase)`
  margin-bottom: 15px;
`

const Text = styled(TextBase)`
  color: #f8f8f8;
  margin-bottom: 15px;
`

export { SettingsMenu, Heading, Text }
