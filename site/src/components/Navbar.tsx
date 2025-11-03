function Navbar() {
  return <>
    <nav className="fixed top-0 z-10 shadow-lg overflow-hidden p-1 bg-slate-100 shadow-stone-950/5 w-full">
      <div className="flex items-center">
        <a href="#" className="font-sans antialiased text-sm text-current mx-2 block py-1 font-semibold">
          games by mcteamster
        </a>
        <div className='ml-auto mr-2 block'>
          <ul className="m-2 flex flex-row gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center underline">
            <li>
              <a href="https://github.com/mcteamster" className="font-sans antialiased text-sm text-current p-1 hover:text-primary">GitHub</a>
            </li>
            <li>
              <a href="https://mcteamster.itch.io" className="font-sans antialiased text-sm text-current p-1 hover:text-primary">Itch.io</a>
            </li>
            <li>
              <a href="https://www.buymeacoffee.com/mcteamster" className="font-sans antialiased text-sm text-current p-1 hover:text-primary">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Navbar