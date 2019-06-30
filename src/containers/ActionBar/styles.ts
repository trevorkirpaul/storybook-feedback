import styled from 'styled-components'

import { Input as InputBase } from 'components/Form'
import TextAreaBase from 'components/TextArea'
import TextBase from 'components/Text'

const ActionBar = styled.div`
  /* width: 100%; */
  background-color: #eeeeee;
  padding: 15px;

  position: sticky;
  bottom: 0;

  display: flex;
  justify-content: space-between;
`

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`

const MessageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 5;
`

const MessageActions = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Input = styled(InputBase)`
  margin-right: 5px;
`

const TextArea = styled(TextAreaBase)`
  margin-right: 5px;
  height: 100%;
  width: 80%;
`

const Text = styled(TextBase)``

export {
  ActionBar,
  ProfileSection,
  MessageSection,
  MessageActions,
  Input,
  TextArea,
  Text,
}
