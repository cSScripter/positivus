import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0 my-9 md:my-18">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-[531px] gap-[17px] md:gap-[35px]">
        <h1>Navigating the digital landscape for success</h1>

        <p className="homesection">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <span className="hidden md:block">
        <a
          href="#"
          className="font-normal text-[20px] border border-foreground rounded-xl w-[264px] h-[68px] flex items-center justify-center hover:bg-foreground hover:text-highlight"
        >
          Book a consultation
        </a></span>
      </div>
      <Image
        src="/megaphone.png"
        alt="megaphone illustration"
        width={600.46}
        height={515}
      />
      <span className="block md:hidden w-full">
        <a
          href="#"
          className="font-normal text-[20px] border border-foreground rounded-xl h-[68px] flex items-center justify-center hover:bg-foreground hover:text-highlight"
        >
          Book a consultation
        </a></span>
    </section>
  );
}
