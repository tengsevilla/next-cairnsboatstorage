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
                            "url('https://images.unsplash.com/photo-1631728048110-7dd20a7a1413?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
