import avatarImage from '../assets/avatar.png'

export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-slate-900 to-slate-800 text-white min-h-[80vh]">
            <div className="mb-8 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img 
                    src={avatarImage}
                    alt="Foto de Adecídio Santiago"
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
                />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
                Olá, eu sou o <span className="text-blue-400">Adecídio Santiago</span> 👋
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-8">
                Estudante de Análise e Desenvolvimento de Sistemas
            </h2>

            <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
                Focado em me tornar um Desenvolvedor Full-Stack. 
                Apaixonado por criar soluções através do código e 
                aprender novas tecnologias. Em busca da minha primeira 
                oportunidade de estágio para transformar teoria em prática e agregar valor à equipe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="#projetos" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
                    Ver Meus Projetos
                </a>
                <a href="#contato" className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-full font-semibold transition-all border-slate-600 hover:border-slate-500">
                    Falar Comigo
                </a>
            </div>

        </section>
    )
}