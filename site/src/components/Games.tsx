import Card from './Card'
import { gameData } from '../data/games'

function Games() {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center pt-15 pb-5 min-h-[90vh] mx-auto max-w-[145rem]'>
        {gameData.games.map((game, index) => (
          <Card key={index} data={game} />
        ))}
      </div>
    </>
  )
}

export default Games
