export default function Contact() {
    return (
        <section id="contato" className="w-full py-32 px-4 md:px-8 relative overflow-hidden">

            {/* Brilho Neon Amarelo de fundo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] bg-neon-yellow/5 blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">

                {/* Header de Impacto */}
                <span className="text-neon-yellow font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">
                    Available for Hire
                </span>
                <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">
                    VAMOS TIRAR SUA <br />
                    <span className="text-gray-600 italic">IDÉIA DO PAPEL</span>
                </h2>

                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                    Seja para um novo SaaS, um site institucional ou consultoria técnica.
                    Escolha o canal que preferir e vamos conversar.
                </p>

                {/* HUB DE CONEXÃO (Os Botões Principais) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">

                    {/* WHATSAPP - O principal para fechamento rápido */}
                    <a
                        href="https://wa.me/5513998033131"
                        target="_blank"
                        className="group relative flex items-center justify-center gap-3 h-20 bg-white text-black rounded-2xl font-black uppercase tracking-widest hover:bg-neon-yellow transition-all duration-300 active:scale-95 overflow-hidden"
                    >
                        <span className="text-xl">WhatsApp</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>

                    {/* EMAIL - Mais formal */}
                    <a
                        href="mailto:luan.soya@gmail.com"
                        className="group relative flex items-center justify-center gap-3 h-20 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 active:scale-95"
                    >
                        <span>E-mail</span>
                    </a>
                </div>

                {/* REDES SOCIAIS (Links secundários) */}
                <div className="mt-16 flex flex-wrap justify-center gap-8">
                    <a href="https://github.com/LuanMSouza" target="_blank" className="text-[10px] font-mono text-gray-500 hover:text-neon-blue tracking-[0.3em] uppercase transition-colors">
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/luanmachadodesouza/" target="_blank" className="text-[10px] font-mono text-gray-500 hover:text-neon-blue tracking-[0.3em] uppercase transition-colors">
                        LinkedIn
                    </a>

                </div>

                {/* RODAPÉ FINAL */}
                <div className="mt-32 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
                    <div className="flex items-center gap-2 opacity-30">
                        <div className="w-1 h-1 rounded-full bg-white" />
                        <div className="w-10 h-[1px] bg-white" />
                        <div className="w-1 h-1 rounded-full bg-white" />
                    </div>
                    <p className="text-[9px] font-mono text-gray-700 tracking-[0.5em] uppercase">
                        Santos, SP • Brazil • 2026
                    </p>
                </div>

            </div>
        </section>
    );
}