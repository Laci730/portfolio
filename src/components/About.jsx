export default function About() {
    return(
        <>
            <section className="my-10 mx-auto flex lg:flex-row w-4/5 flex-col-reverse" id="about">
                    <section className="lg:w-3/5">
                        <h1 className="mb-4 text-xl md:text-5xl">Rólam</h1>
                        <p className="lg:w-3/5 mb-8 pl-16 text-sm md:text-xl">
                            Szenvedélyesen érdekel a webfejlesztés, különösen a frontend területén szeretek alkotni, de a backend fejlesztésre is nyitott vagyok.
                            Gyorsan tanulok, és folyamatosan keresem az új technológiákat és megoldásokat, hogy naprakész maradjak.
                            Az a célom, hogy modern, felhasználóbarát weboldalakat hozzak létre, amelyek technikailag is kiválóak. 
                            Mindig izgatottan várom az új kihívásokat és lehetőségeket a fejlődésre.
                        </p>
                        <h2 className="mb-8 text-xl md:text-5xl">Képességek</h2>
                        <ul className="pl-20 text-sm md:text-xl">
                            <li className="list-disc">HTML, CSS</li>
                            <li className="list-disc">JavaScript, TypeScript</li>
                            <li className="list-disc">Node.js, React JS, Angular</li>
                            <li className="list-disc">Git verziókezelés, Tailwind CSS, REST API ismerete</li>
                            <li className="list-disc">Python, Java, SQL nyelvek ismerete</li>
                        </ul>
                    </section>
                    <img src="/resume.jpg" className="border border-transparent rounded-full w-64 h-64 lg:w-96 lg:h-96 self-center" />   
            </section>
        </>
    )
}