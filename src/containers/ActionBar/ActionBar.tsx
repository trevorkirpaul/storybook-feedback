import React from 'react'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import { sendComment } from 'utils/firebase'

import * as S from './styles'

export interface ActionBarProps {
  avatar: string
  userEmail: string
  handleGetComments: () => void
  storyId: string
}

const ActionBar = ({
  avatar,
  userEmail,
  handleGetComments,
  storyId,
}: ActionBarProps) => {
  const [values, setValues] = React.useState({ message: '' })

  const send = () => {
    sendComment({
      content: values.message,
      author: userEmail,
      storyId,
    })

    return setValues({ message: '' })
  }

  return (
    <S.ActionBar>
      <Avatar source={avatar} />

      <S.MessageSection>
        <S.TextArea
          name='message'
          onChange={({ currentTarget: { value } }) =>
            setValues({ message: value })
          }
          value={values.message}
        />

        <S.MessageActions>
          <Button onClick={() => send()}>Send</Button>
          <Button onClick={() => handleGetComments()}>Refresh</Button>
        </S.MessageActions>
      </S.MessageSection>
    </S.ActionBar>
  )
}

export default ActionBar
