import productList from '@/data/productList'

const withBorderStyle = { border: '1px solid' }

function renderHeading (columns: string[]): JSX.Element {
  return (
    <tr>
        {columns.map((column, i) => <th key={i} style={withBorderStyle}>{column}</th>)}
    </tr>
  )
}

function renderRows (): JSX.Element {
  return (
    productList.map((product) => {
      return (
        <tr key={product.id} style={withBorderStyle}>
            <td style={withBorderStyle}>{product.id}</td>
            <td style={withBorderStyle}>{product.name}</td>
            <td style={withBorderStyle}>{product.price}</td>
        </tr>
      )
    })
  )
}

function looping2 (): JSX.Element {
  return (
    <table style={withBorderStyle}>
        <thead>
            {renderHeading(['ID', 'Name', 'Price'])}
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
  )
}

export default looping2
