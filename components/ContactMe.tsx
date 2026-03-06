import Link from "next/link";
import { ClientInformation } from "@/data/ClientInformation";

export default function ContactMe() {
    return (
        <div className="sticky top-20 z-10">
            <section className="relative bg-fixed bg-no-repeat bg-[length:auto] bg-center text-white">
                {/* Background Image */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "url('/water-01.jpg')",
                    }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-16 text-center lg:text-left">
                    <h3 className="text-2xl font-semibold">
                        Cairns Storage Specialists
                    </h3>
                    <Link
                        href={`tel:${ClientInformation.contact}`}
                        className="group flex items-center gap-2.5 bg-white text-gray-900 hover:bg-primary hover:text-white font-bold py-2.5 px-7 rounded-full shadow-lg transition-all duration-300 active:scale-95"
                    >
                        <div className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 group-hover:bg-white"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary group-hover:bg-white transition-colors"></span>
                        </div>
                        <span className="text-base">Call {ClientInformation.contact}</span>
                    </Link>
                </div>
            </section>
        </div>
    );
}
