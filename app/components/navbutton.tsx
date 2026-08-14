import type { Ref } from "react";

interface NavButtonProps {
    onToggle: () => void;
    isOpen?: boolean;
    buttonRef?: Ref<HTMLButtonElement>;
}

export default function NavButton({
    onToggle,
    isOpen = false,
    buttonRef,
}: NavButtonProps) {
    return (
        <button ref={buttonRef} className="mobileIcon" onClick={onToggle} type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
    );

}
