import React from 'react'

import * as S from './styles'

export interface ChatProps {
  children: React.ReactNode
}
const Chat = ({ children }: ChatProps) => {
  return <S.Chat>{children}</S.Chat>
}

export default Chat
