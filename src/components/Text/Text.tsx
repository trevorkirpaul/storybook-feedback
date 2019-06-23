import React from 'react'

import * as S from './styles'

export interface TextProps {
  as: React.ElementType
  children: React.ReactNode
  className?: any
}

const Text = ({ as, children, className }: TextProps) => {
  return (
    <S.Text as={as} className={className}>
      {children}
    </S.Text>
  )
}

Text.defaultProps = {
  as: 'span',
}

export default Text
