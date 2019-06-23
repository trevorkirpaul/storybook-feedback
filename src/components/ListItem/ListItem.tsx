import React from 'react'

import * as S from './styles'

export interface ListProps {
  children: React.ReactNode
}
const List = ({ children }: ListProps) => {
  return <S.List>{children}</S.List>
}

export interface ListItemProps {
  children: React.ReactNode
}
const ListItem = ({ children }: ListItemProps) => {
  return <S.ListItem>{children}</S.ListItem>
}

export { ListItem, List }
