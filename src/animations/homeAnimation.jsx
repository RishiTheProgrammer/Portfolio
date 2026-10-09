import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IntroTimeline = ({heroTitleRef, heroSubTitleRef, saturnRef}) => {
  // const tl = gsap.timeline();
  const statCards = document.querySelectorAll(".stat-card");
  const moveSaturn = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 20;
      const y = (event.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(saturnRef.current, {
        x,
        y,
        duration: 1,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveSaturn);
    return () => {
      window.removeEventListener("mousemove", moveSaturn);
  },
      gsap.set(statCards, {
        opacity: 0,
        y: 20
      }),
      gsap.to(statCards, {
        stagger: 0.25,
        y: 0,
        opacity: 1,
        scrollTrigger: {
        trigger: "#wib",
        start: "top 10%",
        end: "bottom bottom",
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        }
      });
    }

export default IntroTimeline;
