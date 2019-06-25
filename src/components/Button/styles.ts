import styled from 'styled-components'

import { ButtonProps } from './Button'

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 4px;
  background-color: ${({ variant }) =>
    variant === 'primary' ? 'palevioletred' : '#f8bbd0'};
  padding: 5px 10px;
  color: ${({ variant }) => (variant === 'primary' ? '#fff' : 'magenta')};

  &:hover {
    cursor: pointer;
  }
`

export { Button }
