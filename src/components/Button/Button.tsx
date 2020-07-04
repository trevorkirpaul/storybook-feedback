import React from 'react'

import * as S from './styles'

export interface ButtonProps {
  children: string
  onClick: () => void
  variant: 'primary' | 'secondary'
  loading?: boolean
}

const Button = ({ children, onClick, variant, loading }: ButtonProps) => {
  return (
    <S.Button disabled={loading} variant={variant} onClick={onClick}>
      {!loading ? children : '...loading'}
    </S.Button>
  )
}

Button.defaultProps = {
  variant: 'primary',
}

export default Button
