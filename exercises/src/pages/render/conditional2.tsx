import If from '../../../components/If'

function isEven (value: number): boolean {
  return value % 2 === 0
}

function cnditional2 (): Element {
  const value = 10

  return (
        <div>
            <If test={isEven(value)}>
                <h1>{value} is even</h1>
            </If>
            <If test={!isEven(value)}>
                <h1>{value} is odd</h1>
            </If>
        </div>
  )
}

export default cnditional2
