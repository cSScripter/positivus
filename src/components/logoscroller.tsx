import Image from "next/image";

export default function Logos() {
    return (
      <section className="flex flex-wrap justify-center xl:justify-around items-center gap-x-4 gap-y-4 xl:gap-x-0 md:gap-y-0"  >

        <Image
        src="/icons/amazonlogo.png"
        alt="Amazon Company Logo"
        width={124.11}
        height={48}
        className="grayscale max-w-[25%] md:max-w-none ml-10" /> 
         <Image
        src="/icons/dribblelogo.png"
        alt="Amazon Company Logo"
        width={126.37}
        height={48}
        className="grayscale max-w-[25%] md:max-w-none" />
         <Image
        src="/icons/hubspotlogo.png"
        alt="Amazon Company Logo"
        width={128.63}
        height={48}
        className="grayscale max-w-[25%] md:max-w-none" />

        <Image
        src="/icons/notionlogo.png"
        alt="Amazon Company Logo"
        width={145.55}
        height={48}
        className="grayscale max-w-[25%] md:max-w-none" />
         <Image
        src="/icons/netflixlogo.png"
        alt="Amazon Company Logo"
        width={125.24}
        height={48}
        className="grayscale max-w-[25%] md:max-w-none" />
          <Image
        src="/icons/zoomlogo.png"
        alt="Amazon Company Logo"
        width={110.57}
        height={48}
        className="grayscale max-w-[25%] md:max-w-none" />
      </section>
    )
}