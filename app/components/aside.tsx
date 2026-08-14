'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/public/nav-logo.png";
import Logo from "@/public/logo.png";
import Search from "@/public/search.png";
import MegaNav from "./meganav";
import NavButton from "./navbutton";
import type { EventData } from "../data/event";

interface AsideProps {
    eventData: EventData;
    isMobile: boolean;
    mobileNavOpen: boolean;
    onMobileNavChange: (isOpen: boolean) => void;
}

export default function Aside({
    eventData,
    isMobile,
    mobileNavOpen,
    onMobileNavChange,
}: AsideProps) {
    const navItems: (string | string[])[] = ['Guide', ['Attendees', 'Attendee Types', 'Packages', 'Reg codes', 'Discounts'], 'Content', 'Exhibitors']
    const [megaNavOpen, setMegaNavOpen] = useState(false);
    const navButtonRef = useRef<HTMLButtonElement>(null);

    const overlayOpen = isMobile && mobileNavOpen;
    const navigationIsInert = isMobile && !mobileNavOpen;

    const closeMobileNavigation = useCallback((restoreFocus = false) => {
        onMobileNavChange(false);
        setMegaNavOpen(false);

        if (restoreFocus) {
            requestAnimationFrame(() => {
                navButtonRef.current?.focus();
            });
        }
    }, [onMobileNavChange]);

    function handleNavigation() {
        closeMobileNavigation();
    }

    useEffect(() => {
        if (!overlayOpen) {
            return;
        }

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                event.preventDefault();
                closeMobileNavigation(true);
            }
        }

        const previousOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [overlayOpen, closeMobileNavigation]);

    return (
        <aside>
            <div className={`userInfo ${mobileNavOpen ? "navOpen" : ""}`}>
                <Link href="/" onClick={handleNavigation}>
                    <Image src={NavLogo} alt="RainFocus Logo" className="navLogo" width={32} height={32} />
                    <Image src={Logo} alt="Summit Logo" className="logo" width={32} height={32} />
                </Link>
                <button type="button" className="initials">FL</button>
                <NavButton
                    buttonRef={navButtonRef}
                    onToggle={() => onMobileNavChange(!mobileNavOpen)}
                    isOpen={mobileNavOpen}
                />
            </div>
            <nav id="mobile-navigation" aria-label="Primary navigation" inert={navigationIsInert ? true : undefined}>
                <p>{eventData.name}</p>
                <div className="navData">
                    <span className="location">{eventData.city}, {eventData.state}</span> · <span className="date">{eventData.month} {eventData.day}</span>
                </div>
                <form>
                    <button type="submit" aria-label="Search">
                        <Image src={Search} alt="" width={11.66} height={11.66} />
                    </button>
                    <input name="search" type="text" placeholder="Search" aria-label="Enter search term" />
                </form>
                <ul>
                    {navItems.map((i, index) =>
                        Array.isArray(i) ? (
                            <li key={index}><MegaNav items={i} isOpen={megaNavOpen} onToggle={() => setMegaNavOpen((isOpen) => !isOpen)} onNavigate={handleNavigation} /></li>
                        ) : (
                            <li key={index}><Link href={`/${i.toLowerCase()}`} onClick={handleNavigation}>{i}</Link></li>
                        )
                    )}
                </ul>
            </nav>
        </aside>
    )
}
