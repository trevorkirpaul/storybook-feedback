import React from 'react'
import styled from 'styled-components'

import { HeadingProps } from './Heading'

const Heading = styled(({ as: Element, ...props }: HeadingProps) => (
  <Element {...props} />
))``

export { Heading }
