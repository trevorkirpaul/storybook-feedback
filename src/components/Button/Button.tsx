import React from 'react'

import * as S from './styles'

export interface ButtonProps {
  children: string
  onClick: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <S.Button onClick={onClick}>{children}</S.Button>
}

export default Button
