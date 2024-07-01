import "../index.css"

export default function Contact() {
    return(
        <div id="contact" className="w-4/5 mx-auto pt-8 pb-20">
            <p className="text-xl md:text-5xl mb-8">Elérhetőségeim</p>
            <div className="text-sm md:text-xl flex flex-col mb-4 ml-8">
                <section className="flex">
                    <span className="material-symbols-outlined mr-4">
                        call
                    </span>
                    <p>+36 30 869 2826</p>
                </section>
                <section className="flex">
                    <span className="material-symbols-outlined mr-4">
                        mail
                    </span>
                    <p>nagylaci755@gmail.com</p>
                </section>
            </div>
            
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/l%C3%A1szl%C3%B3-nagy-828ba8269/" target="_blank"
                className="mx-4">
                    <img className="h-12 w-12 md:h-16 md:w-16" src="/ln.png" />
                </a>
                <a href="https://www.github.com/laci730" target="_blank"
                className="mx-4">
                    <img className="h-12 w-12 md:h-16 md:w-16" src="/github.svg" />
                </a>
            </div>
        </div>
    )
}