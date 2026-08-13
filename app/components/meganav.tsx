'use client'

import { motion, AnimatePresence } from "framer-motion"
import Link from 'next/link';

interface MegaNavProps {
    items: string[];
    isOpen: boolean;
    onToggle: () => void;
    onNavigate: () => void;
}

export default function MegaNav({
    items,
    isOpen,
    onToggle,
    onNavigate,
}: MegaNavProps) {
    return (
        <>
            <button type="button" onClick={onToggle} aria-expanded={isOpen} aria-controls="attendees-subnav">
                Attendees
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div id="attendees-subnav" className="megaNav" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.25, ease: "easeOut" }} style={{ overflow: "hidden" }}>
                        <ul>
                            {items.map((item) => (
                                <li key={item}>
                                    <Link href={`/attendees/${item.toLowerCase().replace(/ /g, "-")}`} onClick={onNavigate}>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}