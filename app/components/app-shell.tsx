'use client'

import { useState, useSyncExternalStore, type ReactNode } from "react";
import Aside from "./aside";
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

interface AppShellProps {
    eventData: EventData;
    header: ReactNode;
    children: ReactNode;
}

export default function AppShell({
    eventData,
    header,
    children,
}: AppShellProps) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const isMobile = useSyncExternalStore(
        subscribeToMobileQuery,
        getMobileSnapshot,
        getServerSnapshot,
    );

    const overlayOpen = isMobile && mobileNavOpen;

    return (
        <>
            <a
                href="#mainContent"
                className="skipLink"
                inert={overlayOpen ? true : undefined}
            >
                Skip to main content
            </a>
            <Aside
                eventData={eventData}
                isMobile={isMobile}
                mobileNavOpen={mobileNavOpen}
                onMobileNavChange={setMobileNavOpen}
            />
            <main
                id="mainContent"
                inert={overlayOpen ? true : undefined}
            >
                {header}
                {children}
            </main>
        </>
    );
}
