import Image from "next/image";
import Logo from "@/public/logo.png";
import type { EventData } from "../data/event";

export default function Header({ eventData }: { eventData: EventData }) {
    return (
        <header>
            <Image
                src={Logo}
                alt="Summit Logo"
                width={95}
                height={95}
            />
            <div>
                <h1>{eventData.name}</h1>
                <p>{eventData.month} {eventData.day}</p>
                <p>{eventData.city}, {eventData.state}</p>
            </div>
            <button type="button">Edit event</button>
        </header>
    )
}