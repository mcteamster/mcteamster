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
      <div className={`${props.data.colour || 'bg-slate-200'} w-full rounded-lg border shadow-sm shadow-stone-950/5 max-w-[20rem] overflow-hidden m-5`}>
        <img src={props.data.image} alt="ui/ux review check" className="w-[calc(100%-16px)] h-max rounded m-2" />
        <div className="w-full h-max rounded px-3.5 py-2.5 text-center">
          <h6 className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl text-current">
            {props.data.title}
          </h6>
          <small className="font-sans antialiased text-sm text-current">
            {props.data.date}
          </small>
          <p className="font-sans antialiased text-base mt-1 text-stone-600 min-h-[3rem]">
            {props.data.description}
          </p>
        </div>
        <div className="w-full px-3.5 pt-2 pb-3.5 rounded mt-4 flex items-center justify-center">
          <div className="flex items-center">
            <a href={props.data.link} target="_blank" rel="noopener noreferrer" className="m-1 cursor-pointer inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed focus:shadow-none text-sm py-2 px-4 shadow-sm hover:shadow-md bg-stone-800 hover:bg-stone-700 relative bg-gradient-to-b from-stone-700 to-stone-800 border-stone-900 text-stone-50 rounded-lg hover:bg-gradient-to-b hover:from-stone-800 hover:to-stone-800 hover:border-stone-900 after:absolute after:inset-0 after:rounded-[inherit] after:box-shadow after:shadow-[inset_0_1px_0px_rgba(255,255,255,0.25),inset_0_-2px_0px_rgba(0,0,0,0.35)] after:pointer-events-none transition antialiased">
              Play Now
            </a>
            {
              props.data.discord &&
              <a href={props.data.discord} target="_blank" rel="noopener noreferrer" className="m-1 inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-full shadow-sm hover:shadow-md border-[#24292e] bg-[#24292e] text-white hover:border-[#24292e] hover:bg-[#24292e] hover:brightness-110">
                <img className='m-1.5' src={DiscordIcon} alt="discord" />
              </a>
            }
            {
              props.data.steam &&
              <a href={props.data.steam} target="_blank" rel="noopener noreferrer" className="m-1 inline-grid place-items-center border align-middle select-none font-sans font-medium text-center transition-all duration-300 ease-in disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm min-w-[38px] min-h-[38px] rounded-full shadow-sm hover:shadow-md border-[#24292e] bg-[#24292e] text-white hover:border-[#24292e] hover:bg-[#24292e] hover:brightness-110">
                <img className='m-1.5' src={SteamIcon} alt="steam" />
              </a>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Card