import React, { useContext } from 'react'
import { get } from 'lodash'

import Avatar from 'components/Avatar'
import Button from 'components/Button'
import UserProfileContext from 'context/UserProfileContext'
import { useStorybookApi } from '@storybook/api'

import * as S from './styles'

export interface ActionBarProps {
  handleToggleSettings: () => void
}

const ActionBar = ({ handleToggleSettings }: ActionBarProps) => {
  const storybookApi = useStorybookApi()
  const userProfile = useContext(UserProfileContext)

  const userEmail = get(userProfile, 'profile.email', 'n/a')
  const avatar = get(userProfile, 'profile.imageUrl')
  /**
   * storyId of the currently selected/rendering story
   * from the user's storybook instance.
   *
   * This value can change so it's not a 100% reliable
   * ID. If the dev changes the story's name/location
   * then the ID will change.
   *
   * I'm not sure if there's a better identifier which
   * would never change. - Trevor Kirpaul
   */
  const currentStoryId: string = get(storybookApi.getUrlState(), 'storyId', '')

  const [values, setValues] = React.useState({ message: '' })

  const send = () => {
    return setValues({ message: '' })
  }

  return (
    <S.ActionBar>
      <S.ProfileSection>
        {avatar && <Avatar source={avatar} />}
        <S.Text>{userEmail}</S.Text>
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
          <Button variant='secondary' onClick={handleToggleSettings}>
            Settings
          </Button>
        </S.MessageActions>
      </S.MessageSection>
    </S.ActionBar>
  )
}

export default ActionBar
