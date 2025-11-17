function Navbar() {
  return <>
    <nav className="fixed z-10 p-1 w-full bg-linear-[180deg,black,black,85%,rgba(0,0,0,0)] text-white ">
      <div className="flex items-center">
        <a href="/" className="font-sans antialiased text-md text-current mx-2 block py-1 font-semibold">
            games by mcteamster
        </a>
        <div className='ml-auto mr-1 block'>  
          <ul className="m-1 flex flex-row gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center font-semibold">
            <li>
              <a href="https://github.com/mcteamster" target="_blank" rel="noopener noreferrer" className="font-sans antialiased text-sm text-current p-1 hover:text-primary underline">GitHub</a>
            </li>
            <li>
              <a href="https://mcteamster.itch.io" target="_blank" rel="noopener noreferrer" className="font-sans antialiased text-sm text-current p-1 hover:text-primary underline">Itch.io</a>
            </li>
            <li>
              <a href="https://www.buymeacoffee.com/mcteamster" target="_blank" rel="noopener noreferrer" className="font-sans antialiased text-sm text-current p-1 hover:text-primary underline">Support</a>
            </li>
            <li>
              <a href="https://bsky.app/profile/mcteamster.com" target="_blank" rel="noopener noreferrer" className="font-sans antialiased text-md text-current p-1 hover:text-primary">&#x1F98B;</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Navbar