import styled from 'styled-components'

import { Input as InputBase } from 'components/Form'

const ActionBar = styled.div`
  width: 100%;
  background-color: #eeeeee;
  padding: 15px;

  display: flex;
  justify-content: space-between;
`

const MessageSection = styled.div``

const Input = styled(InputBase)`
  margin-right: 5px;
`

export { ActionBar, MessageSection, Input }
