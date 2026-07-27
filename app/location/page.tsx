import type { Metadata } from "next";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import WaterPanelSection from "@/components/WaterPanelSection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ClientInformation } from "@/data/ClientInformation";
import { DataFacility } from "@/data/Facility";
import heroImage from "@/public/facility-2/3.jpg";

export const metadata: Metadata = {
    title: "Location",
    description:
        "Cairns Boat Storage is conveniently located just 20 kms from Cairns CBD at 459R Redbank Road, Packers Camp, QLD 4865 — a secure and well equipped facility for short or long term boat storage.",
    alternates: { canonical: "/location" },
    openGraph: {
        title: "Location | Cairns Boat Storage",
        description:
            "Conveniently located, accessible and secure — 459R Redbank Road, Packers Camp, QLD 4865, just 20 kms from Cairns CBD.",
        url: "/location",
    },
};

export default function Page() {
    return (
        <>
            <BreadcrumbJsonLd name="Location" path="/location" />
            <HeroSection image={heroImage} alt={DataFacility[2].alt}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-md text-balance">
                    Conveniently located, accessible and secure
                </h1>
            </HeroSection>

            {/* Sticky Contact me */}
            <ContactMe />
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-black">
                        Our Location
                    </h2>
                    <p className="text-lg text-center mb-8 text-gray-700 max-w-4xl mx-auto">
                        A great storage solution for your marine craft, Cairns Boat Storage is conveniently located just 20 kms from Cairns CBD, providing a secure and well equipped facility to store your boat at our secure premises.

                        Redbank road facilities are perfectly positioned for short or long term boat storage.
                    </p>
                </div>
            </section>

            <WaterPanelSection>
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white text-balance">
                        Cairns Boat Storage – 459R Redbank Road, Packers Camp, QLD 4865
                    </h2>
                </div>
            </WaterPanelSection>

            <section className="w-full">
                <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
                    <iframe
                        title={`Google Maps location of Cairns Boat Storage, ${ClientInformation.address}`}
                        className="w-full h-full border-0"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7630.507784159334!2d145.797208!3d-17.011212!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x697861b3fba02751%3A0x1143be14db576fec!2s459%20Redbank%20Rd%2C%20Packers%20Camp%20QLD%204865!5e0!3m2!1sen!2sau!4v1746663323512!5m2!1sen!2sau"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </>
    );
}
