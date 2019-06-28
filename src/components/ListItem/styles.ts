import styled from 'styled-components'

const ListItem = styled.li`
  width: 100%;
  min-height: 25px;
  padding: 5px;

  white-space: pre-wrap;
  overflow: hidden;

  &:nth-of-type(even) {
    background-color: #fce4ec;
  }

  &:nth-of-type(odd) {
    background-color: #f8bbd0;
  }
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export { ListItem, List }
