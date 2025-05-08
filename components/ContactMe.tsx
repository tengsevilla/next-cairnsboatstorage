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
                        The Cairns Boat Storage Specialists
                    </h3>
                    <Link
                        href={`tel:${ClientInformation.contact}`}
                        className="inline-block bg-primary text-white font-bold py-2 px-4 rounded shadow hover:bg-primary/50 transition"
                    >
                        Call {ClientInformation.contact}
                    </Link>
                </div>
            </section>
        </div>
    );
}
