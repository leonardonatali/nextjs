import Tile from './Tile'

class BoardProps {
  size: number
  tileSize: number
}

function Board (props: BoardProps): JSX.Element {
  const board: Tile[][] = []
  const tileSize = `${props.tileSize}px`

  for (let i = 0; i < props.size; i++) {
    board.push([])

    for (let j = 0; j < props.size; j++) {
      const key = `${i}_${j}`
      const color = (i + j) % 2 === 0 ? 'black' : 'white'

      board[i][j] = <Tile key={key} color={color} size={tileSize}/>
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${props.size}, ${tileSize})` }}>
      { board }
    </div>
  )
}

export default Board
