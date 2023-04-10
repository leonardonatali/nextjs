class IfProps {
  test: boolean
}

function If (props: IfProps): Element {
  return props.test ? props.children : null
}

export default If
