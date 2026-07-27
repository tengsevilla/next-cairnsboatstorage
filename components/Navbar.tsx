"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import LogoCompany from "@/public/logo.png";
import { ClientInformation } from "@/data/ClientInformation";
import { telHref } from "@/lib/utils";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Facilities", href: "/facilities" },
    { label: "Location", href: "/location" },
    { label: "Terms and Conditions", href: "/terms-and-condition" },
    { label: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // rAF-throttled: the previous handler set state on every scroll event.
    useEffect(() => {
        let frame = 0;
        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                setScrolled(window.scrollY > 10);
                frame = 0;
            });
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    // Close the mobile menu on navigation, including browser back/forward.
    // Adjusting state during render rather than in an effect avoids the
    // cascading re-render that `react-hooks/set-state-in-effect` warns about.
    const [menuPathname, setMenuPathname] = useState(pathname);
    if (pathname !== menuPathname) {
        setMenuPathname(pathname);
        setIsOpen(false);
    }

    // Escape to close, and lock background scroll while open.
    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        const previousOverflow = document.body.style.overflow;

        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen]);

    const navBgClass = scrolled ? "bg-primary/100 shadow-md" : "bg-primary/50";

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav
            aria-label="Main"
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navBgClass} text-white`}
        >
            {/* 3-column grid so the nav is genuinely centred — this previously
                relied on a hard-coded ml-[-156px] offset. */}
            <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4">
                {/* Logo */}
                <Link
                    href="/"
                    aria-label="Cairns Boat Storage — home"
                    className="flex-shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                    <Image
                        src={LogoCompany}
                        alt="Cairns Boat Storage"
                        priority
                        // Renders at 48px tall (~149px wide). Without this,
                        // next/image assumes 100vw and requests a 1920px upscale.
                        sizes="150px"
                        className="h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex justify-center gap-8 items-center text-sm font-semibold uppercase tracking-wide">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                aria-current={isActive(item.href) ? "page" : undefined}
                                className={`rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${isActive(item.href)
                                        ? "underline decoration-2 underline-offset-8"
                                        : ""
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop phone CTA */}
                <a
                    href={telHref(ClientInformation.contact)}
                    className="hidden lg:flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold hover:bg-white hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                    <Phone aria-hidden="true" className="h-4 w-4" />
                    <span>{ClientInformation.contact}</span>
                </a>

                {/* Mobile menu toggle */}
                <div className="lg:hidden col-start-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        className="text-white hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav Items */}
            {isOpen && (
                <div
                    id="mobile-menu"
                    className={`lg:hidden px-4 pb-4 space-y-2 transition-colors ${navBgClass}`}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={isActive(item.href) ? "page" : undefined}
                            className={`block py-2 border-b border-white/10 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${isActive(item.href) ? "font-semibold" : ""
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href={telHref(ClientInformation.contact)}
                        className="block py-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Ph: {ClientInformation.contact}
                    </a>
                </div>
            )}
        </nav>
    );
}
