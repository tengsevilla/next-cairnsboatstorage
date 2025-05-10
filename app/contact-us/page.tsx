import ContactMe from "@/components/ContactMe";
import { ClientInformation } from "@/data/ClientInformation";
import { Mail, ExternalLink, Phone, MapPin } from "lucide-react";
import FormContact from "./FormContact";

export default function Page() {
    return (
        <>
            <section className="relative h-[500px] w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1614377165624-d250115894fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-semi-bold text-white drop-shadow-md">
                        We&#39;re here to help with all your storage needs
                    </h1>
                </div>
            </section>

            {/* Sticky Contact me */}
            <ContactMe />
            <section className="py-8">
                <div className="w-full max-w-6xl mx-auto border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                        {/* Write to Us */}
                        <div className="flex-1 px-4 py-6 sm:py-0 flex flex-col items-start text-center sm:text-left">
                            <Mail className="w-6 h-6 mb-2 text-gray-800" />
                            <h4 className="font-semibold text-gray-900 mb-2">Write to Us</h4>
                            <a
                                href="mailto:orchardliving@mail.com"
                                className="inline-flex items-center text-gray-600 hover:text-black underline underline-offset-2"
                            >
                                {ClientInformation.email} <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                        {/* Call Us */}
                        <div className="flex-1 px-4 py-6 sm:py-0 flex flex-col items-start text-center sm:text-left">
                            <Phone className="w-6 h-6 mb-2 text-gray-800" />
                            <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                            <p className="text-gray-600">{ClientInformation.contact}</p>
                            <p className="text-gray-600">{ClientInformation.contact2}</p>
                        </div>

                        {/* Visit Us */}
                        <div className="flex-1 px-4 py-6 sm:py-0 flex flex-col items-start text-center sm:text-left">
                            <MapPin className="w-6 h-6 mb-2 text-gray-800" />
                            <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                            <p className="text-gray-600">{ClientInformation.address}</p>
                            <a
                                href={ClientInformation.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-gray-600 hover:text-black underline underline-offset-2 mt-1"
                            >
                                Get directions <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-8 mx-4 sm:mx-0">
                <FormContact />
            </section>

            <section className="relative w-full h-[400px] md:h-[300px] sm:h-[200px] bg-fixed bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage:
                        "url('/facility/7.jpg')",
                }}
            >
                {/* Optional overlay */}
                <div className="absolute inset-0 bg-black/20" />
            </section>

        </>
    );
}
