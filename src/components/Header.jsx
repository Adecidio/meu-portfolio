import { Linkedin, Github, Mail } from 'lucide-react'

export function Header() {
    return (
        <header className="sticky top-0 z-50 flex flex-col md:flex-row justify-between items-center p-2 md:p-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 text-white gap-4 md:gap-0">
            <h2 className="text-2xl font-bold">Adecídio Santiago 👨‍💻</h2>

            <nav className="flex gap-4 md:gap-6 mt-4 md:mt-0">
                <a href="#projetos" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                    Projetos
                </a>
                <a href="#contato" className="text-slate-300 hover:text-blue-400 transition-colors font-medium">
                    Contato
                </a>
            </nav>
        </header>
    )
}