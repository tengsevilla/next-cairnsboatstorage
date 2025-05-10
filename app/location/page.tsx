import ContactMe from "@/components/ContactMe";

export default function Page() {
    return (
        <>
            <section className="relative h-[500px] w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1656597281873-30778a28cb4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-semi-bold text-white drop-shadow-md">
                        Conveniently located, accessible and secure
                    </h1>
                </div>
            </section>

            {/* Sticky Contact me */}
            <ContactMe />
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-8 text-black">
                        Our Location
                    </h2>
                    <p className="text-lg text-center mb-8 text-gray-700">
                        A great storage solution for your marine craft, Cairns Boat Storage is conveniently located just 23 kms from Cairns CBD, providing a secure and well equipped facility to store your boat at our secure premises.

                        Redbank’s road facilities are perfectly positioned for short or long term boat storage.
                    </p>
                </div>
            </section>

            <section className="relative h-auto bg-fixed bg-center bg-no-repeat bg-cover text-white"
                style={{
                    backgroundImage:
                        "url('waterpanel-01-scaled.jpg')",
                }}
            >
                <div className="bg-black/50 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Cairns Boat Storage – 459R Redbank Road, Packers Camp, QLD 4865
                        </h3>
                    </div>
                </div>
            </section>

            <section className="w-full">
                <div className="w-full h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
                    <iframe
                        className="w-full h-full"
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
