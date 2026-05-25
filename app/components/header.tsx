import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

interface EventData {
    name: string;
    city: string;
    state: string;
    month: string;
    day: string;
}

export default function Header({ eventData }: { eventData: EventData }) {
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
                <h1>{eventData.name}</h1>
                <p>{eventData.month} {eventData.day}</p>
                <p>{eventData.city}, {eventData.state}</p>
            </div>
            <button>Edit event</button>
        </header>
    )
}