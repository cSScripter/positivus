import Image from "next/image";

export default function MakeThingsHappen() {
    return (
        <section className="mt-10 md:mt-18">
<div className="flex flex-col md:flex-row md:w-[1240px] md:max-h-[347px] my-10 md:mt-18 items-center justify-center md:justify-between gap-10 md:gap-0 rounded-[2.5rem] bg-background py-10 md:py-0 pr-0 pl-0 md:pr-[135px] md:pl-[60px]">
  <div className="flex flex-col max-w-[500px] gap-[26px] items-center md:items-start mx-10">
    <h3>Let&apos;s make things happen</h3>
    <p className="text-start">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
          
        <a
          href="#"
          className="font-normal w-[288px] text-[20px] border border-foreground rounded-xl h-[68px] flex items-center justify-center hover:bg-foreground hover:text-highlight"
        >
          Get your free proposal
        </a>
  </div>

  <Image
    src="/starsillustration.png"
    alt="stars illustration"
    width={359}
    height={394}
    className="hidden md:block"
  />
</div>



        </section>
    )
}