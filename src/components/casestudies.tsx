import Image from "next/image"
export default function CaseStudies() {
    return (
               <section className="flex flex-col mb-18">
           <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-center xl:justify-start md:my-18">
        <h2 className="bg-highlight rounded-xl px-3">Case Studies</h2>
        <p className="max-w-[580px] text-center lg:text-start">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
</div>
<div className="flex flex-row no-wrap w-full overflow-x-auto touch-pan-x snap-x snap-mandatory scrollbar-hide lg:overflow-x-visible xl:h-[326] lg:rounded-[2.5rem] lg:bg-foreground lg:px-[60px] lg:py-[70px] mx-0 my-5 items-start gap-4 xl:gap-16">
    <div className="flex flex-col shrink-0 snap-center w-[80vw] lg:max-w-[286px] gap-5 bg-foreground lg:bg-transparent rounded-[2.5rem] px-10 py-7 lg:px-0 lg:py-0">
        <p className="text-white!">For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.</p>
        <a
  href="#">
  <Image
        src="/learnmorearrow.png"
        alt="PPC Campaign learn more navigation button"
        width={140}
        height={28}
        />
        </a>
    </div>
    <div className="hidden sm:block w-0.5 h-[186px] bg-white"></div>

    <div className="flex flex-col snap-center shrink-0 w-[80vw] lg:max-w-[286px] gap-5 bg-foreground lg:bg-transparent rounded-[2.5rem] px-10 py-7 lg:px-0 lg:py-0">
        <p className="text-white!">For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.</p>
        <a
  href="#">
  <Image
        src="/learnmorearrow.png"
        alt="PPC Campaign learn more navigation button"
        width={140}
        height={28}
        />
        </a>
    </div>
    <div className="hidden sm:block w-0.5 h-[186px] bg-white"></div>
        <div className="flex flex-col shrink-0 snap-center w-[80vw] lg:max-w-[286px] gap-5 bg-foreground lg:bg-transparent rounded-[2.5rem] px-10 py-7 lg:px-0 lg:py-0">
        <p className="text-white!">For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.</p>
        <a
  href="#">
  <Image
        src="/learnmorearrow.png"
        alt="PPC Campaign learn more navigation button"
        width={140}
        height={28}
        />
        </a>
    </div>
</div>

</section>
    )
}