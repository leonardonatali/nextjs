function List (props: any): JSX.Element {
  return (
        <div>
            <h1>Awesome List</h1>
            <ul>
                {props.children}
                <li>This item is not a child</li>
            </ul>
        </div>
  )
}

export default List
