import { motion } from "framer-motion";
import { Code2, Construction, Wrench } from "lucide-react";
import type { ReactNode } from "react";
import "@/components/UnderConstruction/UnderConstruction.css";

interface InfoCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function UnderConstruction() {
    return (
        <section className="construction-section" aria-labelledby="construction-title">
            <div className="construction-panel">
                <div className="construction-content">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="construction-icon-shell"
                    >
                        <Construction className="construction-icon-main" aria-hidden="true" />
                        <motion.span
                            animate={{ rotate: [0, 8, -8, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="construction-icon-badge"
                        >
                            <Wrench className="construction-icon-badge-svg" aria-hidden="true" />
                        </motion.span>
                    </motion.div>

                    <div className="construction-copy">
                        <p className="construction-eyebrow">
                            Portfólio em desenvolvimento
                        </p>
                        <h2 className="construction-title" id="construction-title">
                            Em construção
                        </h2>
                        <p className="construction-description">
                            Estou preparando este espaço para apresentar meus projetos,
                            experiências com APIs, integrações, sistemas corporativos e
                            automações backend.
                        </p>
                    </div>

                    <div className="construction-grid">
                        <InfoCard
                            icon={<Code2 className="construction-card-icon-svg" aria-hidden="true" />}
                            title="APIs"
                            description="REST, integrações e backend."
                        />
                        <InfoCard
                            icon={<Wrench className="construction-card-icon-svg" aria-hidden="true" />}
                            title="Automações"
                            description="Processos e rotinas úteis."
                        />
                        <InfoCard
                            icon={<Construction className="construction-card-icon-svg" aria-hidden="true" />}
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
        <article className="construction-card">
            <div className="construction-card-icon">
                {icon}
            </div>
            <h3 className="construction-card-title">{title}</h3>
            <p className="construction-card-description">{description}</p>
        </article>
    );
}
