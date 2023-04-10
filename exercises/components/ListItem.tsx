class ListItemProps {
  content: string
}

function ListItem (props: ListItemProps): Element {
  return (<li>{props.content}</li>)
}

export default ListItem
