import Card from './Card'
import { gameData } from '../data/games'

function Games() {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center mt-15 mb-10 min-h-[90vh]'>
        {gameData.games.map((game, index) => (
          <Card key={index} data={game} />
        ))}
      </div>
    </>
  )
}

export default Games