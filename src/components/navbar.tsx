"use client";
import { useState } from "react";

export default function NavBar() {
     const [isOpen, setIsOpen] = useState(false);

    return (
        
        <nav className="flex md:w-[811px]">
            <div className="hidden md:flex justify-between items-center gap-10 w-full">
<a href="#" className="font-normal text-[20px] hover:text-highlight hover:bg-foreground text-center">
  About us
</a>
<a href="#services" className="font-normal text-[20px] hover:text-highlight hover:bg-foreground">
  Services
</a>
<a href="#" className="font-normal text-[20px] hover:text-highlight hover:bg-foreground text-center">
  Use Cases
</a>
<a href="#" className="font-normal text-[20px] hover:text-highlight hover:bg-foreground">
  Pricing
</a>
<a href="#" className="font-normal text-[20px] hover:text-highlight hover:bg-foreground">
  Blog
</a>
<a
  href="#"
  className="font-normal text-[20px] border border-foreground rounded-xl w-[231px] h-[68px] flex items-center justify-center hover:bg-foreground hover:text-highlight"
>
  Request a quote
</a>
</div>
{/* Mobile Menu */}
 <button
  className="block md:hidden"
  aria-label="Toggle Menu"
  onClick={() => setIsOpen(!isOpen)}
>
  <img src="/icons/hamburgerdark.svg" alt="Menu" className="w-6 h-6" />
</button>

{/* Mobile Menu - only shows when isOpen */}
{isOpen && (
  <div className="fixed top-20 left-0 right-0 bg-background shadow-md
            flex flex-col items-center space-y-4 p-6 md:hidden
            z-50">
    {/* Close button inside the menu */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-2 right-10 text-center"
      aria-label="Close menu"
    >
      &times;
    </button>

    <a href="#" onClick={() => setIsOpen(false)} className="font-normal text-[18px] hover:text-highlight hover:bg-foreground">
  About us
</a>
   <a href="#" onClick={() => setIsOpen(false)} className="font-normal text-[18px] hover:text-highlight hover:bg-foreground">
  Services
</a>
   <a href="#" onClick={() => setIsOpen(false)} className="font-normal text-[18px] hover:text-highlight hover:bg-foreground">
  Use Cases
</a>
   <a href="#" onClick={() => setIsOpen(false)} className="font-normal text-[18px] hover:text-highlight hover:bg-foreground">
  Pricing
</a>
   <a href="#"  onClick={() => setIsOpen(false)} className="font-normal text-[18px] hover:text-highlight hover:bg-foreground">
  Blog
</a>
  <a href="#"  onClick={() => setIsOpen(false)} className="font-normal text-[18px] hover:text-highlight hover:bg-foreground">
  Request a quote
</a>

  </div>
)}
</nav>


    )
}