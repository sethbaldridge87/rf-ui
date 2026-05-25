'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from 'react'
import Link from 'next/link';

interface MegaNavProps {
    items: string[];
    onItemClick: () => void;
    mobileNavOpen: boolean;
}

export default function MegaNav({ items, onItemClick, mobileNavOpen }: MegaNavProps) {
    const [open, setOpen] = useState(false);
    const handleNavClick = () => {
        setOpen(!open);
    }

    useEffect(() => {
        setOpen(false);
    }, [mobileNavOpen])

    return (
        <>
            <p onClick={() => handleNavClick()}>Attendees</p>
            <AnimatePresence>
                {open && (
                    <motion.div 
                        className="megaNav"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <ul>
                            {items.map((i: string) => 
                                <li key={i}><Link href={`/attendees/${i.toLowerCase().replace(/ /g, '-')}`} onClick={onItemClick}>{i}</Link></li>
                            )}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}