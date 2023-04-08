class StyleProps {
  value: number
  color: string
  alignRight: boolean
}

function Style (props: StyleProps): JSX.Element {
  return (
        <div>
            <h1 style={{
              backgroundColor: props.value >= 0 ? 'green' : 'red',
              color: props.color,
              textAlign: props.alignRight ? 'right' : 'left'
            }}>
               Component text here
            </h1>
        </div>
  )
}

export default Style
