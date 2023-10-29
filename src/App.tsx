
function App() {



  // const html = `

  //   `

  return (
    <main className="flex flex-col">
      <img src="./src/assets/images/rickAndMorty.png" alt="Title of Rick and Morty" className="mx-auto w-full max-w-3xl mb-8" />
      <form className="flex mx-auto mb-12 w-3/4 max-w-[65rem] justify-center rounded-full bg-input pr-3.5">
        <input className="p-3.5 m-0 w-full h-full rounded-full bg-input placeholder:text-placeholder focus:outline-none" placeholder="Troba un personatge" type="text" name='searchCharacter' />
        <button className="m-0 pr-2 flex-grow-0"><img src="./src/assets/images/magnifying-glass-solid.svg" className="w-6 m-0" /></button>
      </form>

      <div className="flex mx-auto mb-10 w-3/4 max-w-[65rem]">
        <h1 className="text-white text-4xl font-bold inline mr-3 flex-shrink-0">Llista de personatges</h1>
        <div className=" mt-6 h-0.5 bg-radioactive flex-grow inline-block"></div>
      </div>

      <section className="grid grid-cols-4 gap-16 w-3/4 max-w-[65rem] mx-auto text-white">
        <article className="bg-card border-radioactive border-2 text-center relative h-60 min-w-[12rem]">
          <div className="absolute -top-4 left-[2.5rem] w-28 h-28 overflow-hidden rounded-full inline-block self-center"><img src="https://picsum.photos/id/237/200/300" /></div>
          <h2 className="mt-[6.5rem] font-bold">Rick Sanchez</h2>
          <div className="w-3 h-3 rounded-full bg-breed inline-block"></div>
          <p className="italic text-gray-400 inline ml-1">Human</p>
          <p>Earth (C-137)</p>
        </article>
      </section>

    </main>
  )
}

export default App