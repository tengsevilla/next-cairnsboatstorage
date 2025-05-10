// components/Footer.tsx
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import LogoCompany from "@/public/logo-color.png";
import { ClientInformation } from "@/data/ClientInformation";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-10">
            <div className="container mx-auto px-4 text-center space-y-6 flex flex-col items-center justify-center">

                <Image
                    src={LogoCompany as unknown as string}
                    alt="Cairns Boat Yard"
                    className="h-12 w-auto object-contain"
                />
                <Separator className="w-1/3 my-4" />

                <div className="space-y-1 text-sm text-center">
                    <p>{ClientInformation.address}</p>
                    <p>
                        Phone: <a href={`tel:${ClientInformation.contact}`} className="hover:underline">{ClientInformation.contact}</a>
                    </p>
                     <p>
                        Whats App: <a href={`tel:${ClientInformation.contact2}`} className="hover:underline">{ClientInformation.contact2}</a>
                    </p>
                    <p>
                        Email: <a href={`mailto:${ClientInformation.email}`} className="hover:underline">
                            {ClientInformation.email}
                        </a>
                    </p>
                </div>

                <div className="text-xs text-gray-500 text-center">
                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                    {" | "}
                    <Link href="/terms-and-conditions" className="hover:underline">T &amp; C</Link>
                </div>
            </div>
        </footer>
    );
}
