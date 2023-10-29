
function characters() {
    const URL = 'https://rickandmortyapi.com/api/character'
    fetch(URL)
        .then(resp => resp.json)
        .then(resp => console.log(resp))
}

export default characters

//     <section className="grid grid-cols-4 gap-16 w-3/4 max-w-[65rem] mx-auto text-white">
//       <article className="bg-card border-radioactive border-2 text-center relative h-60 min-w-[12rem]">
//         <div className="absolute -top-4 left-[2.5rem] w-28 h-28 overflow-hidden rounded-full inline-block self-center"><img src="https://picsum.photos/id/237/200/300" /></div>
//         <h2 className="mt-[6.5rem] font-bold">Rick Sanchez</h2>
//         <div className="w-3 h-3 rounded-full bg-breed inline-block"></div>
//         <p className="italic text-gray-400 inline ml-1">Human</p>
//         <p>Earth (C-137)</p>
//       </article>
//     </section>