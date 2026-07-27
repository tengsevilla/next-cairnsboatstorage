import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type HeroSectionProps = {
    image: StaticImageData;
    alt: string;
    /** Matches the per-page overlay opacity that was previously inlined. */
    overlayClassName?: string;
    children: React.ReactNode;
};

/**
 * Shared page hero. Previously each page inlined this block with a CSS
 * `background-image`, which bypassed next/image and shipped the full
 * 4000x3000 source JPEG to the browser.
 */
export default function HeroSection({
    image,
    alt,
    overlayClassName = "bg-black/10",
    children,
}: HeroSectionProps) {
    return (
        <section className="relative h-[500px] w-full">
            <Image
                src={image}
                alt={alt}
                fill
                priority
                sizes="100vw"
                placeholder="blur"
                className="object-cover"
            />

            {/* Overlay */}
            <div className={cn("absolute inset-0", overlayClassName)} />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
                {children}
            </div>
        </section>
    );
}
