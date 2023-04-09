import Board from  '../components/Board'

function Home (): JSX.Element {
  const size = 8
  const tileSize = 100

  return (
    <div>
      <Board size={size} width={size} tileSize={tileSize} tileWidth={tileSize}/>
    </div>
  )
}

export default Home
