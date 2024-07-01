import "../index.css"

export default function Projects() {
    return(
        <div id="projects" className="flex flex-col mx-auto w-4/5">
            <p className="text-xl md:text-5xl mb-8">Projektjeim</p>
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-4">
                <a href="https://laci730.github.io/gallery" target="_blank"
                className="flex flex-col p-4 rounded-md my-4 bg-stone-200 text-black text-black cursor-pointer">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 gallery-img mr-8"></div>
                        <p className="grid items-center text-xl font-bold mb-2">Galéria weboldal</p>
                    </div>
                    <section>
                        <p className="px-5">Ehhez a projekthez az Angular keretrendszert használtam, célja az Angular tanulása és a dizájn képességem fejlesztése.</p>
                    </section>
                </a>
                <a href="https://laci730.github.io/quiz-game" target="_blank"
                className="flex flex-col p-4 rounded-md my-4 bg-stone-200 text-black text-black cursor-pointer">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 question-img mr-8"></div>
                        <p className="grid items-center text-xl font-bold mb-2">Kvíz játék</p>
                    </div>
                    <section>
                        <p className="px-5">Ennél a projektnél leginkább az API hívások megtanulásával foglalkoztam.</p>
                    </section>
                </a>
                <a href="https://laci730.github.io/web-minesweeper" target="_blank" 
                className="flex flex-col p-4 rounded-md my-4 bg-stone-200 text-black text-black cursor-pointer">
                    <div className="flex justify-center mb-4">
                        <div className="h-16 w-16 mine-img mr-8"></div>
                        <p className="grid items-center text-xl font-bold mb-2">Aknakereső játék</p>
                    </div>
                    <section>
                        <p className="px-5">Az első nagyobb projektem, ahol React könyvtárat használtam.</p>
                    </section>
                </a>
            </div>
        </div>
    )
}