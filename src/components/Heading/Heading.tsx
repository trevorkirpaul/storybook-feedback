import React from 'react'

import * as S from './styles'

export interface HeadingProps {
  as: React.ElementType
  children: string
  className?: any
}

const Heading = ({ as, children, className }: HeadingProps) => {
  return (
    <S.Heading className={className} as={as}>
      {children}
    </S.Heading>
  )
}

Heading.defaultProps = {
  as: 'h1',
}

export default Heading
