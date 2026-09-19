import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const IntroTimeline = ({heroTitleRef, heroSubTitleRef, heroTextRef}) => {
  const tl = gsap.timeline();
      gsap.from(heroTitleRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
        trigger: "#wib",
        start: "top 30%",
        end: "bottom bottom",
        fastScrollEnd: true,
        invalidateOnRefresh: true
      }
      }),
      gsap.from(heroSubTitleRef.current, {
        y: 20,
        opacity: 0,
        delay: 1.5,
        scrollTrigger: {
        trigger: "#wib",
        start: "top 30%",
        end: "bottom bottom",
        fastScrollEnd: true,
        invalidateOnRefresh: true
      }
      })
};

export default IntroTimeline;
