import DiscordIcon from '../assets/discord.svg';
import SteamIcon from '../assets/steam.svg';

interface CardProps {
  data: {
    title: string;
    description: string;
    date: string;
    image: string;
    link: string;
    discord?: string;
    steam?: string;
    colour?: string;
  }
}

function Card(props: CardProps) {
  return (
    <>
      <div className={`${props.data.colour || 'bg-slate-100'} w-full rounded-lg shadow-xl shadow-black max-w-[30rem] overflow-hidden m-5 z-5`}>
        {
          (props.data.discord || props.data.steam) &&
          <div className="flex items-center justify-end h-0 relative top-10 right-3">
            {
              props.data.discord &&
              <a href={props.data.discord} target="_blank" rel="noopener noreferrer" className="m-1 inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[48px] min-h-[48px] rounded-full shadow-sm hover:shadow-md border-[#24292e] bg-[#24292e] text-white hover:border-[#24292e] hover:bg-[#24292e] hover:brightness-110">
                <img className='m-1.5' src={DiscordIcon} alt="discord" />
              </a>
            }
            {
              props.data.steam &&
              <a href={props.data.steam} target="_blank" rel="noopener noreferrer" className="m-1 inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[48px] min-h-[48px] rounded-full shadow-sm hover:shadow-md border-[#24292e] bg-[#24292e] text-white hover:border-[#24292e] hover:bg-[#24292e] hover:brightness-110">
                <img className='m-1.5' src={SteamIcon} alt="steam" />
              </a>
            }
          </div>
        }
        <a href={props.data.link} target="_blank" rel="noopener">
          <img src={props.data.image} loading="lazy" className="w-[calc(100%-16px)] aspect-16/9 rounded m-2" />
                  <div className="w-full h-max rounded px-3.5 py-2.5 text-center">
            <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
              {props.data.title}&nbsp;
              <small className="font-sans antialiased text-sm text-current">
                ({props.data.date})
              </small>
            </h6>
            <p className="flex items-center justify-center font-sans antialiased text-base mt-1 text-stone-600 min-h-[3rem]">
              {props.data.description}
            </p>
          </div>
        </a>
      </div>
    </>
  )
}

export default Card