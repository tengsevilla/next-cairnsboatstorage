import Image from "next/image";
import { DataFacility } from "@/data/Facility";

/**
 * Facility photo grid. The fixed aspect-ratio wrapper is what stops the
 * layout shifting as each image loads — the previous `w-full h-auto` markup
 * declared a 1024x597 ratio against 4:3 sources.
 */
export default function FacilityGallery({ limit }: { limit?: number }) {
    const items = limit ? DataFacility.slice(0, limit) : DataFacility;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="relative aspect-[4/3] overflow-hidden rounded shadow hover:shadow-lg transition-shadow duration-300 motion-reduce:transition-none"
                >
                    <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}
