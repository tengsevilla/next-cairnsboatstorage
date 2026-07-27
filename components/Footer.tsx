import Image from "next/image";
import { Clock, Phone, Mail } from "lucide-react"
import { ClientInformation } from "@/data/ClientInformation";
import { telHref } from "@/lib/utils";

// lucide-react v1 removed all brand icons, so the Facebook mark is inlined.
function FacebookIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className={className}
        >
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
    );
}

export default function Footer() {
    return (

        <footer className="bg-gray-100 text-gray-700 py-10 border-t border-border">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left - Useful Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Location</h3>
                    <p>459R Redbank Road, Packers Camp, QLD 4865</p>
                </div>

                {/* Middle - Operations */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Operations</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2 mb-2">
                            <Clock aria-hidden="true" className="w-5 h-5 text-black mr-2 shrink-0" />
                            <span>Monday - Friday: 7:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Clock aria-hidden="true" className="w-5 h-5 text-black mr-2 shrink-0" />
                            <span>Saturday - Sunday: 8:00 AM - 12:00 PM</span>
                        </li>
                    </ul>
                </div>

                {/* Right - Contact Information */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Connect</h3>
                    <ul className="space-y-3 gap-4">
                        <li className="flex items-center space-x-2 mb-2">
                            <Phone aria-hidden="true" className="w-5 h-5 text-black mr-2 shrink-0" />
                            <a
                                href={telHref(ClientInformation.contact)}
                                className="rounded-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                {ClientInformation.contact}
                            </a>
                        </li>
                        <li className="flex items-center space-x-2 mb-2">
                            <Image src="/icon-whatsapp.png" alt="WhatsApp" width={24} height={24} className="mr-2 shrink-0" />
                            <a
                                href={telHref(ClientInformation.contact)}
                                className="rounded-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                {ClientInformation.contact}
                            </a>
                        </li>
                        <li className="flex items-center space-x-2 mb-2">
                            <Mail aria-hidden="true" className="w-5 h-5 text-black mr-2 shrink-0" />
                            <a
                                href={`mailto:${ClientInformation.email}`}
                                className="rounded-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                {ClientInformation.email}
                            </a>
                        </li>
                    </ul>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <a
                            href={ClientInformation.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Cairns Boat Storage on Facebook (opens in a new tab)"
                            className="rounded-sm hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            <FacebookIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8 border-t border-border pt-4">
                &copy; {new Date().getFullYear()} Cairns Boat Storage. All rights reserved.
            </div>
        </footer>
    );
}
