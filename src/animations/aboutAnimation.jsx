import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AboutAnimation = () => {
//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: "#about",
//       start: "top 30%",
//       end: "bottom bottom",
//       pin: true,
//       scrub: 3,
//       fastScrollEnd: true,
//       invalidateOnRefresh: true,
//     },
//   });
  gsap.from(".title", {
    y: "-50%",
    opacity: 0,
  });
  gsap.from(
    ".hero-left",
    {
      x: "-50%",
      opacity: 0,
    },
    ">",
  );
  gsap.from(
    ".hero-right",
    {
      x: "50%",
      opacity: 0,
    },
    "<",
  );

  gsap.to(".float-element.float-react", {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 5,
    ease: "power1.inOut",
  });
  gsap.to(".float-element.float-js", {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power1.inOut",
  });
  gsap.to(".float-element.float-gsap", {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 3,
    ease: "power1.inOut",
  });
  gsap.to(".float-element.float-github", {
    y: -20,
    repeat: -1,
    yoyo: true,
    duration: 4,
    ease: "power1.inOut",
  });
};
