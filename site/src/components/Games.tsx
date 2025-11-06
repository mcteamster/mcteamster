import Card from './Card'
import { gameData } from '../data/games'

function Games() {
  return (
    <>
      <div className='overflow-scroll flex flex-wrap justify-center items-center pt-15 pb-10 h-[100vh]'>
        {gameData.games.map((game, index) => (
          <Card key={index} data={game} />
        ))}
      </div>
    </>
  )
}

export default Games