import React from 'react'

import * as S from './styles'

export interface InputProps {
  name: string
  value?: string
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  type: 'text' | 'password'
  className?: any
  placeholder?: string
}

const Input = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  className,
}: InputProps) => {
  return (
    <S.Input
      className={className}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
