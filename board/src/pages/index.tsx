import Board from  '../components/Board'
import style from './index.module.css'

function table (): JSX.Element {
  const size = 8
  const tileSize = 100

  return (
    <div className={style.board}>
      <Board key={'board'} size={size} width={size} tileSize={tileSize} tileWidth={tileSize}/>
    </div>
  )
}

export default table
