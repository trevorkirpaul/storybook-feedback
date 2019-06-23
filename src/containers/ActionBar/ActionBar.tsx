import React from 'react'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import { sendComment } from 'utils/firebase'

import * as S from './styles'

export interface ActionBarProps {
  avatar: string
  userEmail: string
}

const ActionBar = ({ avatar, userEmail }: ActionBarProps) => {
  const [values, setValues] = React.useState({ message: '' })

  const send = () => {
    sendComment({
      content: values.message,
      author: userEmail,
    })

    return setValues({ message: '' })
  }

  return (
    <S.ActionBar>
      <Avatar source={avatar} />

      <S.MessageSection>
        <S.Input
          name='message'
          onChange={({ currentTarget: { value } }) =>
            setValues({ message: value })
          }
          value={values.message}
        />

        <Button onClick={() => send()}>Send</Button>
      </S.MessageSection>
    </S.ActionBar>
  )
}

export default ActionBar
