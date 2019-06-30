import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 25px;
  padding: 5px;

  white-space: pre-wrap;

  /*
    The styles below, used to alternate background colors,
    had to be moved to **src/containers/Comments/styles.ts**
    since the styled-component, "Comment", is now the outermost
    component
  */

  /* &:nth-of-type(even) {
    background-color: #fce4ec;
  }

  &:nth-of-type(odd) {
    background-color: #f8bbd0;
  } */
`

const Left = styled.div`
  overflow: hidden;
  flex-basis: 90%;
  text-overflow: ellipsis;
`
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.ul`
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`

export { ListItem, List, Left, Right }
