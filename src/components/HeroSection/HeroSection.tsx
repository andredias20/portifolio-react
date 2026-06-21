import Hero from "@/components/Hero/Hero.tsx";
import "@/components/HeroSection/HeroSection.css"
import { QuickFacts } from "@/components/QuickFacts/QuickFacts.tsx";
import { TerminalIdentity } from "@/components/TerminalIdentity/TerminalIdentity.tsx"

export default function HeroSection() {
    return (
        <section className="section-hero-container">
            <Hero/>
            <QuickFacts/>
            <TerminalIdentity/>
        </section>
    );
}