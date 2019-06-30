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
  displayName: string
  toggleSettingsMenu: () => void
}

const ActionBar = ({
  avatar,
  userEmail,
  displayName,
  storyId,
  toggleSettingsMenu,
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
      <S.ProfileSection>
        <Avatar source={avatar} />
        <S.Text>{displayName}</S.Text>
      </S.ProfileSection>

      <S.MessageSection>
        <S.TextArea
          name='message'
          onChange={({ currentTarget: { value } }) =>
            setValues({ message: value })
          }
          value={values.message}
          placeholder='enter comment...'
        />

        <S.MessageActions>
          <Button onClick={() => send()}>Send</Button>
          <Button variant='secondary' onClick={toggleSettingsMenu}>
            Settings
          </Button>
        </S.MessageActions>
      </S.MessageSection>
    </S.ActionBar>
  )
}

export default ActionBar
