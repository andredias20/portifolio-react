import profilePicture from "@/assets/profile.jpeg";

export function HeroAvatar() {
    return (
        <div className="h-60 w-60">
            <img
                className="rounded-full border-transparent bg-gradient-to-r from-blue-950 to-indigo-900 bg-clip-padding bg-origin-border p-1 text-white"
                src={profilePicture}
                alt="Foto de perfil de André Dias"
            />
        </div>
    );
}
