import Style from '../../../components/Style'

function usingStyles (): JSX.Element {
  return (
        <div>
            <Style color='white' value={-1}></Style>
            <Style alignRight color='blue' value={0}></Style>
            <Style color='black' value={1}></Style>
        </div>
  )
}

export default usingStyles
