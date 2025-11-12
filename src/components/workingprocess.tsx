import ExpandableProcess from "./expandableprocess"

export default function WorkingProcess() {
    return (
        <section className="my-18 flex flex-col">
                  <div className="flex flex-col md:flex-row gap-0 md:gap-10 items-center justify-center xl:justify-start md:mb-18">
        <h2 className="bg-highlight rounded-xl px-3 text-center">Our Working<span className="hidden md:inline"> Process</span></h2>
        <h2 className="block md:hidden bg-highlight rounded-xl px-3 text-center">Process</h2>
        <p className="max-w-[292px] text-center lg:text-start my-5 md:my-0">Step-by-Step Guide to Achieving Your Business Goals</p>
</div>
<div className="w-full flex flex-col gap-[30px]">
<ExpandableProcess number="01" title="Consultation" content="During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." />
<ExpandableProcess number="02" title="Research and Strategy Development"  content="Lorem ipsum" />
<ExpandableProcess number="03" title="Implementation"  content="Lorem ipsum" />
<ExpandableProcess number="04" title="Monitoring and Optimization"  content="Lorem ipsum" />
<ExpandableProcess number="05" title="Reporting and Communication"  content="Lorem ipsum" />
<ExpandableProcess number="06" title="Continual Improvement"  content="Lorem ipsum" />
</div>
        </section>
    )
}