import React from 'react'

import Button from 'components/Button'
import Link from 'components/Link'
import { signOut } from 'utils/firebase'

import * as S from './styles'

export interface SettingsMenuProps {
  visible: boolean
  renderSignedOutState: () => void
}

const SettingsMenu = ({ visible, renderSignedOutState }: SettingsMenuProps) => {
  if (!visible) return null

  return (
    <S.SettingsMenu>
      <S.Heading>Settings</S.Heading>

      <S.Text as='p'>v0.0.7</S.Text>

      <S.Text as='p'>
        If you encounter any issues, please add any relevant information{' '}
        <Link href='https://github.com/trevorkirpaul/storybook-feedback/issues'>
          here.
        </Link>
      </S.Text>

      <Button
        onClick={() => {
          signOut()
          return renderSignedOutState()
        }}
      >
        Sign Out
      </Button>
    </S.SettingsMenu>
  )
}
export default SettingsMenu
