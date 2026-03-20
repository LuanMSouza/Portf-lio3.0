"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center pt-32 md:pt-20 overflow-hidden">

            <div className="absolute top-1/4 left-1/4 h-96 w-96 bg-neon-blue/10 blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 bg-neon-yellow/5 blur-[120px] pointer-events-none" />

            <div className="z-10 flex flex-col items-center text-center px-4">

                <div className="mb-8 flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 ring-1 ring-white/10 shadow-inner">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                        Disponível para novos projetos
                    </span>
                </div>

                <h1 className="max-w-5xl text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase">
                    Desenvolvimento <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
                        de ponta a ponta
                    </span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
                    Desenvolvedor <span className="text-white border-b border-neon-blue/30">Full Stack</span> focado em transformar ideias em sistemas funcionais.
                    Do <span className="text-white">banco de dados</span> ao <span className="text-white">front-end</span>, construindo soluções reais com <span className="text-neon-blue">Next.js</span> e <span className="text-neon-blue">Node</span>.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-5">
                    <Link href={'#projetos'}
                        className="h-14 justify-center flex items-center px-10 rounded-xl bg-white text-gray-900 font-extrabold tracking-tight hover:bg-neon-blue cursor-pointer transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-95">
                        Explorar Projetos
                    </Link >

                    <Link href={'#stack'} className="h-14 flex justify-center items-center px-10 rounded-xl cursor-pointer border border-white/10 bg-white/5 text-white font-bold tracking-tight hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
                        Ver Experiência
                    </Link>
                </div>
            </div>

            <div
                className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
            >
                <span className="text-[10px] font-bold tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-neon-blue via-neon-blue/20 to-transparent" />
            </div>

        </section>
    );
}