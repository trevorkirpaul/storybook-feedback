import React from 'react'

import * as S from './styles'

export interface LinkProps {
  children: string | React.ReactNode
  href: string
  target: '_blank' | '_parent' | '_self' | '_top'
}

const Link = ({ href, children, target }: LinkProps) => {
  return (
    <S.Link target={target} href={href}>
      {children}
    </S.Link>
  )
}

Link.defaultProps = {
  target: '_blank',
}

export default Link
