
function render (list: string[]): JSX.Element {
  return (
    <ul>
        {list.map((value, i) => <li key={i}>{value}</li>)}
    </ul>
  )
}

function looping1 (): JSX.Element {
  const approved = [
    'john',
    'mary',
    'paul',
    'ann',
    'marie'
  ]

  return render(approved)
}

export default looping1
