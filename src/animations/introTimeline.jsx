import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const IntroTimeline = ({heroTitleRef, heroSubTitleRef, heroTextRef, ctaBtnRef}) => {
  const tl = gsap.timeline();
        tl.from("#navbar", {
          y: -30,
          opacity: 0,
          duration: 0.7,
          delay: 1,
          ease: "power1.inOut",
        }),
        tl.from(".navbar-brand", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power4",
        }),
        tl.from(".nav-link", {
          opacity: 0,
          y: -20,
          stagger: 0.15,
        }),
        tl.from(".cloud-core", {
          y: 30,
          opacity: 0,
          ease: "bounce"
        })
        tl.from(".cloud-icon", {
          y: 20,
          opacity: 0,
          ease: "power3.in",
          stagger: 0.1
        })
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
