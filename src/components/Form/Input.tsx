import React from 'react'

import * as S from './styles'

export interface InputProps {
  name: string
  value?: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  type: 'text' | 'password'
}

const Input = ({ name, value, onChange, type }: InputProps) => {
  return <S.Input name={name} type={type} value={value} onChange={onChange} />
}

Input.defaultProps = {
  type: 'text',
}

export default Input
