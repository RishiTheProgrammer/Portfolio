import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const IntroTimeline = ({heroTitleRef, heroSubTitleRef}) => {
  // const tl = gsap.timeline();
  const statCards = document.querySelectorAll(".stat-card");
  const stackCard = document.querySelectorAll(".stack-card");
  const mm = gsap.matchMedia();
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
      }),
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

mm.add("(min-width: 768px)", () => {
  gsap.fromTo(
    stackCard,
    { x: "400%" },
    {
      x: "-950%",
      ease: "none",

      scrollTrigger: {
        trigger: "#stack",
        start: "top top",
        end: "+=2000",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    }
  );
});

mm.add("(max-width: 767px)", () => {
  gsap.from(stackCard, {
    y: 20,
    opacity: 0.2,
    stagger: 0.15,

    scrollTrigger: {
      trigger: "#stack",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });
});
    }

export default IntroTimeline;
