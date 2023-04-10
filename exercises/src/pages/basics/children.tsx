import List from '../../../components/List'
import ListItem from '../../../components/ListItem'

function children (): Element {
  return (
    <div>
        <List>
            <ListItem content='Item1'/>
            <ListItem content='Item2'/>
            <ListItem content='Item3'/>
            <ListItem content='Item4'/>
        </List>
    </div>
  )
}

export default children
