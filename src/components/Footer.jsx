import { MessageCircle, Mail, Linkedin, Github } from 'lucide-react'

export function Footer() {
    return (
        <footer id="contato" className="py-12 px-6 bg-slate-950 text-slate-400 border-t border-slate-800 text-center">
            <div className="max-w-4xl mx-auto flex-col items-center">

                <h2 className="text-3xl font-bold text-white mb-6">Vamos conversar?</h2>
                <p className="mb-8 text-lg">
                    Estou aberto a novas oportunidades de estágio e projetos interessantes.
                    Sinta-se à vontade para entrar em contato!
                </p>

                {/* Links de Contato */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    
                    <a 
                        href="https://wa.me/5561995090984?text=Olá,%20Adecídio!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar." 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors group shadow-lg hover:shadow-green-500/20"
                    >
                        <MessageCircle size={20} className="group-hover:text-green-400 transition-colors" />
                        <span>WhatsApp</span>

                    </a>
                    <a href="mailto:adecidio-2011-@hotmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors group">
                        <Mail size={20} className="group-hover:text-red-400 transition-colors" />
                        <span>Me envie um e-mail</span>
                    </a>

                    <a href="https://linkedin.com/in/adecidio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors group">
                        <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
                        <span>LinkedIn</span>
                    </a>

                    <a href="https://github.com/Adecidio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white transition-colors group">
                        <Github size={20} className="group-hover:text-gray-400 transition-colors" />
                        <span>GitHub</span>
                    </a>
                </div>

                {/* Copyright */}
                <div className="w-full h-px bg-slate-800 mb-8"></div>
                <p className="text-sm">
                    © {new Date().getFullYear()} Adecídio Santiago. Construído com React e Tailwind CSS.
                </p>
            </div>
        </footer>
    )
}