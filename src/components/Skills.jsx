import { Code2, Terminal, Braces } from 'lucide-react'

export function Skills() {

    const skillCategories = [
        {
            title: "Front-end",
            icon: <Code2 className="text-blue-400 mb-4" size={32} />,
            skills: ["React", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"]
        },
        {
            title: "Back-end & Ferramentas",
            icon: <Terminal className="text-green-400 mb-4" size={32} />,
            skills: ["Node.js", "Python", "Git", "GitHub"]
        },
        {
            title: "Lógica & Fundamentos",
            icon: <Braces className="text-purple-400 mb-4" size={32} />,
            skills: ["Lógica de Programação", "VisualG", "Flowgorithm", "Estrutura de Dados"]
        }
    ]

    return (
        <section className="py-20 px-6 bg-slate-900 text-white border-t border-slate-800">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl font-bold mb-2 text-center">Minhas Habilidades</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors group">

                            <div className="flex justify-center">
                                {category.icon}
                            </div>

                            <h3 className="text-2xl font-semibold mb-6 text-center group-hover:text-blue-400 transition-colors">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap justify-center gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-slate-900 text-slate-300 rounded-lg text-sm font-medium border border-slate-700 hober:bg-blue-600 hover:border-blue-500 hober:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}