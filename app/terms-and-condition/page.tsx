import type { Metadata } from "next";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import { DataFacility } from "@/data/Facility";
import FormClientRegistration from "./FormClientRegistration";
import heroImage from "@/public/facility-2/2.jpg";

export const metadata: Metadata = {
    title: "Terms and Conditions",
    description:
        "Terms and conditions for storage of a boat, car or other item at the Cairns Boat Storage facility.",
    alternates: { canonical: "/terms-and-condition" },
    openGraph: {
        title: "Terms and Conditions | Cairns Boat Storage",
        url: "/terms-and-condition",
    },
    // Legal boilerplate — no search value, and it would compete with the
    // pages that should rank.
    robots: { index: false, follow: true },
};

export default function Page() {
    return (
        <>
            <HeroSection image={heroImage} alt={DataFacility[1].alt}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-md text-balance">
                    Secure and convenient storage solutions
                </h1>
            </HeroSection>

            {/* Sticky Contact me */}
            <ContactMe />
            <FormClientRegistration />
        </>
    );
}
