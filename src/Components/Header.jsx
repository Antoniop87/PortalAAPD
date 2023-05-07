import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="bg-yellow-300 text-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="/" class="font-bold text-xl">AAPD</a>
                </div>
                <div className="flex">
                    
                    <Link to="/Contato" class="px-3 py-2 text-sm font-medium hover:text-gray-600">Contato</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;