class SumProps {
  value: number
}

function Sum (props: SumProps): JSX.Element {
  // Props are read-only
  //   props.value++

  return (
    <div>
        <h1>{ props.value + 1 }</h1>
    </div>
  )
}

export default Sum
