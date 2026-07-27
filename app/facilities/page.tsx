import type { Metadata } from "next";
import ContactMe from "@/components/ContactMe";
import FacilityGallery from "@/components/FacilityGallery";
import HeroSection from "@/components/HeroSection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { DataFacility } from "@/data/Facility";
import heroImage from "@/public/facility-2/4.jpg";

export const metadata: Metadata = {
    title: "Facilities",
    description:
        "Secure, convenient, inexpensive boat storage, from the smallest tinnie to a serious cabin cruiser or fishing boat. Great location, secure and easy access.",
    alternates: { canonical: "/facilities" },
    openGraph: {
        title: "Facilities | Cairns Boat Storage",
        description:
            "Secure, convenient, inexpensive boat storage, from the smallest tinnie to a serious cabin cruiser or fishing boat.",
        url: "/facilities",
    },
};

export default function Page() {
    return (
        <>
            <BreadcrumbJsonLd name="Facilities" path="/facilities" />
            <HeroSection image={heroImage} alt={DataFacility[3].alt}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-md text-balance">
                    Great Location, Secure &amp; Easy Access
                </h1>
            </HeroSection>

            {/* Sticky Contact me */}
            <ContactMe />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-12 text-black max-w-4xl mx-auto text-balance">
                        We offer secure, convenient, inexpensive boat storage, from the smallest tinnie to a serious cabin cruiser or fishing boat
                    </h2>

                    <FacilityGallery />
                </div>
            </section>
        </>
    );
}
