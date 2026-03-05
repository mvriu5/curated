import { AsciiArt } from "@/components/ui/ascii-art"

export function HeroSection() {
    return (
        <section className="flex flex-col items-center gap-2">
            <h1 className="text-7xl text-[#d08c63] text-shadow-sm tracking-tight font-medium font-matesc">curated</h1>
            <p className="text-muted-foreground font-matesc">
                A custom registry for distributing code using shadcn.
            </p>
            <div
                className="relative w-120 h-72 overflow-hidden"
                style={{
                    WebkitMaskImage:
                        "radial-gradient(ellipse 56% 68% at center, black 45%, transparent 100%)",
                    maskImage:
                        "radial-gradient(ellipse 56% 68% at center, black 45%, transparent 100%)",
                }}
            >
                <AsciiArt
                    src={"/greek-pillars.jpg"}
                    resolution={170}
                    charset="standard"
                    animated={false}
                    color="#2b7fff"
                    className="w-full h-full"
                />
            </div>

        </section>
    )
}
