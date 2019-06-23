import styled from 'styled-components'

import { TextProps } from './Text'

const Text = styled(({ as: Element, ...props }: TextProps) => (
  <Element {...props} />
))`
  color: #383838;
`

export { Text }
