import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const IntroTimeline = ({heroTitleRef, heroSubTitleRef, heroTextRef, ctaBtnRef}) => {
  const tl = gsap.timeline();
        tl.from((heroTitleRef.current), {
          x: "-50%",
          opacity: 0,
          duration: 0.5
        }),
        tl.from((heroSubTitleRef.current), {
          x: "-50%",
          opacity: 0,
          duration: 0.5
        }),
        tl.from((heroTextRef.current), {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
          duration: 0.5
        }),
        tl.from((ctaBtnRef.current), {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: "power3"
        })
};

export default IntroTimeline;
