
function App() {

  return (
    <main className="flex flex-col">
      <img src="./src/assets/images/rickAndMorty.png" alt="Title of Rick and Morty" className="mx-auto w-full max-w-3xl mb-8" />
      <form className="flex mx-auto mb-12 w-3/4 max-w-[65rem] justify-center rounded-full bg-input pr-3.5">
        <input className="p-3.5 w-full h-full rounded-full bg-input placeholder:text-placeholder focus:outline-none" placeholder="Troba un personatge" type="text" name='searchCharacter' />
        <button className="pr-2">
          <img src="./src/assets/images/magnifying-glass-solid.svg" className="w-6" />
        </button>
      </form>

      <div className="flex mx-auto mb-10 w-3/4 max-w-[65rem]">
        <h1 className="text-white text-4xl font-bold mr-3 flex-shrink-0">Llista de personatges</h1>
        <div className=" mt-6 h-0.5 bg-radioactive flex-grow"></div>
      </div>

      <section className="grid grid-cols-4 gap-16 w-3/4 max-w-[65rem] mx-auto text-white">
        <article className="bg-card border-radioactive border-2 text-center relative h-56 min-w-[12rem] w-1">
          <div className="w-28 h-28 -mt-3 overflow-hidden rounded-full inline-block">
            <img src="https://picsum.photos/id/237/200/300" />
          </div>
          <h2 className="font-bold">Rick Sanchez</h2>
          <div className="w-3 h-3 rounded-full bg-breed inline-block"></div>
          <span className="italic text-gray-400 inline ml-1">Human</span>
          <p>Earth (C-137)</p>
        </article>
      </section>

    </main>
  )
}

export default App