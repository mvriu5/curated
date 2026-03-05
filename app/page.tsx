import { HeroSection } from "@/components/hero-section";

export default function Home() {
    return (
        <div className="relative min-h-screen max-w-screen font-sans">
            <main className="py-16 px-4 sm:px-[10%] md:px-[16%] lg:px-[20%] xl:px-[25%] flex flex-col gap-16">
                <HeroSection/>
            </main>
        </div>
    )
}
