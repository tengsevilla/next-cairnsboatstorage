import Image from "next/image";
import waterPanel from "@/public/water-panel.png";

/**
 * Dark banded section used on the home and location pages.
 *
 * The texture was previously a `bg-fixed` CSS background, which shipped the
 * full 1.2 MB PNG and — because `background-attachment: fixed` is not honoured
 * on iOS Safari — did not render as intended on most phones anyway.
 */
export default function WaterPanelSection({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="relative text-white">
            <Image
                src={waterPanel}
                alt=""
                aria-hidden="true"
                fill
                sizes="100vw"
                className="object-cover"
            />
            <div className="relative bg-black/50 py-16">{children}</div>
        </section>
    );
}
