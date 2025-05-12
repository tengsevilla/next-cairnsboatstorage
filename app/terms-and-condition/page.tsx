import ContactMe from "@/components/ContactMe";
import FormClientRegistration from "./FormClientRegistration";

export default function Page() {
    return (
        <>
            <section className="relative h-[500px] w-full">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('facility-2/2.jpg')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-semi-bold text-white drop-shadow-md">
                        Secure and convenient storage solutions
                    </h1>
                </div>
            </section>

            {/* Sticky Contact me */}
            <ContactMe />
            <FormClientRegistration />
        </>
    );
}
