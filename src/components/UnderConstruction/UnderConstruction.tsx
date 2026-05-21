import { motion } from "framer-motion";
import { Code2, Construction, Wrench } from "lucide-react";
import type { ReactNode } from "react";

interface InfoCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function UnderConstruction() {
    return (
        <section className="mx-auto mt-16 w-full max-w-6xl px-4 pb-12">
            <div className="rounded-lg border border-slate-700/60 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="relative flex h-20 w-20 items-center justify-center rounded-lg border border-sky-400/20 bg-sky-500/10"
                    >
                        <Construction className="h-10 w-10 text-sky-400" />
                        <motion.span
                            animate={{ rotate: [0, 8, -8, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -right-2 -top-2"
                        >
                            <Wrench className="h-6 w-6 text-emerald-400" />
                        </motion.span>
                    </motion.div>

                    <div className="space-y-3">
                        <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                            Portfólio em desenvolvimento
                        </p>
                        <h2 className="text-3xl font-bold tracking-normal text-slate-100 sm:text-4xl">
                            Em construção
                        </h2>
                        <p className="mx-auto max-w-xl text-base leading-7 text-slate-400">
                            Estou preparando este espaço para apresentar meus projetos,
                            experiências com APIs, integrações, sistemas corporativos e
                            automações backend.
                        </p>
                    </div>

                    <div className="grid w-full gap-3 sm:grid-cols-3">
                        <InfoCard
                            icon={<Code2 className="h-5 w-5" />}
                            title="APIs"
                            description="REST, integrações e backend."
                        />
                        <InfoCard
                            icon={<Wrench className="h-5 w-5" />}
                            title="Automações"
                            description="Processos e rotinas úteis."
                        />
                        <InfoCard
                            icon={<Construction className="h-5 w-5" />}
                            title="Projetos"
                            description="Portfólio sendo estruturado."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function InfoCard({ icon, title, description }: InfoCardProps) {
    return (
        <div className="rounded-lg border border-slate-700/60 bg-slate-950/50 p-4 text-left">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-sky-400">
                {icon}
            </div>
            <h3 className="font-semibold text-slate-100">{title}</h3>
            <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
    );
}
