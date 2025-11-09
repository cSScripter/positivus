import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar";

export default function Header() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-center md:justify-between gap-5 mt-9 md:mt-18">
            
                <Image
                src="/icons/positivusblack.png"
                alt="positivus icon"
                width={219.54}
                height={56}
                className="object-contain"
                priority />
            
                <NavBar />
        </section>
    )
}