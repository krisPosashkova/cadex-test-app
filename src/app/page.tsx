import HeroSection from "@/components/HeroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import PreconnectLinks from "@/components/PreconnectLinks";
import ActionPromptSection from "@/components/ActionPromptSection";
import { generateMetadata } from "@/app/metadata";
export const metadata = await generateMetadata({ params: { page: "home" } });

export default function Home() {
    const domains = ["https://www.youtube.com", "https://www.google.com"];
    return (
        <>
            <PreconnectLinks domains={domains} />
            <HeroSection />
            <AdvantagesSection />
            <ActionPromptSection />
        </>
    );
}
