import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="flex flex-col my-9 lg:my-18">
           <div className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center justify-center xl:justify-start">
        <h2 className="bg-highlight rounded-xl px-3">Services</h2>
        <p className="max-w-[580px] text-center">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
</div>
<div className="lg:mt-18 mt-9 grid grid-cols-1 xl:grid-cols-2 gap-5 md:gap-10 justify-items-center xl:justify-items-stretch">
{/* 
Cards */}
<div className="md:w-[600px] max-w-[600px] h-[310px] rounded-[2.5rem] bg-[#F3F3F3] border border-black border-b-6 border-b-black transform transition-transform duration-300 hover:scale-105 flex items-center justify-between px-5 lg:px-[50px]">
  
  <div className="flex flex-col justify-between h-full py-[50px]">
 
    <div className="flex flex-col items-start max-w-[221px] whitespace-nowrap">
      <h3>
        <span className="bg-highlight rounded-xl px-2">Search engine</span>
      </h3>
      <h3>
        <span className="bg-highlight rounded-xl px-2 py-2">optimization</span>
      </h3>
    </div>

    
<a
  href="#"   
  className="flex flex-row items-center max-w-[164px] justify-between mt-[93px]"
>
  <Image
    src="/icons/arrow.png"
    alt="learn more arrow button"
    width={41}
    height={41}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
  <p className="text-[20px]!">Learn More</p>
</a>
  </div>

 
  <Image
    src="/art1.png"
    alt="Search engine optimization illustration"
    width={210}
    height={170}
    style={{ maxWidth: '50%', height: 'auto' }}
  />
</div>
{/* card 2 */}
<div className="md:w-[600px] max-w-[600px] h-[310px] rounded-[2.5rem] bg-highlight border border-black border-b-6 border-b-black transform transition-transform duration-300 hover:scale-105 flex items-center justify-between px-5 lg:px-[50px]">
  
  <div className="flex flex-col justify-between h-full py-[50px] gap-[93px]">
 
    <div className="flex flex-col items-start max-w-[221px] whitespace-nowrap">
      <h3>
        <span className="bg-background rounded-xl px-2">Pay-per-clicks</span>
      </h3>
      <h3>
        <span className="bg-background rounded-xl px-2 py-2">advertising</span>
      </h3>
    </div>

    
<a
  href="#"   
  className="flex flex-row items-center max-w-[164px] justify-between"
>
  <Image
    src="/icons/arrow.png"
    alt="learn more arrow button"
    width={41}
    height={41}
    style={{ maxWidth: '100%', height: 'auto' }}
    className="object-fit"
  />
  <p className="text-[20px]!">Learn More</p>
</a>
  </div>

 
  <Image
    src="/art2.png"
    alt="pay-per-clicks illustration"
    width={210}
    height={148}
    style={{ maxWidth: '50%', height: 'auto' }}
  />
</div>
{/* card 3 */}
<div className="md:w-[600px] max-w-[600px] h-[310px] rounded-[2.5rem] bg-foreground border border-black border-b-6 border-b-black transform transition-transform duration-300 hover:scale-105 flex items-center justify-between px-5 lg:px-[50px]">
  
  <div className="flex flex-col justify-between h-full py-[50px] gap-[93px]">
 
    <div className="flex flex-col items-start max-w-[221px] whitespace-nowrap">
      <h3>
        <span className="bg-background rounded-xl px-2">Social Media</span>
      </h3>
      <h3>
        <span className="bg-background rounded-xl px-2 py-2">Marketing</span>
      </h3>
    </div>

    
<a
  href="#"   
  className="flex flex-row items-center max-w-[164px] justify-between"
>
  <Image
    src="/icons/arrowwhite.png"
    alt="learn more arrow button"
    width={41}
    height={41}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
  <p className="text-[20px]! text-white!">Learn More</p>
</a>
  </div>

 
  <Image
    src="/art3.png"
    alt="social media marketing illustration"
    width={210}
    height={210}
    style={{ maxWidth: '50%', height: 'auto' }}
  />
</div>
{/* card 4 */}
<div className="md:w-[600px] max-w-[600px] h-[310px] rounded-[2.5rem] bg-background border border-black border-b-6 border-b-black transform transition-transform duration-300 hover:scale-105 flex items-center justify-between px-5 lg:px-[50px]">
  
  <div className="flex flex-col justify-between h-full py-[50px] gap-[93px]">
 
    <div className="flex flex-col items-start max-w-[221px] whitespace-nowrap">
      <h3>
        <span className="bg-highlight rounded-xl px-2">Email</span>
      </h3>
      <h3>
        <span className="bg-highlight rounded-xl px-2 py-2">Marketing</span>
      </h3>
    </div>

    
<a
  href="#"   
  className="flex flex-row items-center w-[164px] justify-between"
>
  <Image
    src="/icons/arrow.png"
    alt="learn more arrow button"
    width={41}
    height={41}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
  <p className="text-[20px]!">Learn More</p>
</a>
  </div>

 
  <Image
    src="/art4.png"
    alt="email marketing illustration"
    width={210}
    height={193}
    style={{ maxWidth: '50%', height: 'auto' }}
  />
</div>
{/* card 5 */}
<div className="md:w-[600px] max-w-[600px] h-[310px] rounded-[2.5rem] bg-highlight border border-black border-b-6 border-b-black transform transition-transform duration-300 hover:scale-105 flex items-center justify-between px-5 lg:px-[50px]">
  
  <div className="flex flex-col justify-between h-full py-[50px] gap-[93px]">
 
    <div className="flex flex-col items-start max-w-[221px] whitespace-nowrap">
      <h3>
        <span className="bg-background rounded-xl px-2">Content</span>
      </h3>
      <h3>
        <span className="bg-background rounded-xl px-2 py-2">Creation</span>
      </h3>
    </div>

    
<a
  href="#"   
  className="flex flex-row items-center w-[164px] justify-between"
>
  <Image
    src="/icons/arrow.png"
    alt="learn more arrow button"
    width={41}
    height={41}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
  <p className="text-[20px]!">Learn More</p>
</a>
  </div>

 
  <Image
    src="/art5.png"
    alt="analytics and tracking illustration"
    width={210}
    height={196}
    style={{ maxWidth: '50%', height: 'auto' }}
  />
  </div>
{/* card 6 */}
<div className="md:w-[600px] max-w-[600px] h-[310px] rounded-[2.5rem] bg-foreground border border-black border-b-6 border-b-black transform transition-transform duration-300 hover:scale-105 flex items-center justify-between px-5 lg:px-[50px]">
  
  <div className="flex flex-col justify-between h-full py-[50px] gap-[93px]">
 
    <div className="flex flex-col items-start max-w-[221px] whitespace-nowrap">
      <h3>
        <span className="bg-highlight rounded-xl px-2">Analytics and</span>
      </h3>
      <h3>
        <span className="bg-highlight rounded-xl px-2 py-2">Tracking</span>
      </h3>
    </div>

    
<a
  href="#"   
  className="flex flex-row items-center max-w-[164px] justify-between"
>
  <Image
    src="/icons/arrowwhite.png"
    alt="learn more arrow button"
    width={41}
    height={41}
    style={{ maxWidth: '100%', height: 'auto' }}
  />
  <p className="text-[20px]! text-white!">Learn More</p>
</a>
  </div>

 
  <Image
    src="/art6.png"
    alt="analytics and tracking illustration"
    width={210}
    height={196}
    style={{ maxWidth: '50%', height: 'auto' }}
  />
  </div>
</div>


        </section>
    )
}