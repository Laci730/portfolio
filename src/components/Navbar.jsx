export default function Navbar() {
    return(
        <nav className="h-20 md:px-20 bg-sky-800 flex justify-center md:justify-between text-xl sticky top-0">
            <p className="grid place-items-center text-3xl md:text-5xl select-none">Nagy László</p>
            <ul className="md:flex items-center hidden">
                <li className="px-4 hover:bg-sky-900 h-full grid place-items-center cursor-pointer">
                    <a href="#about">Rólam</a>
                </li>
                <li className="px-4 hover:bg-sky-900 h-full grid place-items-center cursor-pointer">
                    <a href="#projects">Projektjeim</a>
                    </li>
                <li className="px-4 hover:bg-sky-900 h-full grid place-items-center cursor-pointer">
                    <a href="#contact">Kapcsolat</a>
                </li>
            </ul>
        </nav>
    )
}