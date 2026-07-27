import { ClientInformation } from "@/data/ClientInformation";
import { telHref } from "@/lib/utils";

/**
 * Call-to-action band shown below the hero on every page.
 *
 * `water-01.jpg` is a small (24 KB) seamless wave texture, so it stays a
 * tiling CSS background — that is the right tool for a repeating pattern.
 * Previously the repeat/size/attachment utilities sat on the outer wrapper
 * while the image was painted on an inner div, so none of them applied.
 */
export default function ContactMe() {
    return (
        <section className="relative bg-[url('/water-01.jpg')] bg-repeat bg-center text-white">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-6 flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-16 text-center lg:text-left">
                <h2 className="text-2xl font-semibold">
                    Cairns Storage Specialists
                </h2>
                <a
                    href={telHref(ClientInformation.contact)}
                    className="group flex items-center gap-2.5 bg-white text-gray-900 hover:bg-primary hover:text-white font-bold py-2.5 px-7 rounded-full shadow-lg transition-all duration-300 active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                    <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 group-hover:bg-white"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary group-hover:bg-white transition-colors motion-reduce:transition-none"></span>
                    </div>
                    <span className="text-base">Call {ClientInformation.contact}</span>
                </a>
            </div>
        </section>
    );
}
