import Image from "next/image";
import Home from "@/components/home";
import Logos from "@/components/logoscroller";
import Services from "@/components/services";
import MakeThingsHappen from "@/components/makethingshappen";
import CaseStudies from "@/components/casestudies";

export default function HomeSection() {
  return (
    <>
    <Home />
    <Logos />
    <Services />
    <MakeThingsHappen />
    <CaseStudies />
    </>
  );
}
