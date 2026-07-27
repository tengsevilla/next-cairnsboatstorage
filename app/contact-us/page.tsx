import type { Metadata } from "next";
import ContactMe from "@/components/ContactMe";
import HeroSection from "@/components/HeroSection";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ClientInformation } from "@/data/ClientInformation";
import { DataFacility } from "@/data/Facility";
import { telHref } from "@/lib/utils";
import { Mail, ExternalLink, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/facility-2/1.jpg";
import jettyImage from "@/public/facility/7.jpg";

export const metadata: Metadata = {
    title: "Contact Us",
    description: `We're here to help with all your storage needs. Call ${ClientInformation.contact}, email ${ClientInformation.email}, or visit us at ${ClientInformation.address}.`,
    alternates: { canonical: "/contact-us" },
    openGraph: {
        title: "Contact Us | Cairns Boat Storage",
        description: "We're here to help with all your storage needs.",
        url: "/contact-us",
    },
};

export default function Page() {
    return (
        <>
            <BreadcrumbJsonLd name="Contact Us" path="/contact-us" />
            <HeroSection image={heroImage} alt={DataFacility[0].alt}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-md text-balance">
                    We&#39;re here to help with all your storage needs
                </h1>
            </HeroSection>

            {/* Sticky Contact me */}
            <ContactMe />
            <section className="py-20 bg-gray-50/50"> {/* Added a subtle background and more vertical breathing room */}
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Removed the border-t and replaced with a clean grid or flex layout */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">

                        {/* Write to Us */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left group">
                            <div className="p-3 bg-white rounded-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow motion-reduce:transition-none">
                                <Mail aria-hidden="true" className="w-6 h-6 text-gray-800" />
                            </div>
                            <h2 className="font-bold text-lg text-gray-900 mb-3">Write to Us</h2>
                            <a
                                href={`mailto:${ClientInformation.email}`}
                                className="rounded-sm text-gray-600 hover:text-black transition-colors motion-reduce:transition-none flex items-center gap-1 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                {ClientInformation.email}
                                <ExternalLink aria-hidden="true" className="w-3 h-3" />
                            </a>
                        </div>

                        {/* Call Us */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left group">
                            <div className="p-3 bg-white rounded-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow motion-reduce:transition-none">
                                <Phone aria-hidden="true" className="w-6 h-6 text-gray-800" />
                            </div>
                            <h2 className="font-bold text-lg text-gray-900 mb-3">Call Us</h2>
                            <div className="space-y-1">
                                <p className="text-gray-600 text-lg font-medium">
                                    <a
                                        href={telHref(ClientInformation.contact)}
                                        className="rounded-sm hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        {ClientInformation.contact}
                                    </a>
                                </p>
                                <p className="text-gray-500">
                                    <a
                                        href={telHref(ClientInformation.contact2)}
                                        className="rounded-sm hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        {ClientInformation.contact2}
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Visit Us */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left group">
                            <div className="p-3 bg-white rounded-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow motion-reduce:transition-none">
                                <MapPin aria-hidden="true" className="w-6 h-6 text-gray-800" />
                            </div>
                            <h2 className="font-bold text-lg text-gray-900 mb-3">Visit Us</h2>
                            <p className="text-gray-600 mb-3 max-w-[250px] leading-relaxed">
                                {ClientInformation.address}
                            </p>
                            <a
                                href={ClientInformation.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-sm inline-flex items-center text-sm font-semibold text-gray-900 hover:gap-2 transition-all motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                Get directions <ExternalLink aria-hidden="true" className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section
                aria-hidden="true"
                className="relative w-full h-[400px] md:h-[300px] sm:h-[200px]"
            >
                <Image
                    src={jettyImage}
                    alt=""
                    fill
                    sizes="100vw"
                    placeholder="blur"
                    className="object-cover"
                />
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/20" />
            </section>

        </>
    );
}
