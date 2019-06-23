import React from 'react'

import * as S from './styles'

export interface TextAreaProps {
  name: string
  value: string
  placeholder?: string
  className?: string
  onChange: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({
  className,
  name,
  value,
  onChange,
  placeholder,
}: TextAreaProps) => {
  return (
    <S.TextArea
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default TextArea
