import ContactMe from "@/components/ContactMe";
import { ClientInformation } from "@/data/ClientInformation";
import { Mail, ExternalLink, Phone, MapPin } from "lucide-react";
// import FormContact from "./FormContact";

export default function Page() {
    return (
        <>
            <section className="relative h-[500px] w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('facility-2/1.jpg')",
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
            <section className="py-20 bg-gray-50/50"> {/* Added a subtle background and more vertical breathing room */}
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Removed the border-t and replaced with a clean grid or flex layout */}
                    <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-8">

                        {/* Write to Us */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left group">
                            <div className="p-3 bg-white rounded-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
                                <Mail className="w-6 h-6 text-gray-800" />
                            </div>
                            <h4 className="font-bold text-lg text-gray-900 mb-3">Write to Us</h4>
                            <a
                                href={`mailto:${ClientInformation.email}`}
                                className="text-gray-600 hover:text-black transition-colors flex items-center gap-1 underline underline-offset-4"
                            >
                                {ClientInformation.email}
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>

                        {/* Call Us */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left group">
                            <div className="p-3 bg-white rounded-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
                                <Phone className="w-6 h-6 text-gray-800" />
                            </div>
                            <h4 className="font-bold text-lg text-gray-900 mb-3">Call Us</h4>
                            <div className="space-y-1">
                                <p className="text-gray-600 text-lg font-medium">{ClientInformation.contact}</p>
                                <p className="text-gray-500">{ClientInformation.contact2}</p>
                            </div>
                        </div>

                        {/* Visit Us */}
                        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left group">
                            <div className="p-3 bg-white rounded-2xl shadow-sm mb-4 group-hover:shadow-md transition-shadow">
                                <MapPin className="w-6 h-6 text-gray-800" />
                            </div>
                            <h4 className="font-bold text-lg text-gray-900 mb-3">Visit Us</h4>
                            <p className="text-gray-600 mb-3 max-w-[250px] leading-relaxed">
                                {ClientInformation.address}
                            </p>
                            <a
                                href={ClientInformation.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-sm font-semibold text-gray-900 hover:gap-2 transition-all"
                            >
                                Get directions <ExternalLink className="w-3 h-3 ml-1" />
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* <section className="pb-8 mx-4 sm:mx-0">
                <FormContact />
            </section> */}

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
