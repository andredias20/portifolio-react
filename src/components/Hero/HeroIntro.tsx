export function HeroIntro() {
    return (
        <div className="m-6 flex flex-col gap-2">
            <h1 className="text-4xl font-bold">André Dias</h1>
            <h2 className="text-2xl font-semibold">
                Desenvolvedor Full Stack / Backend
            </h2>
            <hr className="border-t border-gray-300" />
            <p style={{fontStyle: "italic"}}>
                "Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam."
                Martin Fowler
            </p>
        </div>
    );
}
