import ContactMe from "@/components/ContactMe";
import { DataFacility } from "@/data/Facility";
import Image from "next/image";

export default function Page() {
    return (
        <>
            <section className="relative h-[500px] w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1680906001201-bcbb6bc9cb62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-semi-bold text-white drop-shadow-md">
                        The best value boat storage in Cairns
                    </h1>
                </div>
            </section>

            {/* Sticky Contact me */}
            <ContactMe />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-12 text-black">
                        We offer secure, convenient, inexpensive boat storage, from the smallest tinnie to a serious cabin cruiser or fishing boat
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {DataFacility.map((item, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={item.image}
                                    alt={`Facility ${index + 1}`}
                                    width={1024}
                                    height={597}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
