'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLogo from "@/public/nav-logo.png";
import Logo from "@/public/logo.png";
import Search from "@/public/search.png";
import MegaNav from "./meganav";
import NavButton from "./navbutton";

export default function Aside() {
    const navItems: (string | string[])[] = ['Guide', ['Attendees', 'Attendee Types', 'Packages', 'Reg codes', 'Discounts'], 'Content', 'Exhibitors']
    const [mobileNav, setmobileNav] = useState(false);
    const [isAccessible, setIsAccessible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: any) => {
            if (event.key === "Tab") {
                setIsAccessible(true);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <aside>
            <div className={`userInfo ${mobileNav ? "navOpen" : ""}`}>
                <Link href="/">
                    <Image
                        src={NavLogo}
                        alt="RainFocus Logo"
                        className="navLogo"
                        width={32}
                        height={32}
                        priority
                    />
                    <Image
                        src={Logo}
                        alt="Summit Logo"
                        className="logo"
                        width={32}
                        height={32}
                        priority
                    />
                </Link>
                <button type="button" className="initials">FL</button>
                <NavButton onToggle={() => setmobileNav(!mobileNav)} />
            </div>
            <nav>
                <p>RainFocus Summit</p>
                <div className="navData">
                    <span className="location">Lehi, UT</span> · <span className="date">December 15th</span>
                </div>
                <form className={isAccessible ? "accessible" : ""}>
                    <button type="submit" aria-label="Search">
                        <Image
                            src={Search}
                            alt=""
                            width={11.66}
                            height={11.66}
                            priority
                        />
                    </button>
                    <input name="search" type="text" placeholder="Search" aria-label="Enter search term" />
                </form>
                <ul>
                    {navItems.map((i, index) =>
                        Array.isArray(i) ? (
                            <li key={index}><MegaNav onItemClick={() => setmobileNav(false)} items={i} mobileNavOpen={mobileNav} /></li>
                        ) : (
                            <li key={index}><Link onClick={() => setmobileNav(false)} href={`/${i.toLowerCase()}`}>{i}</Link></li>
                        )
                    )}
                </ul>
            </nav>
        </aside>
    )
}