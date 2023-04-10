class OnlyEvenProps {
  values: number[]
}

function OnlyEven (props: OnlyEvenProps): JSX.Element {
  const headings = props.values.map(value => {
    if (value % 2 === 0) {
      return <h1 key={value}>Even value: {value}</h1>
    }

    return <h6 key={value}>Odd value: {value}</h6>
  })

  return (<>{headings}</>)
}

export default OnlyEven
