import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Header() {
    return (
        <header>
            <Link href="/">
            <Image
                src={Logo}
                alt="Summit Logo"
                width={95}
                height={95}
                priority
            />
            </Link>
            <div>
                <h1>RainFocus Summit</h1>
                <p>December 15th</p>
                <p>Lehi, Utah</p>
            </div>
            <button>Edit event</button>
        </header>
    )
}