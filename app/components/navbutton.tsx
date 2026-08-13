interface NavButtonProps {
    onToggle: () => void;
    isOpen?: boolean;
}

export default function NavButton({ onToggle, isOpen = false }: NavButtonProps) {
    return (
        <button className="mobileIcon" onClick={onToggle} type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </button>
    );

}