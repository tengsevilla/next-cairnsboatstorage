"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import LogoCompany from "@/public/logo-color.png";
import { ClientInformation } from "@/data/ClientInformation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Facilities", href: "/facilities" },
    { label: "Location", href: "/location" },
    { label: "Client Registration", href: "/client-registration" },
    { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navBgClass = scrolled ? "bg-primary/100 shadow-md" : "bg-primary/50";

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navBgClass} text-white`}>
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src={LogoCompany as unknown as string}
                        alt="Cairns Boat Boat Storage"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex flex-1 justify-center gap-8 items-center text-sm font-semibold uppercase tracking-wide">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href} className="hover:underline">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Contact */}
                <div className="hidden lg:block text-sm font-semibold">
                    <a href={`tel:${ClientInformation.contact}`} className="hover:underline">Ph     {ClientInformation.contact}</a>

                </div>

                {/* Mobile menu toggle */}
                <div className="lg:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav Items */}
            {isOpen && (
                <div className={`lg:hidden px-4 pb-4 space-y-2 transition-colors ${navBgClass}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 border-b border-white/10"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a href={`tel:${ClientInformation.contact}`} className="block py-2">
                        Ph: {ClientInformation.contact}
                    </a>
                </div>
            )}
        </nav>
    );
}
