import { HeroActions } from "@/components/Hero/HeroActions.tsx";
import { HeroAvatar } from "@/components/Hero/HeroAvatar.tsx";
import { HeroIntro } from "@/components/Hero/HeroIntro.tsx";

export default function Hero() {
    return (
        <div className="m-6 grid items-center">
            <div id="upper-hero" className="flex">
                <HeroAvatar />
                <HeroIntro />
            </div>
            <HeroActions />
        </div>
    );
}
