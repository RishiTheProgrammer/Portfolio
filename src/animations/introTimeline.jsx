import gsap from "gsap";

// gsap.registerPlugin(useGSAP);

const introTimeline = () => {
    const tl = gsap.timeline({
        timeScale: 2
      });
        tl.from(".sidebar", {
          x: "-100%",
          duration: .5
        });
    
        tl.from(".img-logo", {
          y: 20,
          opacity: 0,
          duration: .5
        });
    
        tl.from(".logoName .a", {
          opacity: 0,
          duration: .5,
          stagger: .2,
        });
    
        tl.from(".nav-link", {
          opacity: 0,
          x: 20,
          duration: .5,
          stagger: .2,
        });
    
        tl.from(".logoBrand", {
          opacity: 0,
          y: 20,
          duration: .5,
          stagger: .2,
        });
    }

export default introTimeline