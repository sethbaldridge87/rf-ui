interface NavButtonProps {
  onToggle: () => void;
}

export default function NavButton({ onToggle }: NavButtonProps) {
    return (
        <div className="mobileIcon" onClick={onToggle}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    );
    
}