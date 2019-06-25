import React from 'react'

import * as S from './styles'

export interface ButtonProps {
  children: string
  onClick: () => void
  variant: 'primary' | 'secondary'
}

const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <S.Button variant={variant} onClick={onClick}>
      {children}
    </S.Button>
  )
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button
