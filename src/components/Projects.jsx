import { Github, ExternalLink } from 'lucide-react'

export function Projects() {
    const projectsData = [
        {
            id: 1,
            title: "TradeJournal",
            description: "Uma plataforma completa para traders registrarem, analisarem e otimizarem suas operações no mercado financeiro. Desenvolvida do zero para resolver um problema real de gestão de risco e histórico de trades.",
            techs: ["Python", "Flask", "Bootstrap", "PostgreSQL", "Git/GitHub"],
            githubUrl: "#",
            liveUrl: "#",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Meu Segundo Projeto",
            description: "Breve descrição do projeto",
            techs: ["HTML", "CSS", "JavaScript"],
            githubUrl: "#",
            liveUrl: "#",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
        }
    ]

    return (
        <section id="projetos" className="py-20 px-6 bg-slate-900 text-white min-h-screen">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold mb-2 text-center">Meus Projetos</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full"></div>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">

                    {/* O '.map' percorre a lista e cria um 'card' para cada projeto */}
                    {projectsData.map((projects) => (
                        <div key={projects.id} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-colors group">

                            {/* Imagem do Projeto */}
                            <div className="h-64 overflow-hidden relative">
                                <img 
                                    src={projects.image}
                                    alt={projects.title}
                                    className="w-full h-full object-cover group-hover:scalte-105 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            
                            {/* Conteúdo do Card */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{projects.title}</h3>
                                <p className="text-slate-400 mb-6 line-clamp-3">{projects.description}</p>

                                {/* Tags de Tecnologias */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {projects.techs.map((tech, index) => (
                                        <span key={index} className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Botões de Link */}
                                <div className="flex gap-4">
                                    <a href={projects.githubUrl} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                                        <Github size={20} />
                                        <span>Código</span>
                                    </a>
                                    <a href={projects.liveUrl} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                        <ExternalLink size={20} />
                                        <span>Acessar</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}