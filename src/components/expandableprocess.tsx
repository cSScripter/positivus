"use client";
import Image from "next/image";
import { useState } from "react";

const plusIcon = "/icons/plus.png";
const minusIcon = "/icons/minus.png";


type ExpandableProcessProps = {
  number: string;
  title: string;
  content: string;
};

export default function ExpandableProcess({ number, title, content }: ExpandableProcessProps) {
  const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="rounded-[2.5rem] py-[46px] transition-all duration-300 border-black border border-b-6 border-b-black"
      style={{
        backgroundColor: isOpen ? "var(--highlight)" : "var(--background)",
      }}> 
      <div
        className="flex justify-between items-center cursor-pointer px-[60px]"
        onClick={() => setIsOpen(!isOpen)}
      >
      
      
      <div className="flex gap-[25px] items-center w-full"><h3 className="text-[60px]!">{number}</h3> <h3>{title}</h3></div>
      <div className="">{isOpen ? (
          <Image src={minusIcon} alt="Collapse" width={58} height={58} />
        ) : (
          <Image src={plusIcon} alt="Expand" width={58} height={58} />
        )}</div>


            </div>
                    {/* Expanded content */}
{isOpen && content && (
  <div className="mt-[30px] px-[60px]">
    <hr className= "w-full mb-[30px]" />
    <p>{content}</p>
  </div>
)}
        </div>
    )
}