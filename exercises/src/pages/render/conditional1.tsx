import OnlyEven from '../../../components/OnlyEven'

function conditional1 (): JSX.Element {
  return (
        <div>
            {OnlyEven({ values: [1, 2, 3, 4, 5, 6, 7] })}
        </div>
  )
}

export default conditional1
