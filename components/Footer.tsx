import Link from "next/link";
import Image from "next/image";
import { Clock, Phone, Mail, Facebook } from "lucide-react"
import { ClientInformation } from "@/data/ClientInformation";

export default function Footer() {
    return (

        <footer className="bg-gray-100 text-gray-700 py-10 border-t border-border">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Left - Useful Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="hover:text-primary">
                                License Agreement
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-primary">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-primary">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Middle - Operations */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Operations</h3>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2 mb-2">
                            <Clock className="w-5 h-5 text-black mr-2" />
                            <span>Monday - Friday: 7:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-black mr-2" />
                            <span>Saturday - Sunday: 8:00 AM - 12:00 PM</span>
                        </li>
                    </ul>
                </div>

                {/* Right - Contact Information */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Connect</h3>
                    <ul className="space-y-3 gap-4">
                        <li className="flex items-center space-x-2 mb-2">
                            <Phone className="w-5 h-5 text-black mr-2" />
                            <a href={`tel:${ClientInformation.contact}`} className="hover:text-primary">
                                {ClientInformation.contact}
                            </a>
                        </li>
                        <li className="flex items-center space-x-2 mb-2">
                            <Image src="/icon-whatsapp.png" alt="Whats App" width={24} height={24} className="mr-2" />
                            <a href={`tel:${ClientInformation.contact}`} className="hover:text-primary">
                                {ClientInformation.contact}
                            </a>
                        </li>
                        <li className="flex items-center space-x-2 mb-2">
                            <Mail className="w-5 h-5 text-black mr-2" />
                            <a href={`mailto:${ClientInformation.email}`} className="hover:text-primary">
                                {ClientInformation.email}
                            </a>
                        </li>
                    </ul>
                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <Link href={ClientInformation.facebook} className="hover:text-primary">
                            <Facebook className="w-6 h-6" />
                        </Link>
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
