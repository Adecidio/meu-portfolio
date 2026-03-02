import { User, GraduationCap, Target, FileDown } from 'lucide-react'

export function About() {
    return (
        <section id="sobre" className="py-20 px-6 bg-slate-800 text-white">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold mb-2 text-center">Sobre Mim</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-16 rounded-full"></div>

                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Lado Esquerdo */}
                    <div className="md:w-2/3 space-y-6 text-lg text-slate-300 leading-relaxed text-justify">
                        <p>
                            Sou estudante do <strong>2º semestre</strong> de <strong className="text-blue-400">Análise e Desenvolvimento de Sistemas </strong> 
                            pela <strong>Universidade Católica de Brasília</strong>, em transição de carreira e 
                            movido pela vontade de resolver problemas reias através da tecnologia.
                        </p>
                        <p>
                            Trago na bagagem anos de experiência atuando com gestão logística, liderença de equipe e análise de dados em ambientes 
                            organizacionais de alta responsabilidade. Essa vivência consolidou minha capacidade de organização, comunicação clara e raciocínio 
                            analítico — habilidades que hoje aplico no planejamento da arquitetura de sistemas.
                        </p>
                        <p>
                            Atualmente, direciono meus estudos para o <strong>desenvolvimento Full-Stack</strong>. No Front-end, construo interfaces dinâmicas e responsivas com 
                            ferramentas modernas como <strong>React e Tailwind CSS</strong>, enquanto no <strong>Back-end utilizo Node.js e Python</strong> para estruturar a lógica de negócios e 
                            integrações — aplicando essa visão de ponta a ponta na construção da plataforma TradeJournal. Meu maior objetivo hoje é consquistar minha 
                            primeira oportunidade de estágio, onde eu possa unir interface e banco de dados para entregar soluções completas e agregar valor à equipe.
                        </p>

                        {/* Boão de Download */}
                        <div className="pt-4 glex justify-center md:justify-start">
                            <a 
                                href="/curriculo.pdf"
                                download="Curriculo_Adecidio_Santiago.pdf"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30"
                            >
                                <FileDown size={20} />
                                Baixar Meu Currículo
                            </a>
                        </div>
                    </div>

                    {/* Lado Direito */}
                    <div className="md:w-1/3 flex flex-col gap-6 w-full">

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex items-start gap-4">
                            <User className="text-blue-400 shrink-0" size={28} />
                            <div>
                                <h4 className="text-white">Perfil</h4>
                                <p className="text-sm">Desenvolvedor focado em Full-Stack, aprendizado contínuo e resolução de problemas.</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex items-start gap-4">
                            <GraduationCap className="text-green-400 shrink-0" size={28} />
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1">Formação</h4>
                                <p className="text-sm text-slate-400">Cursando Análise e Desenvolvimento de Sistemas (ADS).</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 flex items-start gap-4">
                            <Target className="text-purple-400 shrink-0" size={28} />
                            <div>
                                <h4 className="text-white font-bold text-xl mb-1">Objetivo</h4>
                                <p className="text-sm text-slate-400">Busca ativa por estágio na área de desenvolvimento de software.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}