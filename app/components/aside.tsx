'use client'

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/public/nav-logo.png";
import Logo from "@/public/logo.png";
import Search from "@/public/search.png";
import MegaNav from "./meganav";
import NavButton from "./navbutton";
import type { EventData } from "../data/event";

const MOBILE_NAV_QUERY = "(max-width: 992px)";

function subscribeToMobileQuery(onChange: () => void) {
    const mediaQuery = window.matchMedia(MOBILE_NAV_QUERY);

    mediaQuery.addEventListener("change", onChange);

    return () => {
        mediaQuery.removeEventListener("change", onChange);
    };
}

function getMobileSnapshot() {
    return window.matchMedia(MOBILE_NAV_QUERY).matches;
}

function getServerSnapshot() {
    return false;
}

export default function Aside({ eventData }: { eventData: EventData }) {
    const navItems: (string | string[])[] = ['Guide', ['Attendees', 'Attendee Types', 'Packages', 'Reg codes', 'Discounts'], 'Content', 'Exhibitors']
    const [mobileNav, setMobileNav] = useState(false);
    const [megaNavOpen, setMegaNavOpen] = useState(false);

    function handleNavigation() {
        setMobileNav(false);
        setMegaNavOpen(false);
    }

    const isMobile = useSyncExternalStore(
        subscribeToMobileQuery,
        getMobileSnapshot,
        getServerSnapshot,
    );

    const navigationIsInert = isMobile && !mobileNav;

    return (
        <aside>
            <div className={`userInfo ${mobileNav ? "navOpen" : ""}`}>
                <Link href="/">
                    <Image src={NavLogo} alt="RainFocus Logo" className="navLogo" width={32} height={32} />
                    <Image src={Logo} alt="Summit Logo" className="logo" width={32} height={32} />
                </Link>
                <button type="button" className="initials">FL</button>
                <NavButton onToggle={() => setMobileNav(!mobileNav)} isOpen={mobileNav}/>
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